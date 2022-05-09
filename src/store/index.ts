import { createStore, createLogger } from 'vuex'
import auth from './modules/auth'
import app from './modules/app'
import user from './modules/user'
import createPersistedState from 'vuex-persistedstate';

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];
plugins.push(createPersistedState({ storage: window.sessionStorage }));
const store = createStore({
  plugins: plugins,
  modules: {
    app,
    auth,
    user
  },
})

export default store
