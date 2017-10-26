//
//  IOSAppInfo.h
//  IOSPlug
//
//  Created by Saifuddin Nair on 24/10/2017.
//

#import <Cordova/CDVPlugin.h>

@interface IOSAppInfo : CDVPlugin {
}

// The hooks for our plugin commands
- (void)appIsInstalled:(CDVInvokedUrlCommand *)command;
- (void)installApp:(CDVInvokedUrlCommand *)command;
- (void)launchApp:(CDVInvokedUrlCommand *)command;
- (void)getAppVersion:(CDVInvokedUrlCommand *)command;
@end
