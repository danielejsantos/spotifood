import axios from "axios";

export const API_MOCKY = axios.create({
  baseURL: "http://www.mocky.io/v2",
});

export const API_SPOTIFY = axios.create({
  baseURL: "https://api.spotify.com/v1",
});
