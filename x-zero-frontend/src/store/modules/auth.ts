import { User } from "../../api/auth/user"
import { Auth } from "../../api/auth"

const state = {
    user: null,
    isAuthenticated: false,
}

interface AuthParam {
    name: string;
    password: string;
}

// actions
const actions = {
    async authorize({commit, state}, authParam: AuthParam) {
        try {
            const user = await Auth.authByNamePassword(authParam.name, authParam.password);
            commit("setUserInfo", user);
            commit("setIsAuthenticated", true);
        } catch (e) {
            commit("setIsAuthenticated", false); 
        }
    }
}

// mutations
const mutations = {
    setIsAuthenticated(state, isAuthenticated: boolean) {
        state.isAuthenticated = isAuthenticated;
    },
    setUserInfo(state, user: User) {
        state.user = user;
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}