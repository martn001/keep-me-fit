<template>
  <page-layout>
    <navigation-button route-name="today">Vandaag</navigation-button>
    <navigation-button route-name="test">Overzicht</navigation-button>
    <navigation-button route-name="test">Vrije keuze</navigation-button>
    <navigation-button route-name="test">test</navigation-button>
  </page-layout>
</template>

<script>
import NavigationButton from '@/components/home/NavigationButton.vue';
import PageLayout from '@/components/PageLayout.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: { PageLayout, NavigationButton },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters('Workout', ['getWorkouts', 'getLocalStorage']),
  },
  methods: {
    ...mapActions('Workout', ['fetchWorkouts']),
  },
};
</script>

<style scoped>

</style>
