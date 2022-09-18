<template>
  <v-dialog :value="show" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5"
          >Editar Palestra #{{ lecture.id }} {{ show }}</span
        >
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col class="pa-0" cols="12">
              <v-text-field
                v-model="name"
                label="Título da palestra"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small
          >*indique a duração da palestra ao final do nome (ex: Palestra
          10min)</small
        >
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="saveLecture()">
          Salvar
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog()">
          Fechar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import axios from "axios";
export default {
  name: "EditDialog",
  data: () => ({
  }),
  props: ["show", "lecture"],
  computed: {
    name: {
      get(){
        return this.lecture.name;
      },
      set(val){
        this.$emit('update:lecture', {...this.lecture, name: val})
      }
    },
  },
  methods: {
    saveLecture() {
      axios
        .put(`http://localhost:3000/lectures/${this.lecture.id}`, {
          lecture: { name: this.name },
        })
        .then(() => {
          this.$emit("updated");
          this.closeDialog();
        });
    },
    closeDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>
