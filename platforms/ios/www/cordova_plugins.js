cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-iosappinfo.IOSAppInfo",
    "file": "plugins/cordova-plugin-iosappinfo/www/IOSAppInfo.js",
    "pluginId": "cordova-plugin-iosappinfo",
    "clobbers": [
      "cordova.plugins.IOSAppInfo"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "cordova.exec"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.2",
  "cordova-plugin-iosappinfo": "2.0.0",
  "cordova-plugin-ionic-webview": "1.1.16",
  "cordova-plugin-statusbar": "2.2.4-dev"
};
// BOTTOM OF METADATA
});