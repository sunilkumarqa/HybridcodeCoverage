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
		document.getElementById("login").addEventListener 
		("click", loginFunction);  
        
		/* 
		document.getElementById("tst").addEventListener("click", testFun);
		function testFun(){
					window.plugins.toast.showLongBottom('test is called', 'long', 'bottom')
		}*/
		
		function loginFunction() {
			var uName = document.getElementById("userName").value;
			var psd = document.getElementById("pswd").value;
			if(uName == "sunil"){
				if(psd == "sunil"){
					homePage();
					
				} else {
					window.plugins.toast.showLongBottom('Password Is Incorrect', 'long', 'bottom')
					//alert("Password Is Incorrect");
				}
			} else {
				window.plugins.toast.showLongBottom('User Name Is Incorrect', 'long', 'bottom')
					//alert("User Name Is Incorrect");
			}
		}
		
		function homePage(){
			window.plugins.toast.showLongBottom('Login Successful', 'long', 'bottom')
			//alert("Login Successful");
			window.location = "welcomePage.html";
		}
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();