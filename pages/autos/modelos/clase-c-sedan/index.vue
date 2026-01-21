<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="light"
      titulo="Clase C Sedán"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/modelos/clase-c-sedan/"
    >
    </AutosIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Bienvenido a tu zona de confort.</h3>
        <p>El diseño es expresión de deportividad. En el Clase C Sedán, modernidad y lujo se encuentran en perfecta armonía.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-c-sedan/exterior.jpg"
              titulo="Exterior"
              descripcion="La alternancia de líneas, aristas y superficies convexas y cóncavas genera en la totalidad del vehículo un apasionante conjunto. Impresionante por tradición. Un carisma vital y lleno de deportividad elegante."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-c-sedan/interior.jpg"
              titulo="Interior"
              descripcion='El nuevo Clase C Sedán es un estandarte actual del lujo moderno. Su interior de carácter deportivo alberga diversas innovaciones. Una pantalla táctil de 11,9" en formato vertical convierte la consola central en el centro digital del habitáculo. Los modernos elementos de adorno reflejan también el avanzado lenguaje de diseño.'
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-c-sedan/tecnologia.jpg"
              titulo="Tecnología"
              descripcion="La ayuda activa PARKTRONIC detecta espacios libres para estacionar al pasar por delante de ellos. Una vez seleccionado un lugar, podés estacionar con seguridad gracias a la cámara de marcha atrás, a los sensores de ultrasonidos y a las prácticas visualizaciones, o bien realizar esta tarea de forma asistida. [1]"
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <!-- Contenido a definir -->

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-c-sedan/aspectos-destacados.jpg"
              titulo="Aspectos Destacados"
              descripcion="Gracias al paquete Advanced Plus llegarás a tu destino de manera rápida, relajada y con toda la información necesaria. El mismo incluye un visualizador central y del conductor de gran tamaño, Smartphone integration y el sistema de navegación MBUX Premium, entre otras funciones."
            >
            </AutosCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <AutosExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/passengercars/modelos/saloon/c-class/overview.html"
    >
    </AutosExternalLink>

    <AutosContactForm></AutosContactForm>
    <div id="notaLegal">
      <div class="pageWidth">
        <p>
          "Categoría de etiquetado comparativo: LETRA B COLOR verde claro. Modelo Etiquetado en CO2 y Eficiencia Energética bajo RESOL-2018-85-APN-SGAYDS#SGP en las condiciones detalladas por
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
