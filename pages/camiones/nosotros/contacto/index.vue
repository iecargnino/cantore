<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      area="Nosotros"
      titulo="Contacto"
      :descripcion="'Comunicate con ' + appConfig.concesionario.razonSocial"
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/nosotros/contacto/"
    >
    </CamionesIntro>

    <CamionesSucursales></CamionesSucursales>

    <CamionesContactForm></CamionesContactForm>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <CamionesCardsShortcutCard
            titulo="Contacto"
            icon="/images/camiones/icons/phone.svg"
            link="/camiones/nosotros/contacto"
          >
          </CamionesCardsShortcutCard>

          <CamionesCardsShortcutCard
            titulo="Sucursales"
            icon="/images/camiones/icons/location.svg"
            link="/camiones/nosotros/sucursales"
          >
          </CamionesCardsShortcutCard>

          <!-- <CamionesCardsShortcutCard
            titulo="Novedades"
            icon="/images/camiones/icons/news.svg"
            link="/camiones/nosotros/novedades"
          >
          </CamionesCardsShortcutCard> -->

          <CamionesCardsShortcutCard
            titulo="Nuestra historia"
            icon="/images/camiones/icons/users.svg"
            link="/camiones/nosotros/nuestra-historia"
          >
          </CamionesCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
