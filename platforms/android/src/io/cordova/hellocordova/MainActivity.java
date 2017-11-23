/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package io.cordova.hellocordova;

import android.os.Bundle;
import android.os.Environment;
import android.util.Log;

import org.apache.cordova.*;

import java.io.File;
import java.lang.reflect.Method;

public class MainActivity extends CordovaActivity
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        // enable Cordova apps to be started in the background
        Bundle extras = getIntent().getExtras();
        if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
            moveTaskToBack(true);
        }

        // Set by <content src="index.html" /> in config.xml
        loadUrl(launchUrl);
    }
    protected void onStop()
    {
        Log.d("StorageSt", Environment.getExternalStorageState());
        String coverageFilePath = Environment.getExternalStorageDirectory() + File.separator + "coverage.exec";
        File coverageFile = new File(coverageFilePath);
        super.onStop();
        if(BuildConfig.DEBUG)
        {
            try {
                Class<?> emmaRTClass = Class.forName("com.vladium.emma.rt.RT");
                Method dumpCoverageMethod = emmaRTClass.getMethod("dumpCoverageData",coverageFile.getClass(), boolean.class, boolean.class);
                dumpCoverageMethod.invoke(null, coverageFile, true, false);
            } catch (Exception e) {}
        }
    }
}
