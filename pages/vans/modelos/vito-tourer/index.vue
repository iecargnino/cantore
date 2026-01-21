<template>
  <NuxtLayout name="vans">
    <VansIntro
      tema="dark"
      titulo="Vito Tourer"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/vans/modelos/vito-tourer/"
    >
    </VansIntro>

    <section id="caracteristicas">
      <div class="pageWidth">
        <h3>Confort, elegancia y un amplio espacio para vos y tus pasajeros</h3>

        <ul>
          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/vito-tourer/exterior.jpg"
              titulo="Exterior"
              descripcion="Un diseño atractivo, 100% Mercedes-Benz."
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/vito-tourer/interior.jpg"
              titulo="Interior"
              descripcion="El interior es como la propia Vito Tourer, extremadamente funcional y con un diseño atractivo."
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/vito-tourer/confort.jpg"
              titulo="Confort"
              descripcion="Volante multifunción ajustable en altura e inclinación."
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/vito-tourer/seguridad.jpg"
              titulo="Seguridad"
              descripcion="Sistemas de asistencia a la conducción."
            >
            </VansCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <VansExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/vans/models/vito/tourer/overview.html"
    >
    </VansExternalLink>

    <VansContactForm></VansContactForm>
    <VansLegal></VansLegal>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/vans/resumen.css");
</style>
