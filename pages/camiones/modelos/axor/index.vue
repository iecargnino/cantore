<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      tema="light"
      area="Nuestros camiones"
      titulo="Axor."
      descripcion="Un especialista para el transporte pesado."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/modelos/axor/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>AXOR, CRECE TU CAMIÓN Y TAMBIÉN VOS.</h3>
        <p>El Axor te permite escalar tu capacidad de carga hasta 55,5tn.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/axor/seguridad.jpg"
              titulo="Seguridad."
              :lista="[
                'Cinturones de seguridad de 3 puntos para todos los ocupantes de serie para todos los modelos.',
                'Sistema de mantenimiento Telligent: El camión indicará cuándo realizar los cambios de aceite y las tareas de mantenimiento de acuerdo al tipo de uso, aumentando la rentabilidad operativa.',
                'ABS de serie en todos los modelos.',
                'Freno Motor con Top Brake.',
                'Retarder (Opcional).',
              ]"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/axor/confort.jpg"
              titulo="Confort."
              descripcion="El interior de las cabinas de Axor ofrece amplio espacio y confort, atributos que reducen la fatiga de los ocupantes, influyendo directamente en la seguridad y la productividad del negocio. Todos los camiones Axor ofrecen un gran equipamiento de serie, ofreciendo un confort extra, como el aire acondicionado que mejora las condiciones de operación de los ocupantes, la butaca neumática para el conductor o el asiento central integrado que permite mayor comdidad."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/axor/tecnologia.jpg"
              titulo="Tecnología"
              :lista="[
                'Sistema de mantenimiento Telligent: El camión indicará cuándo realizar los cambios de aceite y las tareas de mantenimiento de acuerdo al tipo de uso, aumentando la rentabilidad operativa.',
                'Diagnóstico On-board en el panel de instrumentos: Con esta herramienta incluida de serie en la línea Axor, el conductor puede identificar eventuales irregularidades del vehículo y planificar mantenimientos preventivos.',
              ]"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/axor/datos-tecnicos.jpg"
              titulo="Datos técnicos."
              :lista="[
                'Caja Automatizada de 12 marchas.',
                'Doble eje con suspención neumática.',
                'Llantas de Aluminio.',
              ]"
            >
            </CamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <CamionesExternalLink
      cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
      ctaLink="https://www.mercedes-benz-trucks.com/es_AR/models/axor-distribucion-larga-distancia.html"
    >
    </CamionesExternalLink>

    <CamionesContactForm modelo="Axor"></CamionesContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
