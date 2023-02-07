"use strict";

import { Locator, test, go, resize, type, l, click, sendCharacter, selectOption } from 'testim';

Locator.set(require('./locators/locators.js'));

test("WA Flight Sorting Test", async () => {
  await go("https://www.westjet.com/en-ca");
  await resize({width: 1280, height: 577});
  await Flight_Search();
  await click(l("$2,131.40"));
  await type(l("6nfIRon9ganvh5Ng"), '');
  await click(l("Sort_by:"));
  await selectOption(l("[id='flight-sort-dropdown']_>_:nth-"));
  await click(l("Sort_by:"), {button: undefined});
  await click(l("110V_AC_Power"));
});

// shared steps \\
async function Flight_Search() {
  await type(l("6nfIRon9ganvh5Ng"), '');
  await click(l("From"));
  await type(l("From"), 'ath ');
  await sendCharacter(l("From"), '\r');
  await click(l("Going_to"));
  await type(l("Going_to"), 'lon');
  await sendCharacter(l("Going_to"), '\r');
  await click(l("Two_people_relaxing_in_beach_chairs"));
  await type(l("6nfIRon9ganvh5Ng"), '');
  await click(l("Departure_date"));
  await click(l("[aria-label='Next_Month']"));
  await click(l("[aria-label='Next_Month']"));
  await click(l("[aria-label='Next_Month']"));
  await click(l("Msd2m6wtxGr6btNT"));
  await click(l("28"));
  await click(l("Return_date"));
  await click(l("zw5WOIMvnHS7f1cF"));
  await click(l("ypvu6LLilCDGR8nI"));
}

