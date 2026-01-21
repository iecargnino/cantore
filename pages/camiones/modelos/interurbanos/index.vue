<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      tema="light"
      area="Nuestros buses"
      titulo="Interurbanos."
      descripcion="Chasis OF 1621 / Chasis OF 1721 / Chasis OF 1724 / Chasis O 500 M30 / Chasis O 500 R."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/modelos/interurbanos/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>
          Chasis para ómnibus proyectados para operar en el transporte urbano e
          interurbano.
        </h3>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/interurbanos/chasis-of-1621.jpg"
              titulo="Chasis OF 1621."
              descripcion="El chasis para ómnibus OF 1621 fue proyectado para operar en el transporte urbano e interurbano de pasajeros. Permite el montaje de carrocerías de hasta 11 metros de longitud."
              cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
              ctaLink="https://www.mercedes-benz-bus.com/es_AR/models/of1621.html"
            >
            </CamionesCardsCaracteristicaCard>
          </li>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/interurbanos/chasis-of-1721.jpg"
              titulo="Chasis OF 1721."
              descripcion="El chasis para autobús OF 1721 fue proyectado para operar en el transporte interurbano y urbano con importante demanda de pasajeros. Permite el montaje de carrocerías de hasta 12 metros de longitud."
              cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
              ctaLink="https://www.mercedes-benz-bus.com/es_AR/models/of1721.html"
            >
            </CamionesCardsCaracteristicaCard>
          </li>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/interurbanos/chasis-of-1724.jpg"
              titulo="Chasis OF 1724"
              descripcion="El chasis para autobús OF 1724 fue proyectado para operar en el transporte interurbano y urbano con importante demanda de pasajeros. Permite el montaje de carrocerías de hasta 12 metros de longitud."
              cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
              ctaLink="https://www.mercedes-benz-bus.com/es_AR/models/of1724.html"
            >
            </CamionesCardsCaracteristicaCard>
          </li>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/interurbanos/chasis-o-500-m30.jpg"
              titulo="Chasis O 500 M30."
              descripcion="El chasis para autobús O500 M Buggy fue proyectado para operar en el transporte interurbano y urbano con importante demanda de pasajeros. Permite el montaje de carrocerías de hasta 13 metros de longitud."
              cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
              ctaLink="https://www.mercedes-benz-bus.com/es_AR/models/o500-m30.html"
            >
            </CamionesCardsCaracteristicaCard>
          </li>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/interurbanos/chasis-o-500-r.jpg"
              titulo="Chasis O 500 R."
              descripcion="El chasis para autobús O500 R fue desarrollado para operar en el transporte interurbano y urbano con importante demanda de pasajeros. Permite el montaje de carrocerías de hasta 13 metros de longitud. El chasis O500 R esta dimensionado para suportar 18,5 toneladas. Es un producto robusto de alta durabilidad, apto para las más severas condiciones de operaciones."
              cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
              ctaLink="https://www.mercedes-benz-bus.com/es_AR/models/o500-r.html"
            >
            </CamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <CamionesContactForm modelo="Interurbanos"></CamionesContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
