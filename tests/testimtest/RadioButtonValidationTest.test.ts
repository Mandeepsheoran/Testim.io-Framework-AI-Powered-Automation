"use strict";

import { Locator, test, go, resize, click, l, type, radio } from 'testim';

Locator.set(require('./locators/locators.js'));

test("Radio Button validation", async () => {
  await go("https://www.westjet.com/en-ca");
  await resize({width: 1024, height: 680});
  await click(l("Flight_status"));
  await type(l("6nfIRon9ganvh5Ng"), '');
  await click(l("OR_Browse_by_airport_Airport_Arriva"));
  await radio(l("Arrivals"));
});
