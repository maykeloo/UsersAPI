export interface User {
  id: string | number;
  name: string;
  surname: string;
  email: string;
  birth_date: string;
}

export interface GetUserPayload {
  data: User[];
  more: boolean;
  total: number;
}
