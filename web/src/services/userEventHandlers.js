import { renderUserTable } from "./userTable.js";
import { clearSuggestions, filterUsers, renderSuggestions } from "./userAutocomplete.js";
export function handleSearch(users) {
    const searchEl = window.document.getElementById('search');
    const searchValue = searchEl.value;
    const resultEl = window.document.getElementById('result');
    const usersEl = window.document.getElementById('users-table');
    const filtered = users.filter((user) => searchValue !== '' && (user.username.includes(searchValue) || `${user.firstname} ${user.lastname}`.includes(searchValue)));
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
export function handleAutocompletion(users) {
    var _a;
    const searchEl = window.document.getElementById('search');
    const searchValue = (_a = searchEl.value) === null || _a === void 0 ? void 0 : _a.trim();
    if (searchValue.length < 3) {
        clearSuggestions();
        return;
    }
    const filtered = filterUsers(users, searchValue);
    renderSuggestions(searchEl, filtered, searchValue);
}
//# sourceMappingURL=userEventHandlers.js.map