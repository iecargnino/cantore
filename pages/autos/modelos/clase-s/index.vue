<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="light"
      titulo="Clase S"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/modelos/clase-s/"
    >
    </AutosIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Diseñado para lo que realmente importa.</h3>
        <p>En el Clase S, el lujo moderno y el confort exquisito alcanzan una nueva dimensión.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-s/exterior.jpg"
              titulo="Exterior"
              descripcion="Su diseño exterior conjuga distinción elegante con deportividad. Las sugestivas líneas del exterior confieren al vehículo fuerza y dinamismo, antes incluso de ponerse en marcha."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-s/interior.jpg"
              titulo="Interior"
              descripcion="El interior cumple lo que promete el exterior: amplitud, belleza y confort, que dan como resultado un ambiente de bienestar fuera de lo común. Ideal para sentirse a gusto, relajarse."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-s/tecnologia.jpg"
              titulo="Tecnología"
              descripcion="Te lleva seguro y relajado a tu destino. Gracias a los modernos sistemas de sensores, interconectados en red de forma inteligente, disfrutarás de las múltiples ventajas que aporta la conducción parcialmente automatizada. Numerosos asistentes respaldan tu labor al volante en función de la situación, te advierten si detectan peligro de colisión y, en caso de necesidad, intervienen activamente por el bien de todos los usuarios de la vía. [1]"
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <!-- Contenido a definir -->

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-s/aspectos-destacados.jpg"
              titulo="Aspectos Destacados"
              descripcion="El sistema ATTENTION ASSIST detecta signos de fatiga o distracción y alerta automáticamente al conductor, haciendo que el viaje sea más seguro. Es especialmente útil en trayectos largos. [1]"
            >
            </AutosCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <AutosExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/passengercars/modelos/saloon/s-class/overview.html"
    >
    </AutosExternalLink>

    <AutosContactForm></AutosContactForm>
    <div id="notaLegal">
      <div class="pageWidth">
        <p>
          “Categoría de etiquetado comparativo: LETRA C COLOR amarillo. Modelo Etiquetado en CO2 y Eficiencia Energética bajo RESOL-2018-85-APN-SGAYDS#SGP en las condiciones detalladas por
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
