import {IUser, User} from "./entity/user/User.js";
import {Address} from "./entity/user/Address.js";

async function fetchAllUsers() {
  return await fetch('http://127.0.0.1:8081/users/')
  .then((response) => {
    return response.json();
  })
  .then((users: IUser[]) =>
    users.map((user: IUser): User =>
      new User(
        user.id,
        user.firstname,
        user.lastname,
        user.address && new Address(
          user.address.id,
          user.address.street,
          user.address.city,
          user.address.state,
          user.address.zip,
          user.address.country
        ),
        user.email,
        user.phone
      )
    )
  )
  .then((users: User[]) => {
    const usersEl = window.document.getElementById('users');

    users.forEach((user: User) => {
      const tr = window.document.createElement('tr');
      const tdId = window.document.createElement('td');
      const tdFirstname = window.document.createElement('td');
      const tdLastname = window.document.createElement('td');
      const tdAddress = window.document.createElement('td');
      const tdEmail = window.document.createElement('td');
      const tdPhone = window.document.createElement('td');

      tdId.textContent = user.id.toString();
      tdFirstname.textContent = user.firstname;
      tdLastname.textContent = user.lastname;
      tdAddress.textContent = user.address
        ? `${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.zip}, ${user.address.country}`
        : '';
      tdEmail.textContent = user.email;
      tdPhone.textContent = user.phone;

      tr.appendChild(tdId);
      tr.appendChild(tdFirstname);
      tr.appendChild(tdLastname);
      tr.appendChild(tdAddress);
      tr.appendChild(tdEmail);
      tr.appendChild(tdPhone);

      usersEl?.appendChild(tr);
    });
  })
  .catch((error) => {
    console.error(error);
  });
}

fetchAllUsers().then((response) => console.log(response));
