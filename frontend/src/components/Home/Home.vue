<template>
  <div class="home">
    <div class="title"></div>
    <div class="d-flex flex-column align-center fill-height elevation-0">
      <p class="display-2 text-center mt-8">
        Gerenciamentos
      </p>
      <div class="cards d-flex justify-space-around align-center fill-height flex-wrap">
        <v-card exact to="/home/instituicoes" height="250px" min-width="250px"  class="my-4"
                :hover="false"
                v-if="isValidadora && canSeeInst">
          <v-icon style="left:26px" size=200px>mdi-office-building</v-icon>
          <div style="text-align:center"> Instituições</div>
        </v-card>
        <v-card exact to="/home/cursos" height="250px" min-width="250px"  class="my-4" v-if="canSeeCourses">
          <v-icon size=200px>mdi-book-multiple</v-icon>
          <div style="text-align:center">Cursos</div>
        </v-card>
        <v-card exact to="/home/usuarios" height="250px" min-width="250px"  class="my-4" v-if="canSeeFunc">
          <v-icon style="left:26px" size=200px>mdi-account-multiple</v-icon>
          <i class="bi bi-inboxes-fill"></i>
          <div style="text-align:center"> Funcionários</div>
        </v-card>
        <v-card exact to="/home/solicitacoes" height="250px" min-width="250px" class="my-4"
                v-if="canSeeSolicitations">
          <v-icon style="left:26px" size=200px>mdi-package-variant-closed</v-icon>
          <div style="text-align:center"> Solicitações</div>
        </v-card>
        <v-card exact height="250px" min-width="250px" class="my-4" v-if="canValidate">
          <v-icon style="left:26px" size=200px>mdi-book</v-icon>
          <div style="text-align:center"> Validar diploma</div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import consts from "../../consts/consts.js";
export default {
  name: "Home",
  data: () => {
    return {};
  },
  computed: {
    canSeeInst() {
      return consts.CAN_GET_EDIT_INST.includes(localStorage.cargo);
    },
    canSeeCourses() {
      return consts.CAN_MANAGE_COURSES.includes(localStorage.cargo);
    },
    canSeeSolicitations() {
      return consts.CAN_GET_SOLICITATIONS.includes(localStorage.cargo);
    },
    isValidadora() {
      return localStorage.validadora;
    },
    canSeeFunc() {
      return consts.CAN_MANAGE_USERS.includes(localStorage.cargo);
    },
    canValidate() {
      return localStorage.cargo == "COL";
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: auto;
  height: calc(100vh - 48px);
  width: 100vw;

  .cards {
    width: 70vw;
  }
  hover {
    background-color: transparent !important;
  }
}
</style>
