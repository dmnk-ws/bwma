function createTableCell(content) {
    const td = window.document.createElement('td');
    td.textContent = content;
    return td;
}
function createUserRow(user) {
    const tr = window.document.createElement('tr');
    tr.appendChild(createTableCell(user.id.toString()));
    tr.appendChild(createTableCell(user.username));
    tr.appendChild(createTableCell(user.firstname));
    tr.appendChild(createTableCell(user.lastname));
    tr.appendChild(createTableCell(user.address
        ? `${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.zip}, ${user.address.country}`
        : ''));
    tr.appendChild(createTableCell(user.email));
    tr.appendChild(createTableCell(user.phone));
    return tr;
}
export function renderUserTable(users, tableEl) {
    tableEl.innerHTML = '';
    users.forEach((user) => tableEl.appendChild(createUserRow(user)));
}
//# sourceMappingURL=userTable.js.map