"use strict";

import { Locator, test, go, resize, scrollToElement, l, click, type } from 'testim';

Locator.set(require('./locators/locators.js'));

test("WestJet Demo 1", async () => {
  await go("https://www.westjet.com/en-ca");
  await resize({width: 1290, height: 760});
  await scrollToElement(l(".origin-input_[type='button']"));
  await click(l("Clear"));
  await click(l("From"));
  await type(l("From"), 'athen');
  await click(l("Athen_s_Greece_ATH"));
  await click(l("Going_to"));
  await type(l("Going_to"), 'london');
  await click(l(",_ON"));
  await click(l("Trip_type_Return_trip_Switch_From_G"));
  await type(l("Skip_to_content_Search_Sign_in_Flig"), '.');
  await click(l(".departure-date_[type='button']"));
  await click(l("Departure_date"));
  await click(l("[aria-label='Next_Month']"));
  await click(l("[aria-label='Next_Month']"));
  await click(l("[aria-label='Next_Month']"));
  await click(l("[aria-label='Next_Month']"));
  await click(l("$1985"));
  await click(l(".return-date_[type='button']"));
  await click(l("Return_date"));
  await click(l("[aria-label='Next_Month']"));
  await click(l("1"));
  await click(l("GET_FLIGHTS"));
  await scrollToElement(l(".flights-header__top"));
  await click(l("Select_departing_flight_On_Jun._29,"));
  await type(l("You_are_on_the_departing_flight_res"), '');
  await click(l("06:15"));
  await click(l("05:34"));
  await click(l("ATH"));
  await click(l("YXU"));
});
