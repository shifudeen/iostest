"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
System["import"]('ionic-angular/index').then(function (ionic) {
    var App = ionic.App;
    var Platform = ionic.Platform;
    var Page = ionic.Page;
    System["import"]('angular2/core').then(function (ng) {
        var Inject = ng.Inject;
        ng.enableProdMode();

        var HorizontalListPage = (function () {
            function HorizontalListPage() {
            }

            return HorizontalListPage;
        }());


        var callInstallApp = callInstallApp

        function callInstallApp() {
            alert("caliing functions");
        }


        HorizontalListPage = __decorate([
            Page({
                template: "<ion-navbar *navbar>\n" +
                "<ion-title>Horizontal list</ion-title>\n" +
                "</ion-navbar>\n" +
                "<ion-content>\n" +
                "    <ion-scroll scrollX=\"true\" class=\"item\">\n" +
                "        <ion-row>\n" +
                "            <ion-col width-20>\n" +
                "                <h2>Crash Bandicoot</h2>\n" +
                "                <h3>Lorem ipsum</h3>\n" +
                "                <h4>Dolor sit amet</h4>\n" +
                "            </ion-col>\n" +
                "            <ion-col width-20>\n" +
                "                <h2>The Legend of Zelda</h2>\n" +
                "                <h3>Lorem ipsum</h3>\n" +
                "                <h4>Dolor sit amet</h4>\n" +
                "            </ion-col>\n" +
                "            <ion-col width-20>\n" +
                "                <h2>Mario Kart</h2>\n" +
                "                <h3>Lorem ipsum</h3>\n" +
                "                <h4>Dolor sit amet</h4>\n" +
                "            </ion-col>\n" +
                "            <ion-col width-20>\n" +
                "                <h2>Doom</h2>\n" +
                "                <h3>Lorem ipsum</h3>\n" +
                "                <h4>Dolor sit amet</h4>\n" +
                "            </ion-col>\n" +
                "            <ion-col width-20>\n" +
                "                <h2>Pokémon</h2>\n" +
                "                <h3>Lorem ipsum</h3>\n" +
                "                <h4>Dolor sit amet</h4>\n" +
                "            </ion-col>\n" +
                "            <ion-col width-20>\n" +
                "                <h2>Final Fantasy</h2>\n" +
                "                <h3>Lorem ipsum</h3>\n" +
                "                <h4>Dolor sit amet</h4>\n" +
                "            </ion-col>\n" +
                "            <ion-col width-20>\n" +
                "                <h2>Shovel Knight</h2>\n" +
                "                <h3>Lorem ipsum</h3>\n" +
                "                <h4>Dolor sit amet</h4>\n" +
                "            </ion-col>\n" +
                "            <ion-col width-20>\n" +
                "                <h2>Crash Bandicoot</h2>\n" +
                "                <h3>Lorem ipsum</h3>\n" +
                "                <h4>Dolor sit amet</h4>\n" +
                "            </ion-col>\n" +
                "            <ion-col width-20>\n" +
                "                <h2>The Legend of Zelda</h2>\n" +
                "                <h3>Lorem ipsum</h3>\n" +
                "                <h4>Dolor sit amet</h4>\n" +
                "            </ion-col>\n" +
                "            <ion-col width-20>\n" +
                "                <h2>Mario Kart</h2>\n" +
                "                <h3>Lorem ipsum</h3>\n" +
                "                <h4>Dolor sit amet</h4>\n" +
                "            </ion-col>\n" +
                "            <ion-col width-20>\n" +
                "                <h2>Doom</h2>\n" +
                "                <h3>Lorem ipsum</h3>\n" +
                "                <h4>Dolor sit amet</h4>\n" +
                "            </ion-col>\n" +
                "            <ion-col width-20>\n" +
                "                <h2>Pokémon</h2>\n" +
                "                <h3>Lorem ipsum</h3>\n" +
                "                <h4>Dolor sit amet</h4>\n" +
                "            </ion-col>\n" +
                "            <ion-col width-20>\n" +
                "                <h2>Final Fantasy</h2>\n" +
                "                <h3>Lorem ipsum</h3>\n" +
                "                <h4>Dolor sit amet</h4>\n" +
                "            </ion-col>\n" +
                "            <ion-col width-20>\n" +
                "                <h2>Shovel Knight</h2>\n" +
                "                <h3>Lorem ipsum</h3>\n" +
                "                <h4>Dolor sit amet</h4>\n" +
                "            </ion-col>\n" +
                "        </ion-row>\n" +
                "    </ion-scroll>\n" +
                "<div class=\"app\">\n" +
                "    <h1>Notification Header</h1>\n" +
                "    <div id=\"deviceready\" class=\"blink\">\n" +
                "        <p class=\"event listening\">Connecting to Device</p>\n" +
                "        <p class=\"event received\">Device is Ready</p>\n" +
                "    </div>\n" +
                "</div>\n" +
                "<button class=\"button button-full button-assertive\" ng-click=\"callInstallApp\">\n" +
                "  Install App\n" +
                "</button>" +
                "</ion-content>"
            })
        ], HorizontalListPage);
        var MyApp = (function () {
            function MyApp(platform) {
                this.rootPage = HorizontalListPage;

                //cordova.plugins.IOSAppInfo.installApp('https://hub.tm.com.my:9443/store/api/mobileapp/getplist/wusoQJx7wx5VC9s.ipa',
                //    function(returnValue) {document.getElementsByTagName('h1')[0].innerHTML = returnValue;},
                //    function(errValue) {document.getElementsByTagName('h1')[0].innerHTML = errValue;}
                //);

                //var myInterval = setInterval(function () {
                //    cordova.plugins.IOSAppInfo.installAppProgress('com.emis.fiori1',
                //        function(returnValue) {
                //            document.getElementsByTagName('h1')[0].innerHTML = 'Installing:' + returnValue[0] + '<br>Completed Fraction:' + returnValue[1];
                //        },
                //        function(errValue) {document.getElementsByTagName('h1')[0].innerHTML = errValue;}
                //    );
                //},100);

                /*
                        cordova.plugins.IOSAppInfo.appIsInstalled('com.abyres.whatever',
                              function(returnValue) {document.getElementsByTagName('h1')[0].innerHTML = returnValue;},
                              function(errValue) {document.getElementsByTagName('h1')[0].innerHTML = errValue;}
                        );
                 */
            }

            return MyApp;
        }());
        MyApp = __decorate([
            App({
                template: "\n\t\t\t\t<ion-nav [root]=\"rootPage\"></ion-nav>\n      "
            }),
            __param(0, Inject(Platform))
        ], MyApp);



    })["catch"](function (err) { console.error(err); });



})["catch"](function (err) { console.error(err); });


