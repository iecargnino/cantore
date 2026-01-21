<template>
  <NuxtLayout name="vans">
    <AutosIntro
      tema="dark"
      titulo="Contacto"
      descripcion="Recibimos tu mensaje."
      imagenURL="/images/vans/sobre-nosotros/contacto/"
    >
    </AutosIntro>

    <div id="gracias">
      <div class="pageWidth">
        <h1>Gracias por contactarnos.</h1>
        <p>Nos comunicaremos a la brevedad para responder tu consulta.</p>
      </div>
    </div>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <AutosCardsShortcutCard
            titulo="Sucursales"
            descripcion="Te esperamos en nuestras sucursales."
            icon="/images/vans/icons/location.svg"
            link="/vans/sobre-nosotros/sucursales"
          >
          </AutosCardsShortcutCard>

          <!-- <AutosCardsShortcutCard
            titulo="Novedades"
            descripcion="Descubrí nuestras últimas novedades."
            icon="/images/vans/icons/news.svg"
            link="/vans/sobre-nosotros/novedades"
          >
          </AutosCardsShortcutCard> -->

          <AutosCardsShortcutCard
            titulo="Nuestra historia"
            descripcion="Conocé nuestra trayectoria."
            icon="/images/vans/icons/users.svg"
            link="/vans/sobre-nosotros/nuestra-historia"
          >
          </AutosCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scope>
@import "~/assets/css/vans/gracias.css";
</style>
