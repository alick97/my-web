import { User } from "./user";
import axiosInstance from "@@/utils/http/axios";

class Auth {
    public static async authByNamePassword(name: string, password: string): Promise<User> {
        const resp = await axiosInstance.post("/api/v1/auth/login", {
            username: name,
            password,
        })
        const user = resp.data.user;
        return new User(user.id, user.name);
    } 
}
    
export { Auth };