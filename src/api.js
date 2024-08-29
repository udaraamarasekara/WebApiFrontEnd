import axios from 'axios'
import Base64 from 'base-64'

const user = "user";
const pass = "pass";
const encodedCredentials = Base64.encode(`${user}:${pass}`).toString('base64');


export const api = axios.create({
    //  baseURL: `https://backend-web-api-75f83f1efeee.herokuapp.com/`,
    baseURL:`http://localhost:3000`,
    headers:{
      'X-Requested-With':'XMLHttpRequest',
      'Accept':'Application/json',
      'Authorization': `Basic ${encodedCredentials}`,
      'Content-Type': 'application/json'

    },
    withCredentials: false,
  });

  