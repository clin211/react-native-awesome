/* eslint-disable no-useless-escape */
import {Dimensions, FlexStyle, StyleProp, ViewStyle} from 'react-native';
export const topic = 'experiment-react-native-app';
export const topicString = `"${topic}"`;

export interface StylesFile {
  href: string;
  type: string;
  rel: string;
}

const domMutationObserveScript = `var MutationObserver =
        window.MutationObserver || window.WebKitMutationObserver;
    var observer = new MutationObserver(updateSize);
    observer.observe(document, {
        subtree: true,
        attributes: true
    });`;

const updateSizeWithMessage = (element: any, scalesPageToFit: boolean) =>
  `var usingScale = ${scalesPageToFit} ? screen.width / window.innerWidth : 1;
    var scaling = false;
    var zoomedin = false;
    var lastHeight = 0;
    var heightTheSameTimes = 0;
    var maxHeightTheSameTimes = 5;
    var forceRefreshDelay = 1000;
    var forceRefreshTimeout;
    var checkPostMessageTimeout;

    function updateSize() {
        if (zoomedin || scaling || document.fullscreenElement) {
            return;
        }
        if (!window.hasOwnProperty('ReactNativeWebView') || !window.ReactNativeWebView.hasOwnProperty('postMessage')) {
            checkPostMessageTimeout = setTimeout(updateSize, 200);
            return;
        }

        clearTimeout(checkPostMessageTimeout);
        var result = ${element}.getBoundingClientRect()
        height = result.height + result.top;
        if(!height) {
            height = ${element}.offsetHeight || document.documentElement.offsetHeight
        }
        width = result.width;
        if(!width) {
            width = ${element}.offsetWidth || document.documentElement.offsetWidth
        }


        window.ReactNativeWebView.postMessage(JSON.stringify({ width: Math.min(width, screen.width), height: height * usingScale, topic: ${topicString} }));

        // Make additional height checks (required to fix issues wit twitter embeds)
        clearTimeout(forceRefreshTimeout);

        if (lastHeight !== height) {
            heightTheSameTimes = 1;
        } else {
            heightTheSameTimes++;
        }

        lastHeight = height;

        if (heightTheSameTimes <= maxHeightTheSameTimes) {
            forceRefreshTimeout = setTimeout(
                updateSize,
                heightTheSameTimes * forceRefreshDelay
            );
        }
    }
  `;

const setViewportContent = (content: string) => {
  if (!content) {
    return '';
  }

  return `
    var meta = document.createElement("meta");
    meta.setAttribute("name", "viewport");
    meta.setAttribute("content", "${content}");
    document.getElementsByTagName("head")[0].appendChild(meta);
    `;
};

const detectZoomChanged = `
    var latestTapStamp = 0;
    var lastScale = 1.0;
    var doubleTapDelay = 400;
    function detectZoomChanged() {
        var tempZoomedin = (screen.width / window.innerWidth) > usingScale;
        tempZoomedin !== zoomedin && window.ReactNativeWebView.postMessage(JSON.stringify({ zoomedin: tempZoomedin, topic: ${topicString} }));
        zoomedin = tempZoomedin;
    }
    window.addEventListener('ontouchstart', event => {
        if (event.touches.length === 2) {
            scaling = true;
        }
    })
    window.addEventListener('touchend', event => {
        if(scaling) {
            scaling = false;
        }

        var tempScale = event.scale;
        tempScale !== lastScale && detectZoomChanged();
        lastScale = tempScale;
        var timeSince = new Date().getTime() - latestTapStamp;

        // double tap
        if(timeSince < 600 && timeSince > 0) {
            zoomedinTimeOut = setTimeout(() => {
                clearTimeout(zoomedinTimeOut);
                detectZoomChanged();
            }, doubleTapDelay);
        }

        latestTapStamp = new Date().getTime();
    });
    `;

