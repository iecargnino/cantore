<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="dark"
      titulo="Contacto"
      descripcion="Recibimos tu mensaje."
      imagenURL="/images/autos/sobre-nosotros/contacto/"
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

<style scope>
@import "~/assets/css/autos/gracias.css";
</style>
