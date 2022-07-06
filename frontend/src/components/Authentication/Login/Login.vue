<template>
  <section class="vh-100" style="background-color: #eeeeee;">
    <div class="container py-5">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem;">
            <div class="row g-0">
              <div class="col-md-8 col-lg-7 col-xl-6">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                     alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem; object-position: center; height: 100%"/>
              </div>
              <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <div class="card-body p-4 p-lg-5 text-black">

                  <form>

                    <div class="d-flex align-items-center mb-3 pb-1">
                      <i class="fas fa-graduation-cap fa-2x me-3" style="color: #ff6219;"></i>
                      <span class="h1 fw-bold mb-0">Fazer login</span>
                    </div>

                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Entre na sua conta</h5>


                    <b-form-input name="username" type="text" placeholder="Usuário" class="form-control form-control-lg"
                      style="margin-bottom: 1vw" v-model="user"></b-form-input>

                    <b-form-input name="password" type="password" placeholder="Senha" class="form-control form-control-lg"
                                  style="margin-bottom: 1vw" v-model="password"></b-form-input>

                    <div class="pt-1 mb-4">
                      <b-button class="btn btn-dark btn-lg btn-block" type="button" v-on:click="handleSubmit()">Login</b-button>
                    </div>


                    <a class="small text-muted" href="#!" @click="$bvModal.show('forgot-password-modal')">Esqueceu sua senha?</a>
                    <p class="mb-5 pb-lg-2" style="color: #393f81;">Não possui conta? <a href="/signUp"
                                                                    style="color: #393f81;">Cadastre-se aqui</a></p>

                  </form>
                  <p class="error--text" v-if="errorLogin == 0">
                    Sua instituição ainda possui cadastro pendente
                  </p>
                  <p class="error--text" v-if="errorLogin == 1">
                    Usuário ou senha inválidos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="forgot-password-modal" title="Esqueceu sua senha?">
      <div class="modal-body">
        <p>Contate o administrador do cadastro de universidades para redefinir sua senha</p>
      </div>
    </b-modal>
  </section>
</template>

<script>
import Api from "../../../services/api.js";
export default {
  name: "Login",
  components: {},
  created() {
    if (localStorage.nome != null) this.$router.push("home");
  },
  data: () => ({
    dialog: false,
    loading: false,
    errorLogin: null,
    user: "",
    showPassword: true,
    password: "",
  }),
  computed: {
    minLenght() {
      return this.user.length > 0 && this.password.length > 4;
    },
  },
  methods: {
    handleSubmit() {
      console.log('error', this.errorLogin)
      this.loading = true;
      console.log('user:', this.user)
       let data = {
         user: this.user,
         senha: this.password,
       };
      Api.post("login", data)
           .then((response) => {
             console.log(response);
             if (response.data.code === 0) {
               this.errorLogin = response.data.code;
             } else {
               localStorage.email = response.data.usuario;
               localStorage.nome = response.data.nome_usuario;
               localStorage.id_instituicao = response.data.id_instituicao;
               localStorage.validadora = response.data.validadora;
               localStorage.cargo = response.data.cargo;
               this.$router.push("home");
            }
          })
          .catch(() => {
            this.errorLogin = 1;
          })
          .finally(() => (this.loading = false));
    },
  },
};
</script>

<style scoped>

</style>
