<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="light"
      titulo="Clase A Sedán"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/modelos/clase-a-sedan/"
    >
    </AutosIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>A tu medida.</h3>
        <p>El Clase A Sedán conjuga deportividad elegante con confort de clase de lujo. Descubrí un modelo dinámico y preparado para enfrentarse a cualquier desafío, que te acompañará en tu día a día. Un vehículo compacto para acceder al mundo sedán premium de Mercedes-Benz.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-a-sedan/exterior.jpg"
              titulo="Exterior"
              descripcion="Techo suavemente descendente. Fascinación claramente en ascenso. Cuando de pequeños dibujábamos un auto, intuitivamente trazábamos un modelo de tres volúmenes. Con el Clase A Sedán podés volver a soñar con un auto así. Su silueta integra de forma magistral dinamismo y elegancia atemporal."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-a-sedan/interior.jpg"
              titulo="Interior"
              descripcion="Cada detalle está concebido para asegurar tu bienestar. Las transiciones entre el tablero de instrumentos, la consola central y los revestimientos de las puertas son casi imperceptibles, generando el agradable efecto envolvente. Este concepto es tan excepcional que resalta la calidad del interior."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-a-sedan/tecnologia.jpg"
              titulo="Tecnología"
              descripcion="El sistema multimedia de interacción por voz MBUX no te exime de tus responsabilidades como conductor, pero hace la conducción más agradable. Gracias a la inteligencia artificial, MBUX tiene capacidad para aprender, y con el tiempo se va adaptando cada vez más al conductor. Gracias al asistente de voz podés utilizar un lenguaje natural, casi como si hablaras con un amigo."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-a-sedan/aspectos-destacados.jpg"
              titulo="Aspectos Destacados"
              descripcion="El asistente activo de distancia DISTRONIC te facilita la conducción, especialmente en situaciones de estrés como las horas pico. Al fin y al cabo, el tiempo que pasás al volante es tu tiempo. Tiempo para relajarte. Queremos que puedas llegar a tu destino de un modo especialmente seguro, pero también más relajado. [1]"
            >
            </AutosCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <AutosExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/passengercars/models/saloon/a-class/overview.html"
    >
    </AutosExternalLink>

    <AutosContactForm></AutosContactForm>
    <div id="notaLegal">
      <div class="pageWidth">
        <p>
          A 200: "Categoría de etiquetado comparativo: LETRA B COLOR verde claro. Modelo Etiquetado en CO2 y Eficiencia Energética bajo RESOL-2018-85-APN-SGAYDS#SGP en las condiciones detalladas por
          <a
            href="https://www.argentina.gob.ar/etiqueta-vehicular"
            target="_blank"
            >https://www.argentina.gob.ar/etiqueta-vehicular.</a
          >.“
        </p>

        <p>[1] Nuestros sistemas de seguridad y asistencia a la conducción son herramientas auxiliares, por lo que no eximen al usuario de su responsabilidad como conductor. Hay que tener en cuenta las indicaciones que figuran en las instrucciones de servicio del vehículo y las limitaciones del sistema que allí se describen.</p>
        <p>Las imágenes publicadas son de carácter ilustrativo y con fin publicitario. Consulte especificaciones técnicas y equipamiento de cada vehículo en la Red de Concesionarios Oficiales Mercedes-Benz autorizados. Mercedes-Benz Argentina S.A.U. y sus afiliadas y subsidiarias, red de concesionarios oficiales y eventualmente a los subcontratistas, se reserva el derecho de modificar especificaciones y/o nivel de equipamiento sin previo aviso y sin incurrir en ninguna obligación.</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/autos/resumen.css");
</style>
