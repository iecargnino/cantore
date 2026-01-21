<template>
  <NuxtLayout name="vans">
    <VansIntroSlider></VansIntroSlider>
    <VansCardsRecomendaciones></VansCardsRecomendaciones>
    <VansDescubri></VansDescubri>
    <VansSucursales></VansSucursales>

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
            titulo="Realizar consulta"
            descripcion="Enviá tu consulta y te responderemos a la brevedad."
            icon="/images/vans/icons/mail.svg"
            link="/vans/sobre-nosotros/contacto#contactForm"
          >
          </VansCardsShortcutCard>
        </ul>
      </div>
    </div>

    <VansLegal></VansLegal>
  </NuxtLayout>
</template>
