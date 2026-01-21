<template>
  <NuxtLayout name="camiones">
    <CamionesSucursales></CamionesSucursales>

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
