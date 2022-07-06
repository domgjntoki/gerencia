<template>
  <!-- Navbar -->
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
              <a class="nav-link" href="#">Dashboard</a>
            </li>
          </ul>
          <!-- Left links -->

          <div class="d-flex align-items-center">
            <button type="button" class="btn btn-link px-3 me-2" @click="$router.push('/')">
              Fazer login
            </button>
            <button type="button" class="btn btn-primary me-3" @click="$router.push('/signUp')">
              Cadastre-se
            </button>
            <a
                class="btn btn-dark px-3"
                href="https://github.com/domgjntoki/gerencia"
                role="button"
            ><i class="fab fa-github"></i
            ></a>
          </div>
        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </div>

    <router-view></router-view>
  </section>
  <!-- Navbar -->
</template>

<script>
  import Api from "@/services/api";
  import consts from "@/consts/consts";

  export default {
    name: "AuthHeader",
    data: () => {
      return {
        drawer: false,
        user: null,
      };
    },
  };
</script>

<style lang="scss">
.header {
  width: 100vw;
}
</style>
