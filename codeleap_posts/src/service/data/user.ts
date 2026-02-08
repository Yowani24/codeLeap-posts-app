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

export const postsData: IPost[] = [
  {
    id: 1,
    username: "joao costa",
    created_datetime: "2026-02-07T10:30:00.000Z",
    title: "Minha primeira experiência com React",
    content:
      "Hoje comecei a estudar React e estou impressionado com a facilidade de criar componentes reutilizáveis. Alguém tem dicas de boas bibliotecas de UI?",
  },
  {
    id: 2,
    username: "maria silva",
    created_datetime: "2026-02-07T11:15:22.000Z",
    title: "Dicas de Tailwind CSS",
    content:
      "O Tailwind mudou a forma como eu escrevo CSS. A produtividade aumenta drasticamente quando você para de alternar entre arquivos de estilo e o HTML.",
  },
  {
    id: 3,
    username: "anna brown",
    created_datetime: "2026-02-07T12:05:10.000Z",
    title: "Exploring the new API features",
    content:
      "Just finished implementing the new backend endpoints. The performance improvements are looking very promising for our next release!",
  },
  {
    id: 4,
    username: "joao costa",
    created_datetime: "2026-02-07T14:45:00.000Z",
    title: "Dúvida sobre Deploy",
    content:
      "Qual plataforma vocês recomendam para hospedar uma aplicação React simples? Vercel ou Netlify?",
  },
  {
    id: 5,
    username: "maria silva",
    created_datetime: "2026-02-07T15:20:30.000Z",
    title: "Design Patterns em JS",
    content:
      "Estive lendo sobre o padrão Observer hoje. É incrível como ele facilita a comunicação entre diferentes partes de um sistema complexo.",
  },
];
