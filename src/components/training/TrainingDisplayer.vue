<template>
  <v-dialog
    v-model="dialog"
    width="500"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template #activator="{ on, attrs }">
      <v-btn color="accent" dark v-bind="attrs" v-on="on" x-large>
        <v-icon color="white" class="mr-3">fa-play</v-icon> Begin de training
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="accent white--text">
        Training
      </v-card-title>

      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-btn color="primary" @click="dialog = false" :disabled="false" x-large>
          <v-icon color="white" class="mr-3">fa-flag</v-icon> Eindig training
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'TrainingDisplayer',
  data: () => ({
    dialog: false,
  }),
  props: {
    selectedTrainings: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>

</style>
