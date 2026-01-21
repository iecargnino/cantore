<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      area="Nuestros camiones"
      titulo="Actros."
      descripcion="Eficiencia que avanza."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/modelos/actros/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>ACTROS, EL CAMIÓN QUE QUERES JUSTO COMO LO NECESITÁS.</h3>
        <p>La última técnología en Seguridad, eficiencia y Confort. El camión más premiado.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/actros/seguridad.jpg"
              titulo="Seguridad."
              :lista="['Sistema de frenado de emergencia', 'Control crucero Tempomat con sistema de regulación de distancia.', 'Control de estabilidad (ESP)', 'Sistema de alerta por cansancio Attention Assist.', 'Detector de cambio de carril.']"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/actros/confort.jpg"
              descripcion="Trabajar mejor, conducir mejor, descansar mejor. El nuevo Actros muestra cómo es posible."
              :lista="['Cabina StreamSpace optimizada aerodinámicamente.', 'Luces diurnas LED.', 'Heladera, lavafaros, doble cama, volante de cuero multifunción, asiento de acompañante neumático, y más.']"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/actros/tecnologia.jpg"
              titulo="Tecnología"
              :lista="['MirrorCam en sustitución de espejos laterales', 'Multimedia Cockpit Interactivo: panel de instrumentos digital e interactivo con patalla central táctil.', 'Sistema de Gestión de Flotas Fleetboard.']"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/actros/datos-tecnicos.jpg"
              titulo="Datos técnicos."
              :lista="['Motor y tren de fuerza de última generación.', 'Motor hasta 625 CV de potencia y 3.000 Nm de torque.', 'Capacidad máxima de tracción hasta 250tn.', 'Opción suspención neumática en todos los ejes.']"
            >
            </CamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <!-- <CamionesExternalLink
      cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
      ctaLink="https://www.mercedes-benz-trucks.com/es_AR/models/new-actros.html"
    >
    </CamionesExternalLink> -->

    <CamionesContactForm modelo="Actros"></CamionesContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
