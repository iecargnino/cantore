<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="dark"
      titulo="Contacto"
      :descripcion="'Comunicate con ' + appConfig.concesionario.razonSocial"
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/sobre-nosotros/contacto/"
    >
    </AutosIntro>

    <AutosSucursales></AutosSucursales>

    <AutosContactForm></AutosContactForm>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <AutosCardsShortcutCard
            titulo="Sucursales"
            descripcion="Te esperamos en nuestras sucursales."
            icon="/images/autos/icons/location.svg"
            link="/autos/sobre-nosotros/sucursales"
          >
          </AutosCardsShortcutCard>

          <AutosCardsShortcutCard
            titulo="Novedades"
            descripcion="Descubrí nuestras últimas novedades."
            icon="/images/autos/icons/news.svg"
            link="/autos/sobre-nosotros/novedades"
          >
          </AutosCardsShortcutCard>

          <AutosCardsShortcutCard
            titulo="Nuestra historia"
            descripcion="Conocé nuestra trayectoria."
            icon="/images/autos/icons/users.svg"
            link="/autos/sobre-nosotros/nuestra-historia"
          >
          </AutosCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
