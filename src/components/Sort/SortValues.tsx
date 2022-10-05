export interface Values {
  name: string;
  sortBy: string;
  width: string;
}

export const values: Values[] = [
  {
    name: "Imię",
    sortBy: "sort[name]",
    width: "15",
  },
  {
    name: "Nazwisko",
    sortBy: "sort[surname]",
    width: "20",
  },
  {
    name: "E-mail",
    sortBy: "sort[email]",
    width: "20",
  },
  {
    name: "Data urodzenia",
    sortBy: "sort[birth_date]",
    width: "20",
  },
];
