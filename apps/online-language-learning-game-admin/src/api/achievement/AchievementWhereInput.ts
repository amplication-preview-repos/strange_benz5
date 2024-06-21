import { ActivityWhereUniqueInput } from "../activity/ActivityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AchievementWhereInput = {
  activity?: ActivityWhereUniqueInput;
  id?: StringFilter;
  points?: IntNullableFilter;
  rewardType?: "Option1";
  student?: StudentWhereUniqueInput;
};
