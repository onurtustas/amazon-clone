import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challange-dc130.cloudfunctions.net/api",
});

export default instance;
