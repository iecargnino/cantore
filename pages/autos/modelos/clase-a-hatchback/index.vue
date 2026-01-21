<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="light"
      titulo="Clase A Hatchback"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/modelos/clase-a-hatchback/"
    >
    </AutosIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>La vida es como la manejás.</h3>
        <p>Descubrí un modelo versátil que te permitirá superar fácilmente cualquier desafío.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-a-hatchback/exterior.jpg"
              titulo="Exterior"
              descripcion="El marcado frontal irradia más confianza que nunca, pero también simpatía. La nueva generación de faros remarcan la característica mirada enérgica. Las líneas nítidas y reducidas, la gran distancia entre ejes y el compacto habitáculo se combinan armoniosamente para lograr un diseño inconfundible."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-a-hatchback/interior.jpg"
              titulo="Interior"
              descripcion=" El interior fusiona deportividad con una amplia sensación de espaciosidad. Satisface las mayores exigencias estéticas y se combina con una variedad de diseños para personas creativas."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-a-hatchback/tecnologia.jpg"
              titulo="Tecnología"
              descripcion="Crea un vínculo emocional y transforma un vehículo de serie en tu vehículo individual. MBUX, el sistema multimedia con inteligencia artificial te muestra una nueva dimensión del infoentretenimiento. Simplemente decí “Hola Mercedes” para que tu MBUX atienda tus peticiones."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <!-- Contenido a definir -->

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-a-hatchback/aspectos-destacados.jpg"
              titulo="Aspectos Destacados"
              descripcion="La ayuda activa PARKTRONIC aumenta el confort y se encarga de buscar un lugar disponible. La cámara de marcha atrás brinda asimismo tranquilidad al estacionar, pues proporciona visibilidad para evitar costosos daños en la carrocería. [1]"
            >
            </AutosCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <AutosExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/passengercars/modelos/hatchback/a-class/overview.html"
    >
    </AutosExternalLink>

    <AutosContactForm></AutosContactForm>

    <div id="notaLegal">
      <div class="pageWidth">
        <p>
          A 200: “Categoría de etiquetado comparativo: LETRA B COLOR verde claro. Modelo Etiquetado en CO2 y Eficiencia Energética bajo RESOL-2018-85-APN-SGAYDS#SGP en las condiciones detalladas por
          <a
            href="https://www.argentina.gob.ar/etiqueta-vehicular"
            target="_blank"
            >https://www.argentina.gob.ar/etiqueta-vehicular.</a
          >.“
        </p>

        <p>[1] Nuestros sistemas de seguridad y asistencia a la conducción son herramientas auxiliares, por lo que no eximen al usuario de su responsabilidad como conductor. Hay que tener en cuenta las indicaciones que figuran en las instrucciones de servicio del vehículo y las limitaciones del sistema que allí se describen.</p>
        <p>Las imágenes publicadas en este sitio son de carácter ilustrativo y con fin publicitario. En ningún caso deben reputarse y/o interpretarse como contractuales. Consulte especificaciones técnicas y equipamiento de cada vehículo en la Red de Concesionarios Oficiales Mercedes-Benz. Mercedes-Benz Argentina S.A.U. se reserva el derecho de modificar especificaciones y/o nivel de equipamiento sin previo aviso y sin incurrir en ninguna obligación.</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/autos/resumen.css");
</style>
