<template>
  <NuxtLayout name="vans">
    <VansIntro
      tema="dark"
      titulo="Sprinter Furgón Mixto"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/vans/modelos/sprinter-mixto/"
    >
    </VansIntro>

    <section id="caracteristicas">
      <div class="pageWidth">
        <h3>Seguridad, Diseño y Confort</h3>

        <ul>
          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/sprinter-mixto/exterior.jpg"
              titulo="Exterior"
              descripcion="La Sprinter Furgón Mixto destaca por su apariencia moderna y proporciones perfectamente equilibradas, que no solo impresionan, sino que también acompañan su funcionalidad."
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/sprinter-mixto/interior.jpg"
              titulo="Interior"
              descripcion="Las paredes laterales y las puertas del espacio de carga llevan un revestimiento protector hasta media altura, hecho de placas de polipropileno gris."
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/sprinter-mixto/confort.jpg"
              titulo="Confort"
              :lista="['Volante multifunción táctil', 'Nueva pantalla MBUX de 10,25” con integración wireless y Wi-Fi hotspot para ofrecer servicio de internet a bordo']"
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/sprinter-mixto/seguridad.jpg"
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
      ctaLink="https://www.mercedes-benz.com.ar/vans/models/sprinter/mixto/overview.html"
    >
    </VansExternalLink>

    <VansContactForm></VansContactForm>
    <VansLegal></VansLegal>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/vans/resumen.css");
</style>
