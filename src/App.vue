<template>
  <v-app>
    <TheMainMenu/>

    <v-main style="background-color: #cce0ff">
      <router-view/>
    </v-main>

    <WorkoutsLoader/>
  </v-app>
</template>

<script>
import TheMainMenu from '@/components/home/TheMainMenu.vue';
import WorkoutsLoader from '@/components/WorkoutsLoader.vue';

export default {
  name: 'App',
  components: {
    WorkoutsLoader,
    TheMainMenu,
  },
};
</script>

<style scoped>
/*.background-layout { @/plugins/dayjs.js
  background-image: linear-gradient(to right bottom, #fffcf4 20%, #42ff2b7d 60%, #17e40a70 20%)
}*/
</style>
