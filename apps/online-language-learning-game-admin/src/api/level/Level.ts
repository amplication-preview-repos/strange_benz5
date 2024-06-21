import { Station } from "../station/Station";

export type Level = {
  createdAt: Date;
  id: string;
  name: string | null;
  order: number | null;
  stations?: Array<Station>;
  updatedAt: Date;
};
