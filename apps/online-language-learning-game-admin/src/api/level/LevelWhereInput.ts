import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StationListRelationFilter } from "../station/StationListRelationFilter";

export type LevelWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  order?: IntNullableFilter;
  stations?: StationListRelationFilter;
};
