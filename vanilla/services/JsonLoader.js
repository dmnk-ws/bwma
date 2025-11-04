var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { User } from "../user/User.js";
import { Address } from "../user/Address.js";
class JsonLoader {
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield fetch('/fixtures/users.json')
                .then(response => {
                if (!response.ok)
                    throw new Error(`HTTP error with status: ${response.status}`);
                return response.json();
            })
                .then(users => users.map((user) => new User(user.id, user.firstname, user.lastname, user.address && new Address(user.address.id, user.address.street, user.address.city, user.address.state, user.address.zip, user.address.country), user.email, user.phone)))
                .catch(error => {
                console.error('Failed to load users:', error);
                return [];
            });
        });
    }
}
export const loader = new JsonLoader();
loader.load().then(users => console.log(users));
//# sourceMappingURL=JsonLoader.js.map