var exec = require('cordova/exec');

var PLUGIN_NAME = 'IOSAppInfo';

module.exports = {
        appIsInstalled: function (arg0, success, error) {
                exec(success, error, "IOSAppInfo", "appIsInstalled", [arg0]);
        },
        installApp: function (arg0, success, error) {
                exec(success, error, "IOSAppInfo", "installApp", [arg0]);
        },
        launchApp: function (arg0, success, error) {
                exec(success, error, "IOSAppInfo", "launchApp", [arg0]);
        },
        getAppVersion: function (arg0, success, error) {
                exec(success, error, "IOSAppInfo", "getAppVersion", [arg0]);
        }
};