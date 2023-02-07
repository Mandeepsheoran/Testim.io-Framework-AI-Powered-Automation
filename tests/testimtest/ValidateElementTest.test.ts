"use strict";

import { Locator, test, go, resize, exists, l } from 'testim';

Locator.set(require('./locators/locators.js'));

test("Validate Element Test", async () => {
  await go("https://www.westjet.com/en-ca");
  await resize({width: 1024, height: 680});
  //TODO Please add an assertion here
await exists(l("c17jncxaiDbnQJlR"));
  //TODO Please add an assertion here
await exists(l("sign-in-my-account-cta"));
});
