import { AchievementCreateNestedManyWithoutActivitiesInput } from "./AchievementCreateNestedManyWithoutActivitiesInput";
import { StationWhereUniqueInput } from "../station/StationWhereUniqueInput";

export type ActivityCreateInput = {
  achievements?: AchievementCreateNestedManyWithoutActivitiesInput;
  name?: string | null;
  order?: number | null;
  station?: StationWhereUniqueInput | null;
};
