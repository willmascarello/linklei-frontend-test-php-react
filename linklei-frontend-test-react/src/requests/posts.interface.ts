export interface IpostsResponseSuccess {
  statusCode: number;
  message: string;
  data: Array<IPost>;
}

export interface IPost {
  id: string;
  user: string;
  date: string;
  type: string;
  text: string;
}

export interface IPostsParams {
  user: string;
  type: string;
  text?: string;
}
