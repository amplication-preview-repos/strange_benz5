import { Station as TStation } from "../api/station/Station";

export const STATION_TITLE_FIELD = "name";

export const StationTitle = (record: TStation): string => {
  return record.name?.toString() || String(record.id);
};
