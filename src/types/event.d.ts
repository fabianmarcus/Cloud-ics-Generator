import { DateArray, DurationObject } from "ics";

export type EventTimeRange = ({ end: DateArray } | { duration: DurationObject });