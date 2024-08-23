<template>
  <li>
    <h3>{{ fullname }}</h3>
    <h4>${{ rate }}/hour</h4>
  </li>
  <div>
    <span v-for="area in areas" :key="area">{{ area }}</span>
  </div>
  <router-link to="/coaches/c1/contact">Contact</router-link>
  <router-link to="/coaches/c1">View Details</router-link>
</template>
