import { Activity } from "../activity/Activity";
import { Level } from "../level/Level";

export type Station = {
  activities?: Array<Activity>;
  createdAt: Date;
  id: string;
  level?: Level | null;
  name: string | null;
  order: number | null;
  updatedAt: Date;
};
