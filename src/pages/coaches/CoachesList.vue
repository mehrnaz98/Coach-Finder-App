<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <ul>
      LIST OF COACHES
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    filteredCoach() {
      return this.store.getters['coaches/coaches'];
    },
  },
};
</script>
