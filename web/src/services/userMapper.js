import { User } from "../entities/user/User.js";
import { Address } from "../entities/user/Address.js";
export function mapUsersFromJSON(users) {
    return users.map((user) => new User(user.id, user.username, user.firstname, user.lastname, user.address && new Address(user.address.id, user.address.street, user.address.city, user.address.state, user.address.zip, user.address.country), user.email, user.phone));
}
//# sourceMappingURL=userMapper.js.map