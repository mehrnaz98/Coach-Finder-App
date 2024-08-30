export default {
  registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    fetch(
      'https://find-a-coach-app-6891b-default-rtdb.firebaseio.com/coaches.json',
      {
        method: 'PUT',
      }
    );

    context.commit('registerCoach', coachData);
  },
};
