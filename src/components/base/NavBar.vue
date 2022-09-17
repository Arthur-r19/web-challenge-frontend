<template>
  <v-app-bar app color="primary" dark>
    <v-row class="justify-center">
      <v-btn icon :to="{ name: 'lectures' }">
        <v-icon>mdi-human-male-board</v-icon></v-btn
      >

      <v-btn icon :to="{ name: 'schedule' }">
        <v-icon>mdi-calendar</v-icon>
      </v-btn>
    </v-row>
  </v-app-bar>
</template>
