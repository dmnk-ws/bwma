import {User, IUser} from "../user/User.js";
import {Address} from "../user/Address.js";

class JsonLoader {
  public async load(): Promise<User[]> {
    return await fetch('/fixtures/users.json')
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error with status: ${response.status}`);

        return response.json();
      })
      .then(users => users.map(
        (user: IUser): User =>
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
      .catch(error => {
        console.error('Failed to load users:', error);

        return [] as User[];
      });
  }
}

export const loader = new JsonLoader();

loader.load().then(users => console.log(users));
