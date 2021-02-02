<template>
  <v-row class="text-center pa-2" justify="space-between" no-gutters>
    <navigation-button route-name="today" :disabled="!hasWorkouts">Vandaag</navigation-button>
    <navigation-button route-name="test" :disabled="!hasWorkouts">Overzicht</navigation-button>
    <navigation-button route-name="test" :disabled="!hasWorkouts">Vrije keuze</navigation-button>
    <navigation-button route-name="test" :disabled="!hasWorkouts">test</navigation-button>
  </v-row>
</template>

<script>
import NavigationButton from '@/components/home/NavigationButton.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    NavigationButton,
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters('Workout', ['hasWorkouts']),
  },
};
</script>

<style scoped>

</style>
