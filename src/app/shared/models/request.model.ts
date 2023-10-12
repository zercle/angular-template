import { SortDirection } from "@angular/material/sort";
import { Params } from "@angular/router";

export interface DataListRequestParams extends Params {
  order_by?: string;
  direction?: SortDirection;
  limit?: number;
  offset?: number;
}
