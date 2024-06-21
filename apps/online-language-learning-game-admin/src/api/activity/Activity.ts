import { Achievement } from "../achievement/Achievement";
import { Station } from "../station/Station";

export type Activity = {
  achievements?: Array<Achievement>;
  createdAt: Date;
  id: string;
  name: string | null;
  order: number | null;
  station?: Station | null;
  updatedAt: Date;
};
