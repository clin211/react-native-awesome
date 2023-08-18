import {openLinkInBrowser} from '@/utils/util';
import React, {useState, useEffect, forwardRef} from 'react';
import {StyleSheet, Platform, ViewStyle, StyleProp} from 'react-native';
import {WebView, WebViewMessageEvent, WebViewProps} from 'react-native-webview';
import {
  topic,
  reduceData,
  getWidth,
  isSizeChanged,
  shouldUpdate,
  StylesFile,
} from './utils';

export interface SizeUpdate {
  width?: number;
  height?: number;
}

export interface AutoHeightWebViewProps extends WebViewProps {
  onSizeUpdated?: (size: SizeUpdate) => void;
  files?: StylesFile[];
  style?: StyleProp<ViewStyle> & SizeUpdate;
  customScript?: string;
  customStyle?: string;
  viewportContent?: string;
  scalesPageToFit?: boolean;
  scrollEnabledWithZoomedin?: boolean;
}

const AutoHeightWebView = React.memo(
  forwardRef<WebView, AutoHeightWebViewProps>((props, ref) => {
    const {
      style,
      onMessage,
      onSizeUpdated,
      scrollEnabledWithZoomedin,
      scrollEnabled,
    } = props;

    const [size, setSize] = useState({
      height: style && style.height ? style.height : 0,
      width: getWidth(style as any),
    });

    const [scrollable, setScrollable] = useState(false);

    // const [previewImages, setPreviewImages] = useState<{uri: string}[]>([]);
    // const [visible, setVisible] = useState(false);

    const handleMessage = (event: WebViewMessageEvent) => {
      if (event.nativeEvent) {
        try {
          const data = JSON.parse(event.nativeEvent.data);
          // 处理链接
          if (data?.method === 'linkClick') {
            const href = data?.href;
            openLinkInBrowser(href);
            return;
          }
          //   //  除了图片预览
          //   if (data?.method === 'imgClick' && data?.src !== '') {
          //     const index = previewImages.findIndex(item => item.uri === '');
          //     if (index < 0) {
          //       setPreviewImages([{uri: data.src}]);
          //       setVisible(true);
          //     }
          //   }
          if (data.topic !== topic) {
            onMessage && onMessage(event);
            return;
          }

          const {height, width, zoomedin} = data;
          !scrollEnabled &&
            scrollEnabledWithZoomedin &&
            setScrollable(!!zoomedin);
          const {height: previousHeight, width: previousWidth} = size;
          isSizeChanged({
            height,
            previousHeight,
            width,
            previousWidth: previousWidth as any,
          }) &&
            setSize({
              height,
              width,
            });
        } catch (error) {
          onMessage?.(event);
        }
      } else {
        onMessage?.(event);
      }
    };

    const currentScrollEnabled =
      scrollEnabled === false && scrollEnabledWithZoomedin
        ? scrollable
        : scrollEnabled;

    const {currentSource, script} = reduceData(props);

    const {width, height} = size;

    useEffect(() => {
      if (onSizeUpdated) {
        // @ts-ignore
        onSizeUpdated({height, width});
      }
    }, [width, height, onSizeUpdated]);

    return (
      <>
        {/* <ImagePreview
          images={previewImages}
          visible={visible}
          onRequestClose={() => setVisible(false)}
          backgroundColor={'rgba(0, 0, 0, 0.1)'}
        /> */}
        {React.createElement(WebView, {
          ...props,
          ref,
          onMessage: handleMessage,
          style: [
            styles.webView,
            {
              width,
              height,
            },
            style,
          ],
          injectedJavaScript: script,
          source: currentSource,
          scrollEnabled: currentScrollEnabled,
        })}
      </>
    );
  }),
  (prevProps, nextProps) => !shouldUpdate({prevProps, nextProps}),
);

const defaultProps = {
  useWebKit: true,
  scrollEnabled: false,
  javaScriptEnabled: true,
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
  originWhitelist: ['*'],
};

Platform.OS === 'android' &&
  Object.assign(defaultProps, {
    scalesPageToFit: false,
  });

Platform.OS === 'ios' &&
  Object.assign(defaultProps, {
    viewportContent: 'width=device-width',
  });

// @ts-ignore
AutoHeightWebView.defaultProps = defaultProps;

const styles = StyleSheet.create({
  webView: {
    backgroundColor: 'transparent',
  },
});

export default AutoHeightWebView;
