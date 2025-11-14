import { renderUserTable } from "./userTable.js";
export function handleSearch(users) {
    const searchEl = window.document.getElementById('search');
    const searchValue = searchEl.value;
    const resultEl = window.document.getElementById('result');
    const usersEl = window.document.getElementById('users-table');
    const filtered = users.filter((user) => searchValue !== '' && user.username.includes(searchValue));
    usersEl.innerHTML = '';
    renderUserTable(filtered, resultEl);
}
export function handleReset(users) {
    const resultEl = window.document.getElementById('result');
    const usersEl = window.document.getElementById('users-table');
    const search = window.document.getElementById('search');
    resultEl.innerHTML = '';
    search.value = '';
    renderUserTable(users, usersEl);
}
//# sourceMappingURL=userEventHandlers.js.map