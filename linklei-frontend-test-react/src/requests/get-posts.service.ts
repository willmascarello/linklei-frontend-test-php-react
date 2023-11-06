import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { IpostsResponseSuccess } from "./posts.interface";
import { postsSuccessResponseMock } from "./get-posts.mock";

const getPostPATH = (limit: number) =>
  `http://localhost/linklei-frontend-test-php-react/linklei-frontend-test-php/post/${limit}/posts`;

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
  mockAdapter.onGet(getPostPATH(5)).reply(200, postsSuccessResponseMock);
  mockAdapter.reset();
}

// MOCK END

export const getPost = (limit: number): Promise<IpostsResponseSuccess> => {
  return axios.get(getPostPATH(limit));
};
