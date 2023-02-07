"use strict";

import { Locator, test, go, resize, exists, l, click, type } from 'testim';

Locator.set(require('./locators/locators.js'));

test("WA Help Options", async () => {
  await go("https://www.westjet.com/en-ca");
  await resize({width: 1024, height: 680});
  await Login('mandeep.sheoran@igtsolutions.com', 'Hallo@123');
  // Converting a 'drag' step has to be done manually at this time
  await click(l(".com-widget-overlap"));
  await click(l("[id='mega-nav\:help']_.glyph"));
  await click(l("Self-serve_options"));
  await click(l("[id='mega-nav\:help']_.glyph"));
  await click(l("Frequently_asked_questions"));
  await click(l("h1"));
  await click(l("[id='mega-nav\:help']_.glyph"));
  await click(l("Contact_us"));
  await click(l("h1"));
});

// shared steps \\
async function Login(userName, password) {
  if (!(await exists(l("lvmsmUhDYsSBqrY5"), {forceVisibility: true}))) {
    return;
  }
  await click(l("0GmeOcTV6c0EOPOZ"));
  await click(l("Email_or_WestJet_Rewards_ID"));
  await type(l("Email_or_WestJet_Rewards_ID"), 'mandeep.sheoran@igtsolutions.com');
  await click(l("Password"));
  await type(l("Password"), 'Hallo@123');
  await click(l("SIGN_IN"));
  await click(l("sign-in-my-account-cta"));
  await click(l(".glyph-close"));
}

