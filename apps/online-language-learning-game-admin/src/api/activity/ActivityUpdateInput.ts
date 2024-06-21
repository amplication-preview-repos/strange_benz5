import { AchievementUpdateManyWithoutActivitiesInput } from "./AchievementUpdateManyWithoutActivitiesInput";
import { StationWhereUniqueInput } from "../station/StationWhereUniqueInput";

export type ActivityUpdateInput = {
  achievements?: AchievementUpdateManyWithoutActivitiesInput;
  name?: string | null;
  order?: number | null;
  station?: StationWhereUniqueInput | null;
};
