import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsapp-clone-vs.herokuapp.com",
});

export default instance;
