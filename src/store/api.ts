import axios from "axios";

export const conduitApi = axios.create({
  baseURL: "https://conduit.productionready.io/api"
});

export function setJWT(jwt: string) {
  conduitApi.defaults.headers.common["Authorization"] = `Token ${jwt}`;
}

export function clearJWT() {
  delete conduitApi.defaults.headers.common["Authorization"];
}
