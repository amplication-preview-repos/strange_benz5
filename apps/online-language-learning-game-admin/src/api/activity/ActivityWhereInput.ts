import { AchievementListRelationFilter } from "../achievement/AchievementListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StationWhereUniqueInput } from "../station/StationWhereUniqueInput";

export type ActivityWhereInput = {
  achievements?: AchievementListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  order?: IntNullableFilter;
  station?: StationWhereUniqueInput;
};
