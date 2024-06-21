import { AchievementListRelationFilter } from "../achievement/AchievementListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StudentWhereInput = {
  achievements?: AchievementListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  username?: StringNullableFilter;
};
