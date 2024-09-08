import mutations from '../coaches/mutations';
import actions from '../coaches/actions';
import getters from './getters';

export default {
  state() {
    return {
      userId: 'null',
      token: 'null',
      tokenExpiration: 'null',
    };
  },
  mutations,
  actions,
  getters,
};
