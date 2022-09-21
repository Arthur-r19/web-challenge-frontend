<template>
  <v-container>
    <div class="d-flex justify-center">
      <h1>Cronograma</h1>
    </div>
    <v-col v-for="(track, index) in tracks" :key="track.id">
      <v-container class="custom-card pa-4">
        <v-row>
          <h3 class="ml-2">Track {{ index + 1 }}</h3>
        </v-row>
        <v-row v-for="lecture in track.lectures" :key="lecture.id">
          <v-col class="py-1" cols="1">
            <span class="text-subtitle-2">{{ lecture.start_time }}</span>
          </v-col>
          <v-col class="py-1" cols="11">
            <span class="text-subtitle-2 mx-2">{{ lecture.name }}</span>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "ScheduleView",
  data: () => ({
    tracks: [],
  }),
  created() {
    this.getLectures();
  },
  methods: {
    getLectures() {
      axios.get("http://localhost:3000/tracks").then(({ data }) => {
        this.tracks = data;
      });
    },
  },
};
</script>
<style>
.custom-card {
  border-radius: 12px;
  border: rgb(118, 118, 118) solid 1px;
}
</style>
