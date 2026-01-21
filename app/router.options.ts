import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior: (to, from, savedPosition) => {
    // scroll to hash, useful for using to="#some-id" in NuxtLink

    if (to.hash === "#contactForm") {
      console.log("to hash: " + to.hash);
      return {
        el: to.hash,
        top: 0,
        behavior: "smooth",
      };
    }

    if (to.path === from.path && to.path !== "/") {
      console.log(to.path);
      console.log("entra?");
      //var page_y = document.scrollTop();
      window.location.href = window.location.href; // + "?page_y=" + page_y;
    }

    const nuxtApp = useNuxtApp();

    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce("page:finish", () => {
        console.log("entra: " + to.hash);
        if (to.hash) {
          console.log("to hash: " + to.hash);
          resolve({
            el: to.hash,
            top: 0,
            behavior: "smooth",
          });
        } else {
          resolve({
            top: 0,
            behavior: "smooth",
          });
        }
        if (to.path === from.path && to.path !== "/") {
          console.log("path");
          window.location.href = window.location.href; // + "?page_y=" + page_y;
        }
      });
    });

    /* if (to.path === from.path && to.path !== "/") {
      console.log(to.path);
      console.log("entra?");
      //var page_y = document.scrollTop();
      window.location.href = window.location.href; // + "?page_y=" + page_y;
    }*/
  },
};
