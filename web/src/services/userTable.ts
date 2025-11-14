import {User} from "../entities/user/User.js";

function createTableCell(content: string): HTMLTableCellElement {
  const td = window.document.createElement('td');
  td.textContent = content;
  return td;
}

function createUserRow(user: User): HTMLTableRowElement {
  const tr = window.document.createElement('tr');
  tr.appendChild(
    createTableCell(user.id.toString())
  );
  tr.appendChild(
    createTableCell(user.username)
  );
  tr.appendChild(
    createTableCell(user.firstname)
  );
  tr.appendChild(
    createTableCell(user.lastname)
  );
  tr.appendChild(
    createTableCell(
      user.address
        ? `${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.zip}, ${user.address.country}`
        : ''
    )
  );
  tr.appendChild(
    createTableCell(user.email)
  );
  tr.appendChild(
    createTableCell(user.phone)
  );

  return tr;
}


export function renderUserTable(users: User[], tableEl: HTMLElement): void {
  tableEl.innerHTML = '';

  users.forEach(
    (user) => tableEl.appendChild(createUserRow(user))
  );
}