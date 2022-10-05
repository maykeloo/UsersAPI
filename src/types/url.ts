export interface URLPayload {
  "filter[is_activated]": "ACTIVE" | "INACTIVE" | "ACTIVE,INACTIVE";
  page: number;
  search: string;
  perPage: number;
  "sort[birth_date]"?: "asc" | "desc";
  "sort[id]"?: "asc" | "desc";
  "sort[name]"?: "asc" | "desc";
  "sort[email]"?: "asc" | "desc";
  "sort[surname]"?: "asc" | "desc";
}
