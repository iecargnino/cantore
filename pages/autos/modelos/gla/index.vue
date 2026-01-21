<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="light"
      titulo="GLA"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/modelos/gla/"
    >
    </AutosIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Un diseño audaz que domina la ciudad.</h3>
        <p>La nueva GLA une dinamismo innovador con una elegancia atemporal, manteniendo el espíritu todoterreno característico de los SUV.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/gla/exterior.jpg"
              titulo="Exterior"
              descripcion="Deportiva desde cualquier perspectiva.
Su estética moderna confiere a la SUV compacta altas dosis de dinamismo y elegancia, realzadas por un diseño que otorga protagonismo a las superficies."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/gla/interior.jpg"
              titulo="Interior"
              descripcion="Lo que cuenta son los valores internos.
El habitáculo de la nueva GLA conjuga sensación de espaciosidad, alta tecnología y deportividad con un diseño fluido y moderno sienta nuevos referentes. Podrás personalizar la iluminación ambiental ajustando cada trayecto a tu estado de ánimo, creando fascinantes mundos de colores."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/gla/tecnologia.jpg"
              titulo="Tecnología"
              descripcion="La GLA te facilita la conducción, especialmente en situaciones de estrés como las horas pico, durante viajes nocturnos o al circular por lugares desconocidos. Esto se debe a un concepto que hace cualquier desplazamiento en un Mercedes-Benz más seguro y lo convierte en una vivencia muy especial: DISTRONIC. Al fin y al cabo, el tiempo que pasas al volante es tu tiempo. Tiempo para relajarte. Tiempo para reponer fuerzas. Queremos que puedas llegar a tu destino con toda seguridad, pero también más relajado. [1]"
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <!-- Contenido a definir -->

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/gla/aspectos-destacados.jpg"
              titulo="Aspectos Destacados"
              descripcion="Basta con un movimiento de la mano para depositar el Smartphone en su lugar en el compartimiento multiuso, en donde se carga por vía inalámbrica con independencia del modelo y de la marca. Así aprovecharás el tiempo que pasas al volante para cargar tu dispositivo."
            >
            </AutosCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <AutosExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/passengercars/modelos/suv/gla/overview.html"
    >
    </AutosExternalLink>

    <AutosContactForm></AutosContactForm>
    <div id="notaLegal">
      <div class="pageWidth">
        <p>
          GLA 200: "Categoría de etiquetado comparativo: LETRA B COLOR verde claro. Modelo Etiquetado en CO2 y Eficiencia Energética bajo RESOL-2018-85-APN-SGAYDS#SGP en las condiciones detalladas por
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
