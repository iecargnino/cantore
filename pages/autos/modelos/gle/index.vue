<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="light"
      titulo="GLE"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/modelos/gle/"
    >
    </AutosIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Expresión de fuerza interior.</h3>
        <p>Experimentá la presencia imponente de la nueva GLE y descubrí todos los detalles que hacen único su diseño.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/gle/exterior.jpg"
              titulo="Exterior"
              descripcion="Parece reflejar el éxito. Pero significa mucho más. Más inteligente, más atento y más respetuoso que nunca. La GLE renueva la imagen de las SUV. Superficies sensuales, formas musculosas y líneas claras definen el diseño de la GLE. Difícilmente se puede expresar la fuerza con más elegancia y dinamismo."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/gle/interior.jpg"
              titulo="Interior"
              descripcion="Un espacio para no renunciar jamás: el interior desarrolla una generosa sensación de espaciosidad.
Cada función y cada detalle están concebidos para brindarte la máxima libertad y el mayor confort posible. Descubrí las nuevas posibilidades de tu zona de bienestar personal."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/gle/tecnologia.jpg"
              titulo="Tecnología"
              descripcion="Las funciones del sistema multimedia de interacción por voz MBUX se adaptan completamente a tus preferencias. Solo tenés que decir «Hey Mercedes» para que tu SUV atienda a tus pedidos. Perfiles personales, funciones predictivas y un punto de acceso Wi-Fi definen de forma completamente nueva el concepto de interconexión digital en red."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/gle/aspectos-destacados.jpg"
              titulo="Aspectos Destacados"
              descripcion="Con los sistemas de seguridad y de asistencia a la conducción, la GLE te asiste y protege de forma perceptible. La ayuda activa para estacionar y cámara de 360° te presta asistencia en la búsqueda de espacios para estacionar, así como para maniobrar. [1]"
            >
            </AutosCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <AutosExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/passengercars/modelos/suv/gle/overview.html"
    >
    </AutosExternalLink>

    <AutosContactForm></AutosContactForm>
    <div id="notaLegal">
      <div class="pageWidth">
        <p>
          "Categoría de etiquetado comparativo: LETRA B COLOR verde claro Modelo Etiquetado en CO2 y Eficiencia Energética bajo RESOL-2018-85-APN-SGAYDS#SGP en las condiciones detalladas por
          <a
            href="https://www.argentina.gob.ar/etiqueta-vehicular"
            target="_blank"
            >https://www.argentina.gob.ar/etiqueta-vehicular</a
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
