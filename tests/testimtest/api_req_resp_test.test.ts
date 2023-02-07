"use strict";

import { Locator, test, go, resize, apiCall } from 'testim';

Locator.set(require('./locators/locators.js'));

test("API Testing", async () => {
  await go("https://reqres.in/api/users/2");
  await resize({width: 1024, height: 680});
  await validate_api();
});

// shared steps \\
async function validate_api() {
  await apiCall('https://reqres.in/api/users/2', {method: 'GET', sendViaWebApp: true, omitCookies: false});
}

