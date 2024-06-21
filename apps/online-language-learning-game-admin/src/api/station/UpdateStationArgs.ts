import { StationWhereUniqueInput } from "./StationWhereUniqueInput";
import { StationUpdateInput } from "./StationUpdateInput";

export type UpdateStationArgs = {
  where: StationWhereUniqueInput;
  data: StationUpdateInput;
};
