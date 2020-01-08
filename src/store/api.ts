import Vue from "vue";
import axios from "axios";

import { UserSubmit, UserResponse, User } from "./models";

export const conduitApi = axios.create({
  baseURL: 'https://conduit.productionready.io/api'
});

export function setJWT(jwt: string) {
  conduitApi.defaults.headers.common['Authorization'] = `Token ${jwt}`;
}

export function clearJWT() {
  delete conduitApi.defaults.headers.common['Authorization'];
}

export async function loginUser(userSubmit: UserSubmit): Promise<User> {
  console.log(`api.ts : ${userSubmit.email} | ${userSubmit.password}`);
  const response = await conduitApi.post('/users/login', userSubmit)
  return (response.data as UserResponse).user;
}
