"use strict";

import { Locator, test, go, resize, click, l, type } from 'testim';

Locator.set(require('./locators/locators.js'));

test("Page Accessibility Test", async () => {
  await go("https://www.westjet.com/en-ca");
  await resize({width: 1024, height: 680});
  // Converting a 'accessibility-validation-shared-step' step has to be done manually at this time
  await click(l("Book_a_flight"));
  await type(l("6nfIRon9ganvh5Ng"), '');
});
