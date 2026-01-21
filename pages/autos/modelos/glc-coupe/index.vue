<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="light"
      titulo="GLC Coupé"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/modelos/glc-coupe/"
    >
    </AutosIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Cargada de expresión.</h3>
        <p>La nueva GLC Coupé te deslumbra en cada recorrido con su diseño que combina elegancia y tecnología de vanguardia. Este modelo de Mercedes-Benz destaca por su carácter único, fusionando el estilo icónico de un coupé con la sofisticación de una SUV deportiva de lujo.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/glc-coupe/exterior.jpg"
              titulo="Exterior"
              descripcion="La GLC Coupé atrae las miradas con su porte deportivo y dinámico. Los faros resaltan la anchura del revestimiento cromado de la parrilla, combinando las proporciones de una SUV con los detalles distintivos del diseño coupé característico de Mercedes-Benz."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/glc-coupe/interior.jpg"
              titulo="Interior"
              descripcion="Tomá asiento y disfrutá de esta vista fascinante.
Te esperan funciones inteligentes de confort, un concepto de manejo fascinante y visualizadores digitales."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/glc-coupe/tecnologia.jpg"
              titulo="Tecnología"
              descripcion="La GLC Coupé no solo entiende lo que decís, sino que además reacciona de inmediato al tacto. Esto es posible gracias al sistema MBUX con visualizador central con el que podrás controlar de forma cómoda e intuitiva muchas funciones importantes del vehículo."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <!-- Contenido a definir -->

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/glc-coupe/aspectos-destacados.jpg"
              titulo="Aspectos Destacados"
              descripcion="El asistente activo de distancia DISTRONIC facilita considerablemente tu tarea y regula de forma automática la distancia respecto al vehículo precedente que hayas predeterminado. [1]"
            >
            </AutosCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <AutosExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/passengercars/modelos/suv/glc-coupe/overview.html"
    >
    </AutosExternalLink>

    <AutosContactForm></AutosContactForm>
    <div id="notaLegal">
      <div class="pageWidth">
        <p>
          "Categoría de etiquetado comparativo: LETRA C COLOR amarillo. Modelo Etiquetado en CO2 y Eficiencia Energética bajo RESOL-2018-85-APN-SGAYDS#SGP en las condiciones detalladas por
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
