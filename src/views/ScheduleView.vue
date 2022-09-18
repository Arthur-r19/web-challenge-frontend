<template>
  <v-container>
    <div class="d-flex justify-center">
      <h1>Cronograma</h1>
    </div>
    <v-col v-for="track in tracks" :key="track.id" class="py-5">
      <v-row
        ><h3>Track {{ track.id }}</h3></v-row
      >
      <v-row v-for="lecture in track.lectures" :key="lecture.id">
        <v-col class="ma-0 pa-1" cols="1"
          ><span>{{ lecture.start_time }}</span></v-col
        >
        <v-col class="ma-0 pa-1" cols="11"
          ><v-card flat min-width="100%">
            <span class="mx-2">{{ lecture.name }}</span>
          </v-card></v-col
        >
      </v-row>
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
