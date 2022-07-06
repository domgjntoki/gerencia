<template>
  <section>
    <div class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- Container wrapper -->
      <div class="container">
        <!-- Navbar brand -->
        <a class="navbar-brand me-2" href="/frontend/public">
          <i class="fas fa-graduation-cap fa-2x me-3" style="color: #ff6219;"></i>
        </a>

        <!-- Toggle button -->
        <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarButtonsExample">
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/home">Início</a>
            </li>
            <li class="nav-item" v-if="canSeeCourses">
              <a class="nav-link" href="/home">Cursos</a>
            </li>
            <li class="nav-item" v-if="canSeeInst">
              <a class="nav-link" href="/home/instituicoes">Instituições</a>
            </li>
            <li class="nav-item" v-if="canSeeFunc">
              <a class="nav-link" href="/home/usuarios">Funcionários</a>
            </li>
            <li class="nav-item" v-if="canSeeSolicitations">
              <a class="nav-link" href="/home/solicitacoes">Solicitações</a>
            </li>
          </ul>
          <!-- Left links -->

          <div class="d-flex align-items-center">
            <a
                class="btn px-3"
                role="button"
                @click="logOut">
              <i class="fas fa-sign-out-alt"></i>
            </a>
          </div>
        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </div>

    <router-view></router-view>
  </section>
</template>

<script>
import Api from "../../services/api";
import consts from "../../consts/consts";
export default {
  name: "Header",
  data: () => {
    return {
      drawer: false,
      user: null,
    };
  },
  created() {
    console.log('route', this.$router.currentRoute);
    console.log(localStorage);
    this.user =
      localStorage.nome.charAt(0).toUpperCase() +
      localStorage.nome.substring(1);
  },
  watch: {
    localStorage() {
      this.user =
        localStorage.nome.charAt(0).toUpperCase() +
        localStorage.nome.substring(1);
    },
  },
  methods: {
    logOut() {
      Api.post("/logout").then(() => {
        localStorage.clear();
        this.$router.push("/");
      });
    },
  },
  computed: {
    canSeeFunc() {
      return consts.CAN_MANAGE_USERS.includes(localStorage.cargo);
    },
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
      return consts.CAN_MANAGE_COURSES.includes(localStorage.cargo);
    },
  },
};
</script>

<style lang="scss">
.header {
  width: 100vw;
}
// .avatar {
//   background-color: #000;
// }
</style>
