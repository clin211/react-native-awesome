import {Linking} from 'react-native';

/**
 * @description 根据传入的链接地址进行跳转
 * @param url 带跳转的链接地址
 */
export async function openLinkInBrowser(
  url: string,
  successCallback?: () => void,
) {
  try {
    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) {
      successCallback?.();
      Linking.openURL(url);
    }
  } catch (error) {
    console.log('This url is invalid.');
  }
}
