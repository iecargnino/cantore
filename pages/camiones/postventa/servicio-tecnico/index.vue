<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      area="Postventa"
      titulo="Servicio técnico"
      descripcion="Confíe el mantenimiento y la reparación a las manos adecuadas."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/postventa/servicio-tecnico/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Pofesionales experimentados y stock propio.</h3>
        <p>Contamos con equipos de profesionales experimentados y continuamente entrenados, stock propio de piezas y herramientas especiales para cada tipo de vehículo y reparación.</p>
        <p>En pocos minutos, nuestros técnicos certificados consiguen detectar cualquier anomalía, para luego realizar el servicio o la reparación correspondiente.</p>
        <p>Extienda la vida útil de su vehículo realizando los servicios de mantenimiento en nuestros talleres oficiales Mercedes-Benz.</p>
      </div>
    </section>

    <CamionesContactForm></CamionesContactForm>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <CamionesCardsShortcutCard
            titulo="Repuestos y accesorios"
            icon="/images/camiones/icons/parts.svg"
            link="/camiones/postventa/repuestos-y-accesorios"
          >
          </CamionesCardsShortcutCard>

          <CamionesCardsShortcutCard
            titulo="Servicios"
            icon="/images/camiones/icons/service.svg"
            link="/camiones/postventa/servicios"
          >
          </CamionesCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
