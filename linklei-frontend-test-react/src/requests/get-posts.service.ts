import axios, { AxiosResponse } from "axios";
import MockAdapter from "axios-mock-adapter";

import { IpostsResponseSuccess } from "./posts.interface";
import { postsSuccessResponseMock } from "./get-posts.mock";

const getPostPATH =
  "http://localhost/linklei-frontend-test-php-react/linklei-frontend-test-php/post/save";

// MOCK START
// true to use mock
const mock = false;

export const baseUrlMock = axios.create({
  baseURL: ``,
});

export const mockAdapter = new MockAdapter(baseUrlMock, {
  delayResponse: 3000,
  onNoMatch: "passthrough",
});

if (mock) {
  mockAdapter.onGet(getPostPATH).reply(200, postsSuccessResponseMock);
  mockAdapter.reset();
}

// MOCK END

export const getPost = (): Promise<AxiosResponse<IpostsResponseSuccess>> => {
  return axios.get(getPostPATH);
};
