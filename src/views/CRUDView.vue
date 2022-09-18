<template>
  <v-container>
    <v-row class="align-center">
      <v-col cols="4">
        <h1>Gerenciar Palestras</h1>
      </v-col>
      <v-col COLS="8">
        <v-row class="align-center ma-0">
          <v-text-field
            outlined
            hide-details="true"
            prepend-inner-icon="mdi-plus"
            v-model="lectureName"
            color="rgb(118, 118, 118)"
            label="Título da Palestra"
            class="mr-3 rounded-lg"
          ></v-text-field>
          <v-btn
            outlined
            color="rgb(118, 118, 118)"
            class="mr-3 rounded-lg"
            @click.stop="addLecture()"
          >
            Adicionar
          </v-btn>
          <v-btn
            outlined
            color="rgb(118, 118, 118)"
            class="mr-3 rounded-lg"
            @click.stop="$refs.input1.click()"
          >
            <v-icon>mdi-paperclip</v-icon>
            <input
              type="file"
              ref="input1"
              style="display: none"
              @change="uploadFile($event)"
            />
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-divider class="my-4"></v-divider>
    <v-col
      ><v-row>
        <v-card
          outlined
          class="mx-1 mb-2"
          v-for="lecture in lectures"
          :key="lecture.id"
          width="224"
          height="124"
        >
          <v-col class="pa-0 align-end">
            <v-row min-height="200" class="ma-0">
              <v-col class="pa-2 pb-0">
                <div style="min-height: 80px">
                  <span
                    class="text-subtitle-2"
                    v-if="lecture.name.length < 70"
                    >{{ lecture.name }}</span
                  >
                  <span class="text-subtitle-2" v-else>{{
                    lecture.name.substring(0, 70) + "..."
                  }}</span>
                </div>
              </v-col>
            </v-row>
            <v-divider class="my-1"></v-divider>
            <v-col class="ma-0">
              <v-row class="">
                <v-col>
                  <v-row class="justify-start">
                    <v-btn class="ml-2" depressed x-small>
                      Editar
                      <v-icon small color="green">mdi-pencil</v-icon>
                    </v-btn>
                  </v-row>
                </v-col>
                <v-col>
                  <v-row class="justify-end">
                    <v-btn
                      class="mr-2"
                      depressed
                      x-small
                      @click.stop="deleteLecture(lecture.id)"
                    >
                      Excluir
                      <v-icon small color="red">mdi-delete</v-icon>
                    </v-btn>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-col>
        </v-card>
      </v-row></v-col
    >
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "CRUDView",
  data: () => ({
    lectures: [],
    lectureName: "",
  }),
  created() {
    this.getLectures();
  },
  methods: {
    getLectures() {
      axios.get("http://localhost:3000/lectures").then((response) => {
        this.lectures = response.data;
      });
    },
    deleteLecture(id) {
      axios
        .delete(`http://localhost:3000/lectures/${id}`, {
          lecture: { name: this.lectureName },
        })
        .then(() => {
          this.getLectures();
        });
    },
    addLecture() {
      axios
        .post("http://localhost:3000/lectures", {
          lecture: { name: this.lectureName },
        })
        .then(() => {
          this.getLectures();
        });
    },
    uploadFile(event) {
      const formData = new FormData();
      formData.append("lecture[file]", event.target.files[0]);
      axios
        .post("http://localhost:3000/lectures/batch", formData)
        .then((response) => {
          console.log(response);
          if (response.status == 201) {
            this.$router.push({ name: "schedule" });
          }
        });
    },
  },
};
</script>
<style>
.v-text-field--outlined > .v-input__control > .v-input__slot {
  min-height: 40px;
  max-height: 40px;
}
.v-text-field--enclosed .v-input__prepend-inner {
  margin-top: 8px;
}
.v-text-field--outlined .v-label {
  top: 10px;
}
</style>
<style scoped>
.v-btn:not(.v-btn--round).v-size--default {
  height: 40px;
  min-width: 40px;
}
</style>
