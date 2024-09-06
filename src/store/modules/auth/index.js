import mutations from '../coaches/mutations';
import actions from '../coaches/actions';
import getters from './getters';

export default {
  state() {
    return {
      userId: 'c3',
    };
  },
  mutations,
  actions,
  getters,
};
