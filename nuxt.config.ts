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
        // Favicon estándar para navegadores modernos
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/images/favicons/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/images/favicons/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/images/favicons/favicon-96x96.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/images/favicons/android-icon-192x192.png",
        },

        // Favicon en formato .ico para compatibilidad con navegadores antiguos
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/images/favicons/favicon.ico",
        },
        {
          rel: "shortcut icon",
          type: "image/x-icon",
          href: "/images/favicons/favicon.ico",
        },

        // Apple Touch Icons para iOS
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: "/images/favicons/apple-icon-57x57.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: "/images/favicons/apple-icon-60x60.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: "/images/favicons/apple-icon-72x72.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/images/favicons/apple-icon-76x76.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: "/images/favicons/apple-icon-114x114.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: "/images/favicons/apple-icon-120x120.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: "/images/favicons/apple-icon-144x144.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/images/favicons/apple-icon-152x152.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/images/favicons/apple-icon-180x180.png",
        },

        // Iconos para Windows
        {
          rel: "icon",
          type: "image/png",
          href: "/images/favicons/ms-icon-144x144.png",
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
  gtag: { id: "" },
});
