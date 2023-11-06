import axios, { AxiosResponse } from "axios";

import { IPutParams, IpostsResponseSuccess } from "./posts.interface";

const putPostPATH = (id: number) =>
  `http://localhost/linklei-frontend-test-php-react/linklei-frontend-test-php/post/${id}/edit`;

export const putPost = (
  params: IPutParams
): Promise<AxiosResponse<IpostsResponseSuccess>> => {
  return axios.put(putPostPATH(params.id), params);
};
