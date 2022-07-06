<template>
  <section class="h-100" style="width: 100%; background: #eeeeee">
    <div class="container py-5">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card card-registration my-4">
            <div class="row g-0">
              <div class="col-xl-6 d-none d-xl-block">
                <img src="https://images.squarespace-cdn.com/content/v1/576fcda2e4fcb5ab5152b4d8/1482945537152-IOSFI97HY8CMM02RWJXQ/Institution+graphic"
                     alt="Sample photo" class="img-fluid"
                     style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem; height: 100%;object-position: center; padding: 40px" />
              </div>
              <div class="col-xl-6">
                <div class="card-body p-md-5 text-black">
                  <h3 class="mb-5 text-uppercase">Cadastro da Instituição</h3>

                  <b-input class="form-label" placeholder="Nome da instituição" v-model="inst.nome_instituicao"/>

                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <b-input class="form-label" placeholder="Nome da mantenedora" v-model="inst.mantenedora_nome"/>

                    </div>
                    <div class="col-md-6 mb-4">
                      <b-input class="form-label" placeholder="CNPJ da mantenedora" v-model="inst.mantenedora_cnpj"/>
                    </div>
                  </div>

                  <b-input class="form-label" placeholder="Rua" v-model="inst.rua"/>
                  <b-input class="form-label" placeholder="CEP" v-model="inst.cep"/>

                  <div class="row">
                    <div class="col-md-6 mb-4">

                      <b-input class="form-label" placeholder="Estado" v-model="inst.estado"/>

                    </div>
                    <div class="col-md-6 mb-4">
                      <b-input class="form-label" placeholder="Cidade" v-model="inst.cidade"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-4">

                      <b-input class="form-label" placeholder="Número" v-model="inst.numero"/>

                    </div>
                    <div class="col-md-6 mb-4">
                      <b-input class="form-label" placeholder="Bairro" v-model="inst.bairro"/>
                    </div>
                  </div>

                  <b-button
                      type="button"
                      class="btn btn-warning btn-lg ms-2"
                      :disabled="$v.inst.$invalid"
                      style="float: right;
                      margin-bottom: 50px"
                      @click="handleSubmit()">Próximo</b-button>
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
import {required} from "vuelidate/lib/validators";
// import Api from "../../../../services/api.js";
import {checkNomeDaInstituicao} from "@/services/CheckAvailability";

export default {
  name: 'Instituicao',
  props: ["instituicao"],
  data: () => {
    return {
      loading: false,
      nomeEmUso: false,
      inst: {
        nome_instituicao: null,
        mantenedora_nome: null,
        mantenedora_cnpj: null,
        cep: null,
        rua: null,
        numero: null,
        bairro: null,
        cidade: null,
        estado: null,
      },
    };
  },
  validations() {
    return {
      inst: {
        nome_instituicao: { required },
        mantenedora_nome: { required },
        mantenedora_cnpj: { required },
        cep: { required },
        rua: { required },
        numero: { required },
        bairro: { required },
        cidade: { required },
        estado: { required },
      },
    };
  },
  methods: {
    handleSubmit() {
      this.loading = true;
      checkNomeDaInstituicao(this.inst.nome_instituicao)
          .then(() => {
            this.nomeEmUso = false;
            this.$emit("avancarEtapa");
          })
          .catch(() => {
            this.nomeEmUso = true;
            this.$bvModal.show('name-exists-modal');
          })
          .finally(() => (this.loading = false));
    },
  },
  created() {
    this.inst = this.instituicao;
  },
  computed: {
    nomeRules() {
      if (!this.inst.nome_instituicao) return "Campo obrigatório";
      if (this.nomeEmUso) return "Nome já está em uso";
      return null;
    },
  },
};
</script>

