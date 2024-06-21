import { Achievement } from "../achievement/Achievement";

export type Student = {
  achievements?: Array<Achievement>;
  createdAt: Date;
  email: string | null;
  id: string;
  updatedAt: Date;
  username: string | null;
};
