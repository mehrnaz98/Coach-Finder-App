export default {
  registerCoach(context, data) {
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    fetch(
      'https://find-a-coach-app-6891b-default-rtdb.firebaseio.com/coaches.json'
    );

    context.commit('registerCoach', coachData);
  },
};
