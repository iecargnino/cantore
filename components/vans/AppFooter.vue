<template>
  <div>
    <footer>
      <div class="pageWidth">
        <div
          v-if="appConfig.unidadesNegocio.autos || appConfig.unidadesNegocio.camiones"
          class="BUs"
        >
          <h5>Otros vehículos</h5>
          <div class="wrapper">
            <NuxtLink
              v-if="appConfig.unidadesNegocio.autos"
              to="/autos"
            >
              <img
                src="~/public/images/autos/icons/icon_car.svg"
                alt="Icono ingresar"
              />
              Autos
            </NuxtLink>
            <NuxtLink
              v-if="appConfig.unidadesNegocio.camiones"
              to="/camiones"
              ><img
                src="~/public/images/autos/icons/icon_truck.svg"
                alt="Icono ingresar"
              />
              Camiones
            </NuxtLink>
          </div>
        </div>

        <div class="agency">
          {{ appConfig.concesionario.razonSocial }}

          <ul class="social">
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
        </div>
        <div class="copyAndLegal">
          <span class="copy">&copy; {{ currentYear }} {{ appConfig.concesionario.razonSocial }}</span>
          <ul>
            <li>
              <NuxtLink to="/vans/legal/proveedor">Proveedor</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/vans/legal/cookies">Cookies</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/vans/legal/proteccion-de-datos">Protección de datos</NuxtLink>
            </li>
          </ul>
          <div class="iso">
            <img
              src="/images/vans/iso/iso_14001.svg"
              alt="ISO 14001:2015"
            />
            <img
              src="/images/vans/iso/iso_45001.svg"
              alt="ISO 45001:2018"
            />
            <img
              src="/images/vans/iso/iso_9001.svg"
              alt="ISO 9001:2015"
            />
          </div>
        </div>
      </div>
    </footer>
    <div
      v-if="appConfig.concesionario.contactoFlotante.vans"
      id="floatingContact"
    >
      <div class="pageWidth">
        <NuxtLink
          :to="appConfig.concesionario.contactoFlotante.vans"
          target="_blank"
          class="contact"
        >
          <img
            src="~/public/images/autos/icons/chat.svg"
            alt=""
          />
          Contáctenos
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
const currentYear: number = new Date().getFullYear();
</script>
