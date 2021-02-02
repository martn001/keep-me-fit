<template>
  <v-app-bar
    app
    color="primary"
    dark
    elevation="0"
    height="60"
  >
    <v-row no-gutters align="center">
      <v-col col="1">
        <v-btn color="white" text rounded :to="{name: 'home'}" v-show="!onHomePage" height="50" width="50" small exact>
          <v-icon>fa-chevron-left</v-icon>
        </v-btn>
      </v-col>
      <v-col col="10" class="text-center">
        <span class="title">Keep me fit!</span>
      </v-col>
      <v-col col="1"></v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheMainMenu',
  computed: {
    onHomePage() {
      return this.$route.name === 'home' || typeof this.$route.name === 'undefined';
    },
  },
};
</script>

<style scoped>

</style>
