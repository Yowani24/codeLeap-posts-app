export interface ILoggedInUser {
  id: string;
  name: string;
}

export interface IPost {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}
export const USERS: ILoggedInUser[] = [
  {
    id: "1",
    name: "Joao Costa",
  },
  {
    id: "2",
    name: "Maria Silva",
  },
  {
    id: "3",
    name: "Anna Brown",
  },
];
