<template>
  <NuxtLayout name="vans">
    <VansIntro
      tema="light"
      titulo="Nuestros asesores"
      imagenURL="/images/vans/asesorate/nuestros-asesores/"
    >
    </VansIntro>

    <section id="asesores">
      <div class="pageWidth">
        <ul>
          <!-- Asesor comercial -->
          <VansCardsAsesorComercialCard
            nombre="Alejandro Buzzacchi"
            cargo="Asesor de ventas"
            mail="alebuzzacchi@cantore.com.ar"
            telefono="+54 358-4800138"
            telLink="+543584800138"
          >
          </VansCardsAsesorComercialCard>

          <!-- Asesor comercial -->
          <VansCardsAsesorComercialCard
            nombre="Edgardo Panza"
            cargo="Asesor de ventas"
            mail="edgardopanza@cantore.com.ar"
            telefono="+54 358-5075440"
            telLink="+543585075440"
          >
          </VansCardsAsesorComercialCard>
        </ul>
      </div>
    </section>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <VansCardsShortcutCard
            titulo="Contacto"
            descripcion="Comunicate con nosotros por diferentes vías."
            icon="/images/vans/icons/phone.svg"
            link="enlace"
          >
          </VansCardsShortcutCard>

          <VansCardsShortcutCard
            titulo="Realizar consulta"
            descripcion="Enviá tu consulta y te responderemos a la brevedad."
            icon="/images/vans/icons/mail.svg"
            link="enlace"
          >
          </VansCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/vans/nuestros-asesores.css");
</style>
