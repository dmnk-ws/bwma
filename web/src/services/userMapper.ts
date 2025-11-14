import {IUser, User} from "../entities/user/User.js";
import {Address} from "../entities/user/Address.js";

export function mapUsersFromJSON(users: IUser[]): User[] {
  return users.map((user: IUser): User =>
    new User(
      user.id,
      user.username,
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
}