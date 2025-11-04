export class User {
    constructor(id = 42, firstname = "", lastname = "", address, email = "", phone = "") {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }
}
const user = {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    address: {
        id: 1,
        street: "Example Str. 1",
        city: "Example City",
        state: "Example State",
        zip: "12345",
        country: "Example Country"
    },
    email: "john.doe@example.org",
    phone: "0123456789"
};
console.log(user);
//# sourceMappingURL=User.js.map