<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      area="Nuestros camiones"
      titulo="Arocs."
      descripcion="Fuerza Todo Terreno."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/modelos/arocs/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>AROCS, POTENCIÁ TU FUERZA TODO TERRENO.</h3>
        <p>
          El Arocs: rubustez, versatilidad y seguridad. Todo lo que necesitas
          para el trabajo Off Road.
        </p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/arocs/seguridad.jpg"
              titulo="Seguridad."
              :lista="['ABS', 'EBD', 'ASR', 'Hill Hold']"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/arocs/confort.jpg"
              titulo="Confort."
              :lista="['Asientos de cuero ergonómicos con litera']"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/arocs/tecnologia.jpg"
              titulo="Tecnología"
              :lista="['Sistema Multimedia Cockpit con arranque sin llave.']"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/arocs/datos-tecnicos.jpg"
              titulo="Datos técnicos."
              :lista="[
                'Motor OM 460 de hasta 476 CV y 2.300 Nm.',
                'Múltiples protecciones del entorno de operación',
                'Despeje de suelo incrementado.',
              ]"
            >
            </CamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <CamionesExternalLink
      cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
      ctaLink="https://www.mercedes-benz-trucks.com/es_AR/models/arocs-in-construction-transport.html"
    >
    </CamionesExternalLink>

    <CamionesContactForm modelo="Arocs"></CamionesContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
