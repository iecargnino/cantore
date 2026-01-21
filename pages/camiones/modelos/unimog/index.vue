<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      tema="light"
      area="Nuestros camiones"
      titulo="Unimog U 4000/U 5000."
      descripcion="Imparable, continúa con el trabajo que otros deben abandonar."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/modelos/unimog/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>UNIMOG, IMPARABLE.</h3>
        <p>El Unimog, continúa con el trabajo que otros deben abandonar.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/unimog/seguridad.jpg"
              titulo="Seguridad."
              :lista="[
                'Extinción de incendios y rescate.',
                'Energía',
                'Todo Terreno y Ocio.',
              ]"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/unimog/confort.jpg"
              titulo="Confort."
              descripcion="La posición de la cabina del conductor tras el motor y el apoyo de tres puntos de la cabina sobre elementos de goma amortiguan las vibraciones y los golpes, proporcionando así una atmósfera de trabajo relajada."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/unimog/tecnologia.jpg"
              titulo="Tecnología"
              descripcion="Este todo terreno tiene suspensión de eje con tubo de empuje, brazo transversal y muelles helicoidales. Este tipo de suspensión insólita para un vehículo industrial permite largos recorridos de la suspensión y una gran capacidad de cruce de los ejes. Estabilizadores delante y detrás que incrementan la alta estabilidad en curvas y la seguridad de conducción."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/unimog/datos-tecnicos.jpg"
              titulo="Datos técnicos."
              :lista="['Motor OM 904 y 924 con hasta 160 CV y 810.000 Nm.']"
            >
            </CamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <CamionesExternalLink
      cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
      ctaLink="https://www.mercedes-benz-trucks.com/es_AR/models/unimog-off-road-4000-5000.html"
    >
    </CamionesExternalLink>

    <CamionesContactForm modelo="Unimog"></CamionesContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
