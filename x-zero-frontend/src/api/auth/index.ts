import { User } from "./user";

class Auth {
    public static async authByNamePassword(name: string, password: string): Promise<User> {
        // TODO:
        if (password !== "password") {
            throw new Error("invalid");
        }
        return new User("1", name);
    } 
}
    
export { Auth };