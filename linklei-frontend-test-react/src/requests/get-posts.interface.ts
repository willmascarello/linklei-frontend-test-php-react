export interface IPosts {
  statusCode: number;
  message: string;
  data: Array<IPost>;
}

export interface IPost {
  user: string;
  date: string;
  type: string;
  text: string;
}
