"use strict";

import { Locator, test, go, resize, click, l, type, evaluate } from 'testim';

Locator.set(require('./locators/locators.js'));

test("Add Custom JS code as validation", async () => {
  await go("https://www.westjet.com/en-ca");
  await resize({width: 1280, height: 577});
  await click(l("[id='mega-nav\:manage-trips']_.glyp"));
  await click(l("Baggage_and_service_fees"));
  await click(l("There_are_quite_a_few_service_fees,"));
  await type(l("6nfIRon9ganvh5Ng"), '');
  await click(l("Additional_options"));
  await click(l("Did_you_know_we_fly_lobsters_too?_A"));
  await type(l("[id='tab-1481724947358-7']"), '');
  await click(l("$15.75_per_guest"));
  await Custom_action(l("element"));
});

// shared steps \\
async function Custom_action(element) {
  await evaluate((element) => {
    // Remove  string chars (e.g "$") and turn the price label to a number:
    var amount = Number(element.innerText.replace(/[^\-0-9\.]+/g,""));
    console.log('Collected value is' + amount);
    
    
    // Validate if the number is bigger than 1000:
    if(amount > 1000) {
      throw new Error('Amount should not be over 1000! Actual value: ' + amount);
    } else {
      return true;
    }
  }, element);
}

