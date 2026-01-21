<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      tema="light"
      area="Nuestros camiones"
      titulo="Zetros."
      descripcion="Tecnología robusta y potente para usos complejos alrededor del mundo."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/modelos/zetros/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>ZETROS, EL CAMIÓN PARA RUTAS EXTREMAS.</h3>
        <p>El camión que decenas de años ofreciendo una tecnología única, robusta y potente para aplicaciones extremas alrededor del mundo. En trayectos duros y con climatología adversa, el Zetros responde con su sencilla simplicidad: el manejo intuitivo y facilidad de mantenimiento lo convierten en una especie de solucionador de problemas indestructible.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/zetros/aplicacion.jpg"
              titulo="Aplicación."
              descripcion="El Zetros es el camión perfecto para ámbitos de uso variados. Para el sector de la construcción, la exploración, la lucha contra incendios, la minería cielo abierto y mucho más. Combina una extrema capacidad todoterreno con altas cargas útiles. Zetros esconde todo tipo de tecnología innovadora y el extenso Know-How de Mercedes-Benz Trucks."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/zetros/confort.jpg"
              titulo="Confort."
              descripcion="Gracias a la posición de la cabina detrás del eje delantero, el conductor obtiene valiosas ventajas ligadas al diseño del vehículo con capó. Descubra más información sobre el confort del Zetros."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/zetros/seguridad.jpg"
              titulo="Seguridad"
              descripcion="La distribución del puesto de conducción detrás del eje delantero y la adaptación del tren de rodaje se combinan en el Zetros creando un puesto de trabajo ideal en condiciones viales complejas, así como fuera de las carreteras asfaltadas. Su concepto de capó y la batalla larga proporcionan un comportamiento de marcha tranquilo y seguro, especialmente en el servicio de invierno. El conductor y el acompañante disponen de un ángulo de visión óptimo sobre toda la zona de trabajo gracias a la posición baja de los asientos detrás del eje delantero."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/zetros/datos-tecnicos.jpg"
              titulo="Datos técnicos."
              descripcion="Todos los componentes de los motores y cadenas cinemáticas del Zetros están concebidos para resistir los usos más duros fuera del asfalto. Los cambios y sistemas de refrigeración también se ajustan a la potencia y soportan condiciones climáticas extremas. La potencia de 240 kW (326 CV) del Zetros proviene de su motor de seis cilindros en línea OM 926 conforme a la normativa de gases de escape Euro 5. Con una cilindrada 7,2 l a 1200-1600 rpm. se dispone de un par máximo de hasta 1300 Nm."
            >
            </CamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <CamionesExternalLink
      cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
      ctaLink="https://www.mercedes-benz-trucks.com/es_AR/models/zetros.html"
    >
    </CamionesExternalLink>

    <CamionesContactForm modelo="Zetros"></CamionesContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
