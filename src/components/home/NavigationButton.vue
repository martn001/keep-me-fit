<template>
  <v-btn width="120px"
         height="120px"
         outlined
         :to="{name: routeName}"
         color="primary"
         class="mb-3 white"
         :disabled="disabled">
    <slot/>
  </v-btn>
</template>

<script>
export default {
  name: 'NavigationButton',
  props: {
    routeName: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>

</style>
