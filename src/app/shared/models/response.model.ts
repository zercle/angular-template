import { HttpStatusCode } from "@angular/common/http";

export interface DataListResponse<T> {
  total?: number;
  count?: number;
  limit?: number;
  offset?: number;
  data: T[];
}

export interface ItemResponse<T> {
  success: boolean;
  result: T
}

export interface ErrorResponseItem {
  code: HttpStatusCode;
  message: string;
}
