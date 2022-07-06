import Vue from "vue";
import Router from "vue-router";
//import Authentication from "@/components/Authentication/Authentication2";
import Login from "@/components/Authentication/Login/Login";
import Funcionarios from "@/components/Funcionarios/Funcionarios";
import Header from "@/components/Header/Header";
import Cursos from "@/components/Cursos/Cursos";
import Instituicoes from "@/components/Instituicoes/Instituicoes";
import Solicitacoes from "@/components/Solicitacoes/Solicitacoes";
import Home from "@/components/Home/Home";
import SignUp from "@/components/Authentication/SignUp/SignUp";
import AuthHeader from "@/components/Authentication/Header/AuthHeader";

Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/", name: "Auth", component: AuthHeader,
      children: [
        {path: "/", name: "Login", component: Login},
        {path: "/signup", name: "SignUp", component: SignUp}
      ]
    },
    {
      path: "/home",
      name: "Home",
      component: Header,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "cursos",
          component: Cursos,
        },
        {
          path: "instituicoes",
          component: Instituicoes,
        },
        {
          path: "usuarios",
          component: Funcionarios,
        },
        {
          path: "solicitacoes",
          component: Solicitacoes,
        },
      ],
    },
  ],
});

export default router;
