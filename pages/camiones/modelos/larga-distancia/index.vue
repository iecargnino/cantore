<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      tema="light"
      area="Nuestros buses"
      titulo="Larga distancia."
      descripcion="Chasis O 500 RS / Chasis O 500 RSD."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/modelos/larga-distancia/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>
          Chasis para ómnibus proyectados para aplicaciones interurbanas de
          mediana y larga distancia.
        </h3>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/larga-distancia/chasis-o-500-rs.jpg"
              titulo="Chasis O 500 RS."
              descripcion="El chasis para ómnibus O 500 RS cubre las aplicaciones interurbanas de mediana y larga distancia."
              cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
              ctaLink="https://www.mercedes-benz-bus.com/es_AR/models/o500-rs.html"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/larga-distancia/chasis-o-500-rsd.jpg"
              titulo="Chasis O 500 RSD."
              descripcion="El chasis para ómnibus O 500 RSD cubre las aplicaciones interurbanas de mediana y larga distancia."
              cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
              ctaLink="https://www.mercedes-benz-bus.com/es_AR/models/o500-rsd.html"
            >
            </CamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <CamionesContactForm modelo="Larga Distancia"></CamionesContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
