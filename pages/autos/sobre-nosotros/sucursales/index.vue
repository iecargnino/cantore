<template>
  <NuxtLayout name="autos">
    <AutosSucursales></AutosSucursales>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <AutosCardsShortcutCard
            titulo="Contacto"
            descripcion="Comunicate con nosotros por diferentes vías."
            icon="/images/autos/icons/phone.svg"
            link="/autos/sobre-nosotros/contacto"
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
