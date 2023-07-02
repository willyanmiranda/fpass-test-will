import axios from "axios";

import md5 from "md5";

const publicKey: string = "50a0d7e102774e571d3c9ca5fbe7d358";

const privateKey: string = "0c5500c07bd677eb76226cd9154625e120ed8b80";

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const api = axios.create({
  baseURL: `https://gateway.marvel.com:443/v1/public/`,
  params: {
    ts: time,
    apikey: publicKey,
    hash,
  },
});

export default api;
