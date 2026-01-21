<template>
  <NuxtLayout name="autos">
    <AutosIntroSlider></AutosIntroSlider>
    <AutosCardsRecomendaciones></AutosCardsRecomendaciones>
    <AutosDescubri></AutosDescubri>
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
            titulo="Realizar consulta"
            descripcion="Enviá tu consulta y te responderemos a la brevedad."
            icon="/images/autos/icons/mail.svg"
            link="/autos/sobre-nosotros/contacto#contactForm"
          >
          </AutosCardsShortcutCard>
        </ul>
      </div>
    </div>

    <AutosLegal></AutosLegal>
  </NuxtLayout>
</template>
