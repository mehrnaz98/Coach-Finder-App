export default {
  requests(state, getters, rootState, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(state) {
    return state.getter.requests && state.getter.requests.length > 0;
  },
};
