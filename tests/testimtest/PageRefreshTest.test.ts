"use strict";

import { Locator, test, go, resize, refresh } from 'testim';

Locator.set(require('./locators/locators.js'));

test("Page Refresh test", async () => {
  await go("https://www.westjet.com/en-ca");
  await resize({width: 1024, height: 680});
  await refresh();
});
