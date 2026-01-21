<template>
  <NuxtLayout name="vans">
    <VansIntro
      tema="dark"
      titulo="Sprinter Chasis"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/vans/modelos/sprinter-chasis/"
    >
    </VansIntro>

    <section id="caracteristicas">
      <div class="pageWidth">
        <h3>Seguridad, Diseño y Confort</h3>

        <ul>
          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/sprinter-chasis/exterior.jpg"
              titulo="Exterior"
              descripcion="La Sprinter Chasis es la socia más confiable para vos y tu negocio porque podés transportar lo que quieras, de forma inteligente y eficiente, en función de tus necesidades."
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/sprinter-chasis/interior.jpg"
              titulo="Interior - carga"
              :lista="['Carga útil 1615 a 2905 kg', 'Longitud zona de carga 3,275 a 4,182 mts']"
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/sprinter-chasis/equipamiento.jpg"
              titulo="Equipamiento - Transmisión"
              descripcion="Pre instalación en caja de transmisión para toma de fuerza y en cigüeñal para compresor adicional."
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/sprinter-chasis/seguridad.jpg"
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
      ctaLink="https://www.mercedes-benz.com.ar/vans/models/sprinter/cab-chassis/overview.html"
    >
    </VansExternalLink>

    <VansContactForm></VansContactForm>
    <VansLegal></VansLegal>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/vans/resumen.css");
</style>
