<template>
  <button>
    <slot></slot>
  </button>
  <router-link>
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
