import {Appearance, Dimensions} from 'react-native';

class Shared {
  public systemColorScheme: 'dark' | 'light';
  constructor() {
    const currentTime = new Date().toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
    });
    console.log(currentTime);
    this.systemColorScheme = Appearance.getColorScheme() ?? 'light';

    this.systemColorScheme = 'light';
  }
  static getDeviceWidth() {
    return Dimensions.get('window').width;
  }
  static getDeviceHeight() {
    return Dimensions.get('window').height;
  }
}

const shared = new Shared();
export default shared;
