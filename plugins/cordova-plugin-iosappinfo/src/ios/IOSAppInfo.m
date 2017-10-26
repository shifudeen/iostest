//
//  IOSAppInfo.m
//  IOSPlug
//
//  Created by Saifuddin Nair on 24/10/2017.
//

#import "IOSAppInfo.h"
#import <Cordova/CDVAvailability.h>
#import "LSApplicationProxy.h"
#import "LSApplicationWorkspace.h"


@implementation IOSAppInfo

- (void)pluginInitialize {}

- (void)appIsInstalled:(CDVInvokedUrlCommand *)command
{
    CDVPluginResult* pluginResult = nil;
    NSString* bundleIdentifier = [command.arguments objectAtIndex:0];
    
    LSApplicationWorkspace* _workspace;
    _workspace = [NSClassFromString(@"LSApplicationWorkspace") new];
    
    BOOL isInstall = [_workspace applicationIsInstalled:bundleIdentifier];
    
    if (isInstall) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"installed"];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"not_installed"];
    }
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)installApp:(CDVInvokedUrlCommand *)command
{
    CDVPluginResult* pluginResult = nil;
    NSString* urlSufix = [command.arguments objectAtIndex:0];
    
    NSString* manifestURL = @"itms-services://?action=download-manifest&url=";
    manifestURL = [manifestURL stringByAppendingString:urlSufix];
    
    NSURL* itmsURL = [NSURL URLWithString:manifestURL];
    
    LSApplicationWorkspace* _workspace;
    _workspace = [NSClassFromString(@"LSApplicationWorkspace") new];
    
    UIApplication *application = [UIApplication sharedApplication];

    BOOL canInstall = [application canOpenURL:itmsURL];

    if (canInstall) {
        if ([application respondsToSelector:@selector(openURL:options:completionHandler:)]) {
            [application openURL:itmsURL options:@{}
               completionHandler:^(BOOL success) {
                   NSLog(@"Open %@: %d",manifestURL,success);
               }];
        } else {
            BOOL success = [application openURL:itmsURL];
            NSLog(@"Open %@: %d",manifestURL,success);
        }
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"installing"];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"install_error"];
    }
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}


- (void)launchApp:(CDVInvokedUrlCommand *)command
{
    CDVPluginResult* pluginResult = nil;
    
    NSString* bundleIdentifier = [command.arguments objectAtIndex:0];
    
    LSApplicationWorkspace* _workspace;
    _workspace = [NSClassFromString(@"LSApplicationWorkspace") new];
    
    BOOL isLaunched =  [_workspace openApplicationWithBundleID:bundleIdentifier];
    
    if (isLaunched) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"success"];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"failed"];
    }
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    
}

- (void)getAppVersion:(CDVInvokedUrlCommand *)command
{
    CDVPluginResult* pluginResult = nil;
    
    NSString* bundleIdentifier = [command.arguments objectAtIndex:0];
    NSString* shortVersion = @"-1";
    
    LSApplicationWorkspace* _workspace;
    LSApplicationProxy* _applicationProxy;
    
    _workspace = [NSClassFromString(@"LSApplicationWorkspace") new];
    
    _applicationProxy = [NSClassFromString(@"LSApplicationProxy") applicationProxyForIdentifier:bundleIdentifier];
    
    shortVersion = [_applicationProxy shortVersionString];
    
    if (![shortVersion  isEqual: @"-1"]) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:shortVersion];
    } else {
       pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:shortVersion];
    }
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
