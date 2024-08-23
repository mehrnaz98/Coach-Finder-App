<template>
  <button v-if="!link">
    <slot></slot>
  </button>
  <router-link v-else>
    <Slot></Slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
