import { SortOrder } from "../../util/SortOrder";

export type AchievementOrderByInput = {
  activityId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  points?: SortOrder;
  rewardType?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
