// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  future: {
    compatibilityVersion: 4,
  },
  app: {
    head: {
      title: "Cantore S.A. - Concesionario oficial Mercedes-Benz.",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Concesionario oficial Mercedes-Benz en Río Cuarto, Córdoba.",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "msapplication-TileImage", content: "ms-icon-144x144.png" },
        { name: "theme-color", content: "#ffffff" },

        // Open Graph
        {
          property: "og:title",
          content: "Cantore S.A.",
        },
        {
          property: "og:description",
          content:
            "Concesionario oficial Mercedes-Benz en Río Cuarto, Córdoba.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.cantore.com.ar/" },
        {
          property: "og:image",
          content: "https://www.cantore.com.ar/images/favicons/og-image.jpg",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:site_name", content: "Cantore S.A." },
        { property: "og:locale", content: "es_AR" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Cantore S.A.",
        },
        {
          name: "twitter:description",
          content:
            "Concesionario oficial Mercedes-Benz en Río Cuarto, Córdoba.",
        },
        {
          name: "twitter:image",
          content: "https://www.cantore.com.ar/images/favicons/og-image.jpg",
        },
      ],

      link: [
        // Favicon en la raíz de public
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "shortcut icon",
          href: "/favicon.ico",
        },
      ],
    },
  },

  css: ["~/assets/css/fonts.css"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: process.env.NODE_ENV !== "production" },
  modules: ["nuxt-aos", "nuxt-gtag"],
  aos: {
    once: true,
    // useClassNames: true
  },
  runtimeConfig: {
    public: {
      baseURL: "https://www2.mercedes-benz.com.ar/api/",
    },
  },
  nitro: {
    preset: 'render-com'
  },
  gtag: { id: "" },
});
