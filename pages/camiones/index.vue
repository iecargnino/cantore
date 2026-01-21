<template>
  <NuxtLayout name="camiones">
    <CamionesIntroSlider></CamionesIntroSlider>
    <CamionesCardsRecomendaciones></CamionesCardsRecomendaciones>
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

          <CamionesCardsShortcutCard
            titulo="Realizar consulta"
            icon="/images/camiones/icons/mail.svg"
            link="/camiones/nosotros/contacto#contactForm"
          >
          </CamionesCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>
