<template>
  <NuxtLayout name="vans">
    <VansIntro
      tema="dark"
      titulo="Contacto"
      :descripcion="'Comunicate con ' + appConfig.concesionario.razonSocial"
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/vans/sobre-nosotros/contacto/"
    >
    </VansIntro>

    <VansSucursales></VansSucursales>

    <VansContactForm></VansContactForm>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <VansCardsShortcutCard
            titulo="Contacto"
            descripcion="Comunicate con nosotros por diferentes vías."
            icon="/images/vans/icons/phone.svg"
            link="/vans/sobre-nosotros/contacto"
          >
          </VansCardsShortcutCard>

          <VansCardsShortcutCard
            titulo="Sucursales"
            descripcion="Te esperamos en nuestras sucursales."
            icon="/images/vans/icons/location.svg"
            link="/vans/sobre-nosotros/sucursales"
          >
          </VansCardsShortcutCard>

          <!-- <VansCardsShortcutCard
            titulo="Novedades"
            descripcion="Descubrí nuestras últimas novedades."
            icon="/images/vans/icons/news.svg"
            link="/vans/sobre-nosotros/novedades"
          >
          </VansCardsShortcutCard> -->

          <VansCardsShortcutCard
            titulo="Nuestra historia"
            descripcion="Conocé nuestra trayectoria."
            icon="/images/vans/icons/users.svg"
            link="/vans/sobre-nosotros/nuestra-historia"
          >
          </VansCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
