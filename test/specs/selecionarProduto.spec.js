// Requires the webdriverio client library
// (npm install webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js

const wdio = require('webdriverio');
async function main () {
  const caps = {"platformName":"Android",
                "appium:platformVersion":"9.0",
                "appium:deviceName":"Samsung Galaxy S9 FHD GoogleAPI Emulator",
                "appium:deviceOrientation":"portrait",
                "appium:app":"storage:filename=mda-1.0.16-19.apk",
                "appium:appPackage":"com.saucelabs.mydemoapp.android",
                "appium:appActivity":"com.saucelabs.mydemoapp.android.view.activities.SplashActivity",
                "appium:ensureWebviewsHavePages":true,
                "appium:nativeWebScreenshot":true,
                "sauce:options":{"name":"Appium Desktop Session -- Nov 30, 2022 7:17 PM"},
                "appium:newCommandTimeout":3600,
                "appium:connectHardwareKeyboard":true}
  const driver = await wdio.remote({
    protocol: "http",
    hostname: "ondemand.us-west-1.saucelabs.com",
    port: 80,
    path: "/wd/hub",
    capabilities: caps
  });
  let el1 = await driver.$("~Sauce Lab Back Packs");
  await el1.click();
  let el2 = await driver.$("com.saucelabs.mydemoapp.android:id/productTV");
  await el2.click();
  let el3 = await driver.$("com.saucelabs.mydemoapp.android:id/priceTV");
  await el3.click();
  await driver.touchAction([
    {action: 'press', x: [object Object], y: undefined},
    {action: 'moveTo', x: undefined, y: undefined},
    'release'
  ]);
  let el4 = await driver.$("~Tap to add product to cart");
  await el4.click();
  await driver.deleteSession();
}

main().catch(console.log);