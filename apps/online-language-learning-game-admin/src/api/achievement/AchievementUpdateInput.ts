import { ActivityWhereUniqueInput } from "../activity/ActivityWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AchievementUpdateInput = {
  activity?: ActivityWhereUniqueInput | null;
  points?: number | null;
  rewardType?: "Option1" | null;
  student?: StudentWhereUniqueInput | null;
};
