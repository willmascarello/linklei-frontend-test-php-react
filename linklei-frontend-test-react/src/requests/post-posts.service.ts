import axios, { AxiosResponse } from "axios";

import { IPostsParams, IpostsResponseSuccess } from "./posts.interface";

const postPostPATH =
  "http://localhost/linklei-frontend-test-php-react/linklei-frontend-test-php/post/save";

export const postPost = (
  params: IPostsParams
): Promise<AxiosResponse<IpostsResponseSuccess>> => {
  return axios.post(postPostPATH, params);
};
