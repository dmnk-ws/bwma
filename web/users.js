var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { User } from "./user/User.js";
import { Address } from "./user/Address.js";
function fetchAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch('http://127.0.0.1:8081/users/')
            .then((response) => {
            return response.json();
        })
            .then((users) => users.map((user) => new User(user.id, user.firstname, user.lastname, user.address && new Address(user.address.id, user.address.street, user.address.city, user.address.state, user.address.zip, user.address.country), user.email, user.phone)))
            .then((users) => {
            const usersEl = window.document.getElementById('users');
            users.forEach((user) => {
                const tr = window.document.createElement('tr');
                const tdId = window.document.createElement('td');
                tdId.textContent = user.id.toString();
                const tdFirstname = window.document.createElement('td');
                tdFirstname.textContent = user.firstname;
                const tdLastname = window.document.createElement('td');
                tdLastname.textContent = user.lastname;
                const tdAddress = window.document.createElement('td');
                tdAddress.textContent = user.address
                    ? `${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.zip}, ${user.address.country}`
                    : '';
                const tdEmail = window.document.createElement('td');
                tdEmail.textContent = user.email;
                const tdPhone = window.document.createElement('td');
                tdPhone.textContent = user.phone;
                tr.appendChild(tdId);
                tr.appendChild(tdFirstname);
                tr.appendChild(tdLastname);
                tr.appendChild(tdAddress);
                tr.appendChild(tdEmail);
                tr.appendChild(tdPhone);
                usersEl === null || usersEl === void 0 ? void 0 : usersEl.appendChild(tr);
            });
        })
            .catch((error) => {
            console.error(error);
        });
    });
}
fetchAllUsers().then((response) => console.log(response));
//# sourceMappingURL=users.js.map