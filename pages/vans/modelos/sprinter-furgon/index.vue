<template>
  <NuxtLayout name="vans">
    <VansIntro
      tema="dark"
      titulo="Sprinter Furgón"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/vans/modelos/sprinter-furgon/"
    >
    </VansIntro>

    <section id="caracteristicas">
      <div class="pageWidth">
        <h3>Seguridad, Diseño y Confort</h3>

        <ul>
          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/sprinter-furgon/exterior.jpg"
              titulo="Exterior"
              descripcion="La Sprinter Furgón es la socia más confiable para vos y tu negocio porque podés transportar lo que quieras, de forma inteligente y eficiente, en función de tus necesidades."
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/sprinter-furgon/interior.jpg"
              titulo="Interior - Carga/Pasajeros"
              :lista="['Volumen de carga: 9 a 15,5 m3', 'Carga Útil: 1245 a 2455 kg', 'Capacidad: Hasta 4 pasajeros más conductor.']"
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/sprinter-furgon/confort.jpg"
              titulo="Confort"
              :lista="['Volante multifunción táctil', 'Nueva pantalla MBUX de 10,25” con integración wireless y Wi-Fi hotspot para ofrecer servicio de internet a bordo']"
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/sprinter-furgon/seguridad.jpg"
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
      ctaLink="https://www.mercedes-benz.com.ar/vans/models/sprinter/panel-van/overview.html"
    >
    </VansExternalLink>

    <VansContactForm></VansContactForm>
    <VansLegal></VansLegal>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/vans/resumen.css");
</style>
