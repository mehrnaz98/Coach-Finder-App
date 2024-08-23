<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
      </header>
      <base-button link :to="contactLink">Contact</base-button>
      <router-view></router-view>
    </base-card>
  </section>
</template>
