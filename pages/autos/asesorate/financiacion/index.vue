<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="dark"
      titulo="Financiación"
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/asesorate/financiacion/"
    >
    </AutosIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Contamos con una amplia oferta de financiación para tu vehículo.</h3>
      </div>
    </section>

    <AutosContactForm></AutosContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/autos/resumen.css");
</style>
