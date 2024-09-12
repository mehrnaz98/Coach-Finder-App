export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
  },
  didAutoLogout(state) {
    state.didAutoLogout = true;
  },
};
