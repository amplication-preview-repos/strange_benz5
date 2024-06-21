import { SortOrder } from "../../util/SortOrder";

export type ActivityOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  order?: SortOrder;
  stationId?: SortOrder;
  updatedAt?: SortOrder;
};
