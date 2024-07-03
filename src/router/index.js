import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/",
      component: () => import("../layouts/Default.vue"),
      redirect: "/home",
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("../pages/Home.vue"),
        },
      ],
    },
    // {
    //   path: "/authorization",
    //   name: "authorization",
    //   component: () => import("../pages/Authorization.vue"),
    // },
    // {
    //   path: "/register",
    //   name: "registration",
    //   component: () => import("../pages/Registration.vue"),
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: () => import("../pages/Login.vue"),
    // },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("../pages/errors.vue"),
    },
  ],
});

// router.beforeEach((to, from) => {
//   const isLoggedin = JSON.parse(localStorage.getItem("user"));

//   if (!isLoggedin && to.name != "login") {
//     return { name: "login" };
//   }
// });

export default router;
