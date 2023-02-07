"use strict";

import { Locator, test, go, resize, click, l, type, text } from 'testim';

Locator.set(require('./locators/locators.js'));

test("Test Data Provider", async () => {
  await go("https://www.westjet.com/en-ca");
  await resize({width: 1024, height: 680});
  await click(l("O17RLzx6MbRXbtmY"));
  await click(l("Flight_status"));
  await type(l("6nfIRon9ganvh5Ng"), '');
  await click(l("Flight_Number"));
  await type(l("Flight_Number"), flightno);
  await click(l("SEARCH_FLIGHTS"));
  await click(l(".v-icon"));
  if (await text(l("lvmsmUhDYsSBqrY5")) === "' ON TIME '") {
    await click(l("No_flight_status_was_found._If_you_"));
  }
});
