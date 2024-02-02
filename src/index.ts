/**
 * https://github.com/adamgibbons/ics
 * https://duff.blog/cloud-functions-with-typescript
 * https://www.npmjs.com/package/@google-cloud/functions-framework 
 * https://medium.com/google-cloud/hot-reload-node-cloud-functions-64ffdb095a00 
 */

import { createEvents } from "ics";
import { generateName } from "./model";
import { HttpFunction } from "@google-cloud/functions-framework";

import type { EventAttributes } from "ics";

export const main: HttpFunction = (req, res) => {
  const data = req.body.event as EventAttributes[];
  const events = !Array.isArray(data) ? [ data ] : data;

  createEvents(events, (error, value) => {
    if(!error) {
      res.setHeader(`Content-Type`, `text/calendar; charset=utf-8`);
      res.setHeader(`Content-Disposition`, `attachment; filename=${generateName(events)}`);
      res.send(Buffer.from(value));
    } else {
      res.status(400).send(error);
    }
  });
};
