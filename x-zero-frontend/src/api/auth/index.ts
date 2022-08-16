import { User } from "./user";
import axios from "axios";

class Auth {
    public static async authByNamePassword(name: string, password: string): Promise<User> {
        const response = await axios.post("/api/v1/auth/login", {
            username: name,
            password,
        })
        const user = response.data.user;
        return new User(user.id, user.name);
    } 
}
    
export { Auth };