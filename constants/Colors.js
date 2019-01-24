var appJSON = require('../app.json');

const tintColor = appJSON.expo.primaryColor;

export default {
  tintColor,
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
  primaryColor: appJSON.expo.primaryColor,
  secondaryColor: 'rgb(255,255,255)'
}
