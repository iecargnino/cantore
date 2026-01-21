<template>
  <footer>
    <div class="pageWidth">
      <ul
        class="social"
        data-aos="fade"
        data-aos-duration="1800"
        data-aos-delay="800"
      >
        <li v-if="appConfig.concesionario.social.facebook">
          <NuxtLink
            :to="appConfig.concesionario.social.facebook"
            target="_blank"
          >
            <picture>
              <img
                src="/images/selector/icon_facebook.svg"
                :alt="appConfig.concesionario.razonSocial + ' en Facebbok'"
              />
            </picture>
          </NuxtLink>
        </li>
        <li v-if="appConfig.concesionario.social.youtube">
          <NuxtLink
            :to="appConfig.concesionario.social.youtube"
            target="_blank"
          >
            <picture>
              <img
                src="/images/selector/icon_youtube.svg"
                :alt="appConfig.concesionario.razonSocial + ' en YouTube'"
              />
            </picture>
          </NuxtLink>
        </li>
        <li v-if="appConfig.concesionario.social.linkedin">
          <NuxtLink
            :to="appConfig.concesionario.social.linkedin"
            target="_blank"
          >
            <picture>
              <img
                src="/images/selector/icon_linkedin.svg"
                :alt="appConfig.concesionario.razonSocial + ' en Linkedin'"
              />
            </picture>
          </NuxtLink>
        </li>
        <li v-if="appConfig.concesionario.social.x">
          <NuxtLink
            :to="appConfig.concesionario.social.x"
            target="_blank"
          >
            <picture>
              <img
                src="/images/selector/icon_x.svg"
                :alt="appConfig.concesionario.razonSocial + ' en X'"
              />
            </picture>
          </NuxtLink>
        </li>
        <li v-if="appConfig.concesionario.social.instagram">
          <NuxtLink
            :to="appConfig.concesionario.social.instagram"
            target="_blank"
          >
            <picture>
              <img
                src="/images/selector/icon_instagram.svg"
                :alt="appConfig.concesionario.razonSocial + ' en Instagram'"
              />
            </picture>
          </NuxtLink>
        </li>
      </ul>
      <div
        class="copy"
        data-aos="fade"
        data-aos-duration="1800"
        data-aos-delay="800"
      >
        &copy; {{ currentYear }} {{ appConfig.concesionario.razonSocial }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
const currentYear: number = new Date().getFullYear();
</script>
