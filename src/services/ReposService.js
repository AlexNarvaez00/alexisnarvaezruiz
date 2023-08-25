import axios from "axios";
const BASE_URL = `https://api.github.com/users/AlexNarvaez00/repos`;

export function getAllRepos() {
  return axios.get(BASE_URL);
}
