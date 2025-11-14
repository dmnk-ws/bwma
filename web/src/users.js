import { fetchAllUsers } from "./actions/users.js";
import { renderUserTable } from "./services/userTable.js";
import { handleAutocompletion, handleReset, handleSearch } from "./services/userEventHandlers.js";
let allUsers;
const searchButton = window.document.getElementById('search-button');
const resetButton = window.document.getElementById('reset-button');
const searchInput = window.document.getElementById('search');
fetchAllUsers()
    .then((users) => {
    if (!users)
        return;
    allUsers = users;
    const tableEl = window.document.getElementById('users-table');
    renderUserTable(users, tableEl);
})
    .catch((error) => console.error(error));
searchButton.addEventListener('click', () => handleSearch(allUsers));
resetButton.addEventListener('click', () => handleReset(allUsers));
searchInput.addEventListener('input', () => handleAutocompletion(allUsers));
//# sourceMappingURL=users.js.map