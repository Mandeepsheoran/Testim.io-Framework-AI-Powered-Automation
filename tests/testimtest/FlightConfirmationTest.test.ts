"use strict";

import { Locator, test, go, resize, type, l, click, sendCharacter } from 'testim';

Locator.set(require('./locators/locators.js'));

test("WA Flight Confirmation", async () => {
  await go("https://www.westjet.com/en-ca");
  await resize({width: 1280, height: 577});
  await type(l("6nfIRon9ganvh5Ng"), '');
  await click(l("From"));
  await type(l("From"), 'ath');
  await sendCharacter(l("From"), '\r');
  await click(l("Going_to"));
  await type(l("Going_to"), 'lon');
  await sendCharacter(l("Going_to"), '\r');
  await click(l("Departure_date"));
  await click(l("[aria-label='Next_Month']"));
  await click(l("[aria-label='Next_Month']"));
  await click(l("KhH28eneWcNBJfDy"));
  await click(l("[aria-label='Next_Month']"));
  await click(l("$1520"));
  await click(l("Return_date"));
  await click(l("$1577"));
  await type(l("Return_date"), '');
  await click(l("ypvu6LLilCDGR8nI"));
  await type(l("6nfIRon9ganvh5Ng"), '');
  await click(l("VIEW_REVIEW_ECONOMY_CABIN_FARES"));
  await click(l("CONFIRM"));
  await type(l("6nfIRon9ganvh5Ng"), '');
});
