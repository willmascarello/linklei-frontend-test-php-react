import axios, { AxiosResponse } from "axios";

import { IPost, IpostsResponseSuccess } from "./posts.interface";

const deletePostPATH = (id: number) =>
  `http://localhost/linklei-frontend-test-php-react/linklei-frontend-test-php/post/${id}/delete`;

export const deletePost = (
  params: IPost
): Promise<AxiosResponse<IpostsResponseSuccess>> => {
  return axios.delete(deletePostPATH(params.id));
};
