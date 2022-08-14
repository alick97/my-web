import { createStore, useStore as baseUseStore, Store } from "vuex";
import { InjectionKey } from "vue";
import auth from "./modules/auth"

const store = createStore({
  modules: {
    auth,
  }
});

const key: InjectionKey<Store<any>> = Symbol();

function useStore() {
  // return baseUseStore(key);
  return baseUseStore();
}

export {
  store,
  key,
  useStore,
}