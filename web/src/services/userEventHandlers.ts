import {User} from "../entities/user/User.js";
import {renderUserTable} from "./userTable.js";

export function handleSearch(users: User[]): void {
  const searchEl = window.document.getElementById('search') as HTMLInputElement;
  const searchValue = searchEl.value;
  const resultEl = window.document.getElementById('result');
  const usersEl = window.document.getElementById('users-table');
  const filtered = users.filter(
    (user) => searchValue !== '' && user.username.includes(searchValue)
  );

  usersEl.innerHTML = '';

  renderUserTable(filtered, resultEl);
}

export function handleReset(users: User[]): void {
  const resultEl = window.document.getElementById('result');
  const usersEl = window.document.getElementById('users-table');
  const search = window.document.getElementById('search') as HTMLInputElement;

  resultEl.innerHTML = '';
  search.value = '';

  renderUserTable(users, usersEl);
}
