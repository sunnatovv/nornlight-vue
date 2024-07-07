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
        {
          path: "payment",
          name: "payment",
          component: () => import("../pages/Payment.vue"),
        },
        {
          path: "garant",
          name: "garant",
          component: () => import("../pages/Garant.vue"),
        },
        {
          path: "return",
          name: "return",
          component: () => import("../pages/Return.vue"),
        },
        {
          path: "contact",
          name: "contact",
          component: () => import("../pages/Contacts.vue"),
        },
        {
          path: "all-products",
          name: "all-products",
          component: () => import("../pages/AllProducts.vue"),
        },
        {
          path: "products/:id",
          name: "product-details",
          component: () => import("../pages/ProductDetails.vue"),
        },
        {
          path: "about-company",
          name: "about-company",
          component: () => import("../pages/AboutCompany.vue"),
        },
        {
          path: "favorites",
          name: "favorites",
          component: () => import("../pages/Favorites.vue"),
        },
        {
          path: "blog",
          name: "blog",
          component: () => import("../pages/Blog.vue"),
        },
        {
          path: "korzina",
          name: "korzina",
          component: () => import("../pages/Korzina.vue"),
        },
        {
          path: "catalog",
          name: "catalog",
          component: () => import("../pages/Catalog.vue"),
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
