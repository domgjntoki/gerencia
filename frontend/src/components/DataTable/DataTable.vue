<template>
  <v-data-table
    height="70vh"
    class="data-table elevation-8"
    fixed-header
    :items="items"
    :headers="headers"
    :loading="loading"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        {{ !solicitacao ? "mdi-pencil" : "mdi-check-bold" }}
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        {{ !solicitacao ? "mdi-delete" : "mdi-close-thick" }}
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "DataTable",
  props: ["items", "headers", "loading", "dialog", "solicitacao"],
  data: () => {
    return {};
  },
  created() {},
  methods: {
    editItem(item) {
      if (!this.solicitacao) this.$emit("editar", item);
      else this.$emit("accept", item);
      console.log(item);
    },
    deleteItem(item) {
      this.$emit("delete", item);
      console.log(item);
    },
  },
  computed: {},
};
</script>

<style lang="css" scoped>
.data-table >>> tbody tr :hover {
  cursor: pointer;
}
.data-table >>> tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