const getBaseScript = ({
  viewportContent,
  scalesPageToFit,
  scrollEnabledWithZoomedin,
}: any) =>
  `
    ;
    window.seagmRN =true;
    var wrapper = document.getElementById("auto-height-webview-wrapper");
    if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.id = 'auto-height-webview-wrapper';

        while (document.body.firstChild instanceof Node) {
            wrapper.appendChild(document.body.firstChild);
        }
        document.body.appendChild(wrapper);
    }
    ${updateSizeWithMessage('wrapper', scalesPageToFit)}
    window.addEventListener('load', updateSize);
    window.addEventListener('resize', updateSize);
    ${domMutationObserveScript}
    ${setViewportContent(viewportContent)}
    ${scrollEnabledWithZoomedin ? detectZoomChanged : ''}
    updateSize();
  `;

const appendFilesToHead = ({files, script}: any) =>
  files.reduceRight((combinedScript: any, file: any) => {
    const {rel, type, href} = file;
    return `
        var link  = document.createElement('link');
        link.rel  = '${rel}';
        link.type = '${type}';
        link.href = '${href}';
        document.head.appendChild(link);
        ${combinedScript}`;
  }, script);

const screenWidth = Dimensions.get('window').width;

const bodyStyle = `
    body {
        margin: 0;
        padding: 0;
    }
`;

const appendStylesToHead = ({style, script}: any) => {
  const currentStyles = style ? bodyStyle + style : bodyStyle;
  // Escape any single quotes or newlines in the CSS with .replace()
  const escaped = currentStyles.replace(/\'/g, `\\'`).replace(/\n/g, '\\n');
  return `
        var styleElement = document.createElement('style');
        styleElement.innerHTML = '${escaped}';
        document.head.appendChild(styleElement);
        ${script}
    `;
};

const getInjectedSource = ({html, script}: any) => `
    ${html}
    <script>
    (function() {
        ${script}
    })();
    </script>
`;

interface ScriptProps {
  files?: StylesFile[];
  style?: StyleProp<ViewStyle>;
  customScript?: string;
  customStyle?: string;
  viewportContent?: string;
  scalesPageToFit?: boolean;
  scrollEnabledWithZoomedin?: boolean;
}

const getScript = ({
  files,
  customStyle,
  customScript,
  viewportContent,
  scalesPageToFit,
  scrollEnabledWithZoomedin,
}: ScriptProps) => {
  let script = getBaseScript({
    viewportContent,
    scalesPageToFit,
    scrollEnabledWithZoomedin,
  });
  script =
    files && files.length > 0 ? appendFilesToHead({files, script}) : script;
  script = appendStylesToHead({style: customStyle, script});
  customScript && (script = customScript + script);
  script += setBackgroundColor();
  return script;
};

const setBackgroundColor = () => {
  // const isDark = Appearance.getColorScheme() === 'dark';
  return `const instruction = document.getElementById('instruction');
    const description = document.getElementById('description');
    instruction.style.backgroundColor = 'white';
    description.style.backgroundColor = 'white';
    `;
};

export const getWidth = (style: FlexStyle) => {
  return style && style.width ? style.width : screenWidth;
};

interface SizeChange {
  height: number;
  previousHeight: number;
  width: number;
  previousWidth: number | string;
}
export const isSizeChanged = ({
  height,
  previousHeight,
  width,
  previousWidth,
}: SizeChange) => {
  if (!height || !width) {
    return;
  }
  return height !== previousHeight || width !== previousWidth;
};

export const reduceData = (props: any) => {
  const {source} = props;
  const script = getScript(props);
  const {html, baseUrl} = source;
  if (html) {
    return {
      currentSource: {baseUrl, html: getInjectedSource({html, script})},
    };
  } else {
    return {
      currentSource: source,
      script,
    };
  }
};

export const shouldUpdate = ({prevProps, nextProps}: any) => {
  if (!(prevProps && nextProps)) {
    return true;
  }
  for (const prop in nextProps) {
    if (nextProps[prop] !== prevProps[prop]) {
      if (
        typeof nextProps[prop] === 'object' &&
        typeof prevProps[prop] === 'object'
      ) {
        if (
          shouldUpdate({
            prevProps: prevProps[prop],
            nextProps: nextProps[prop],
          })
        ) {
          return true;
        }
      } else {
        return true;
      }
    }
  }
  return false;
};
