<template>
  <section class="h-100" style="width: 100%; background: #eeeeee">
    <div class="container py-5">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card card-registration my-4">
            <div class="row g-0">
              <div class="col-xl-6 d-none d-xl-block">
                <img src="../../../../assets/UserReg.jpg"
                     alt="Sample photo" class="img-fluid"
                     style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem; height: 100%;  object-position: center; " />
              </div>
              <div class="col-xl-6">
                <div class="card-body p-md-5 text-black">
                  <h3 class="mb-5 text-uppercase">Cadastro do {{ etapa == 2 ? "DIRETOR" : "DIRIGENTE" }}</h3>

                  <b-input class="form-label" placeholder="Email do usuário" v-model="user.email"/>

                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <b-input class="form-label" placeholder="Nome" v-model="user.nome"/>

                    </div>
                    <div class="col-md-6 mb-4">
                      <b-input class="form-label" placeholder="Sobrenonme" v-model="user.sobrenome"/>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4">

                      <b-input class="form-label" placeholder="CPF" v-model="user.cpf"/>

                    </div>
                    <div class="col-md-6 mb-4">
                      <b-input class="form-label" placeholder="Telefone" v-model="user.telefone"/>
                    </div>
                  </div>

                  <div class="d-flex justify-content-end pt-3">
                    <button type="button" class="btn btn-light btn-lg" @click="voltarEtapa">Voltar</button>
                    <b-button
                        type="button"
                        class="btn btn-warning btn-lg ms-2"
                        id="next-button"
                        :disabled="false"
                        @click="handleSubmit()">{{etapa == 2 ? "Próximo": "Cadastrar"}}</b-button>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="name-exists-modal" title="Instituição já existente">
      <div class="modal-body">
        <p>Já existe uma instituição cadastrada com este nome.</p>
      </div>
    </b-modal>
  </section>
</template>

<script>
export default {
  name: "Usuario",
  props: ["etapa", "user"],
  data: () => {
    return {
      usuario: {
        nome: null,
        sobrenome: null,
        email: null,
        cpf: null,
        telefone: null,
      },
    };
  },
  mounted() {
    this.usuario = this.user;
  },
  methods: {
    handleSubmit() {
      if (this.etapa == 2) this.$emit("update-diretor", this.usuario, 1);
      if (this.etapa == 3)
        this.$emit("update-dirigente", this.usuario, 1);
    },
    voltarEtapa() {
      if (this.etapa == 2) this.$emit("update-diretor", this.usuario, -1);
      else this.$emit("update-dirigente", this.usuario, -1);
    },
  },
  watch: {
    etapa() {
      this.usuario = this.user;
    },
  },
};
</script>

<style scoped>
</style>
