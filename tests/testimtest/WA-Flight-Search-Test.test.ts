"use strict";

import { Locator, test, go, resize, type, l, click, sendCharacter } from 'testim';

Locator.set(require('./locators/locators.js'));

test("WA Flight Search Test", async () => {
  await go("https://www.westjet.com/en-ca");
  await resize({width: 1300, height: 760});
  await type(l("6nfIRon9ganvh5Ng"), '');
  await click(l("From"));
  await type(l("From"), 'ath ');
  await sendCharacter(l("From"), '\r');
  await click(l("Going_to"));
  await type(l("Going_to"), 'lon');
  await sendCharacter(l("Going_to"), '\r');
  await click(l("Departure_date"));
  await click(l("[aria-label='Next_Month']"));
  await click(l("[aria-label='Next_Month']"));
  await click(l("[aria-label='Next_Month']"));
  await click(l("[aria-label='Next_Month']"));
  await click(l("28_$1520"));
  await click(l("Return_date"));
  await click(l("30"));
  await type(l("Return_date"), '');
  await click(l("ypvu6LLilCDGR8nI"));
  await click(l("Athens"));
  await click(l("London"));
  await type(l("6nfIRon9ganvh5Ng"), '');
  await click(l("In-seat_video_player_/_library"));
  await click(l("Wi-Fi"));
  await click(l("In-seat_video_player_/_library"));
  await click(l("Flight_details"));
  await click(l("Athens_(ATH)"));
  await click(l("London_(YXU)"));
  await click(l("Close"));
});
