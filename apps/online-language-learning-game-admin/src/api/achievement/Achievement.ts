import { Activity } from "../activity/Activity";
import { Student } from "../student/Student";

export type Achievement = {
  activity?: Activity | null;
  createdAt: Date;
  id: string;
  points: number | null;
  rewardType?: "Option1" | null;
  student?: Student | null;
  updatedAt: Date;
};
