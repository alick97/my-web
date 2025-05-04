import { User } from "../../api/auth/user"
import { Auth } from "../../api/auth"
import { useStorage } from '@vueuse/core'
import { defineStore } from "pinia"
import { reactive, watch } from "vue";

interface AuthParam {
    name: string;
    password: string;
}

interface AuthState {
    user: User,
    isAuthenticated: Boolean,
}
// actions
const authorize = async (state: AuthState, authParam: AuthParam) => {
    try {
        const user = await Auth.authByNamePassword(authParam.name, authParam.password);
        state.user = user;
        state.isAuthenticated = true;
    } catch (e) {
        state.isAuthenticated = false;
        throw e;
    }
}

const useAuthStore = defineStore("authStore", {
    state: (): AuthState => {
        const storedState = useStorage<AuthState>('auth-state', {
            user: null,
            isAuthenticated: false,
        });
        
        const s = reactive({
            user: storedState.value.user,
            isAuthenticated: storedState.value.isAuthenticated,
        });

        watch(
            () => s,
            (newState) => {
                storedState.value = { ...newState };
            },
            { deep: true }
        );
        
        watch(storedState, (newStoredState) => {
            s.user = newStoredState.user;
            s.isAuthenticated = newStoredState.isAuthenticated;
        });
        
        return s;
    },
    getters: {
        isAuthorizedOk: (state) => {
            return state.isAuthenticated;
        }
    },
    actions: {
        async authorize(authParam: AuthParam) { return await authorize(this, authParam); }
    },
});

export {
    useAuthStore
}