import { ActivityListRelationFilter } from "../activity/ActivityListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LevelWhereUniqueInput } from "../level/LevelWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type StationWhereInput = {
  activities?: ActivityListRelationFilter;
  id?: StringFilter;
  level?: LevelWhereUniqueInput;
  name?: StringNullableFilter;
  order?: IntNullableFilter;
};
