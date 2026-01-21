<template>
  <NuxtLayout name="vans">
    <VansIntro
      tema="dark"
      titulo="Sprinter Combi"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/vans/modelos/sprinter-combi/"
    >
    </VansIntro>

    <section id="caracteristicas">
      <div class="pageWidth">
        <h3>Seguridad, Diseño y Confort</h3>

        <ul>
          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/sprinter-combi/exterior.jpg"
              titulo="Exterior"
              descripcion="La Sprinter Combi es la socia más confiable para vos y tu negocio porque podés transportar lo que requieras, de forma inteligente y eficiente, en función de tus necesidades."
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/sprinter-combi/interior.jpg"
              titulo="Interior - Asientos"
              :lista="['Variantes disponibles: 9+1, 15+1 y 19+1']"
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/sprinter-combi/confort.jpg"
              titulo="Confort"
              :lista="['Volante multifunción táctil', 'Nueva Pantalla MBUX de 10,25” con integración wireless y Wi-Fi hotspot Wi-Fi hotspot para ofrecer servicio de internet a bordo']"
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/sprinter-combi/seguridad.jpg"
              titulo="Seguridad"
              :lista="['Servofreno de emergencia activo con capacidad aumentada', 'Sensor de lluvia']"
            >
            </VansCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <VansExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/vans/models/sprinter/combi/overview.html"
    >
    </VansExternalLink>

    <VansContactForm></VansContactForm>
    <VansLegal></VansLegal>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/vans/resumen.css");
</style>
