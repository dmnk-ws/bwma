import {User} from "../entities/user/User.js";
import {mapUsersFromJSON} from "../services/userMapper.js";

const API_USER_URL = 'http://127.0.0.1:8081/users';

export async function fetchAllUsers(): Promise<User[] | void> {
  return await fetch(`${API_USER_URL}`)
    .then((response) => response.json())
    .then((users) => mapUsersFromJSON(users))
    .catch((error) => console.error(error));
}