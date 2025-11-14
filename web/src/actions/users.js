var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mapUsersFromJSON } from "../services/userMapper.js";
const API_USER_URL = 'http://127.0.0.1:8081/users';
export function fetchAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch(`${API_USER_URL}/`)
            .then((response) => response.json())
            .then((users) => mapUsersFromJSON(users))
            .catch((error) => console.error(error));
    });
}
//# sourceMappingURL=users.js.map