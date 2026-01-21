<template>
  <NuxtLayout name="vans">
    <VansIntro
      tema="dark"
      titulo="Vito Mixto"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/vans/modelos/vito-mixto/"
    >
    </VansIntro>

    <section id="caracteristicas">
      <div class="pageWidth">
        <h3>Una van multiusos, que se adapta a las tareas más exigentes</h3>

        <ul>
          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/vito-mixto/exterior.jpg"
              titulo="Exterior"
              descripcion="Con la Vito Mixto, estás eligiendo calidad y todo el respaldo de Mercedes-Benz."
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/vito-mixto/interior.jpg"
              titulo="Interior"
              descripcion="La funcionalidad se fusiona con la comodidad."
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/vito-mixto/confort.jpg"
              titulo="Confort"
              :lista="['Cámara de estacionamiento', 'Volante ajustable en altura e inclinación', 'Aire acondicionado semiautomático TEMPMATIC', 'Arranque sin llave']"
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/modelos/vito-mixto/seguridad.jpg"
              titulo="Seguridad"
              :lista="['Asistente de frenado activo', 'Luz de freno adaptativa', 'Airbag del conductor y acompañante', 'Seguro para niños', 'Attention Assist']"
            >
            </VansCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <VansExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/vans/models/vito/mixto/overview.html"
    >
    </VansExternalLink>

    <VansContactForm></VansContactForm>
    <VansLegal></VansLegal>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/vans/resumen.css");
</style>
