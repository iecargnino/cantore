<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      tema="light"
      area="Nuestros buses"
      titulo="Urbanos."
      descripcion="Chasis OH 1621 / Chasis OH 1721 / Chasis O 500 U / Chasis O 500 UA."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/modelos/urbanos/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Chasis para ómnibus proyectados para aplicaciones en la ciudad.</h3>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/urbanos/chasis-oh-1621-chasis-oh-1721.jpg"
              titulo="Chasis OH 1621 / Chasis OH 1721."
              descripcion="Los chasis para ómnibus de piso súper bajo OH 1621 y OH 1721 fueron proyectados para aplicaciones en la ciudad con alta demanda de pasajeros."
              cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
              ctaLink="https://www.mercedes-benz-bus.com/es_AR/models/oh1621-oh1721.html"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/urbanos/chasis-o-500-u.jpg"
              titulo="Chasis O 500 U."
              descripcion="El chasis para ómnibus de piso súper bajo O 500 U fue proyectado para aplicaciones en la ciudad, incorporando las ventajas de la tecnología Mercedes‑Benz, con la garantía de ser un vehículo robusto y de alta durabilidad, preparado para trabajar bajo las más severas condiciones de operación y aplicación urbanas."
              cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
              ctaLink="https://www.mercedes-benz-bus.com/es_AR/models/o500-u.html"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/urbanos/chasis-o-500-ua.jpg"
              titulo="Chasis O 500 UA"
              descripcion="El chasis para ómnibus articulado de piso super bajo O 500 UA fue proyectado para aplicaciones en la ciudad con alta demanda de pasajeros, carriles exclusivos o circuitos convencionales."
              cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
              ctaLink="https://www.mercedes-benz-bus.com/es_AR/models/o500-ua.html"
            >
            </CamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <CamionesContactForm modelo="Urbanos"></CamionesContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
