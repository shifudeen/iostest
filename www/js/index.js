/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        cordova.plugins.IOSAppInfo.installApp('https://hub.tm.com.my:9443/store/api/mobileapp/getplist/wusoQJx7wx5VC9s.ipa',
            function(returnValue) {document.getElementsByTagName('h1')[0].innerHTML = returnValue;},
            function(errValue) {document.getElementsByTagName('h1')[0].innerHTML = errValue;}
        );

        var myInterval = setInterval(function () {
            cordova.plugins.IOSAppInfo.installAppProgress('com.emis.fiori1',
                function(returnValue) {
                    document.getElementsByTagName('h1')[0].innerHTML = 'Installing:' + returnValue[0] + '<br>Completed Fraction:' + returnValue[1];
                },
                function(errValue) {document.getElementsByTagName('h1')[0].innerHTML = errValue;}
            );
        },100);

        /*
                cordova.plugins.IOSAppInfo.appIsInstalled('com.abyres.whatever',
                      function(returnValue) {document.getElementsByTagName('h1')[0].innerHTML = returnValue;},
                      function(errValue) {document.getElementsByTagName('h1')[0].innerHTML = errValue;}
                );
         */

        console.log('Received Event: ' + id);
    }
};

app.initialize();
