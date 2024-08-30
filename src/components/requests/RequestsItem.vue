<template>
  <li>
    <div>
      <a :href="">{{ email }}</a>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<script>
export default {
  props: ['email', 'message'],
};
</script>
