export interface IpostsResponseSuccess {
  statusCode: number;
  message: string;
  data: Array<IPost>;
}

export interface IPost {
  id: number;
  name: string;
  updated_at: string;
  type: string;
  text: string;
}

export interface IPostsParams {
  name: string;
  type: string;
  text?: string;
}
export interface IPutParams {
  id: number;
  name: string;
  updated_at: string;
  type: string;
  text: string;
}
