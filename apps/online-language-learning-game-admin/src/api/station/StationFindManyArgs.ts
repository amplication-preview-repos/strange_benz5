import { StationWhereInput } from "./StationWhereInput";
import { StationOrderByInput } from "./StationOrderByInput";

export type StationFindManyArgs = {
  where?: StationWhereInput;
  orderBy?: Array<StationOrderByInput>;
  skip?: number;
  take?: number;
};
