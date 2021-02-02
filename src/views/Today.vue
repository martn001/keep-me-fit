<template>
  <div>
    today
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Today',
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters('Workout', ['getWorkouts', 'getLocalStorage']),
  },
};
</script>

<style scoped>

</style>
