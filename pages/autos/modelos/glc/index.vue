<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="light"
      titulo="GLC"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/modelos/glc/"
    >
    </AutosIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Lista para todo.</h3>
        <p>La GLC se distingue por la precisión de sus líneas y el equilibrio dinámico de sus formas, atrayendo de inmediato con su apariencia sofisticada y tecnología avanzada.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/glc/exterior.jpg"
              titulo="Exterior"
              descripcion="Símbolo del lujo moderno. Poderoso, deportivo y ágil. De un exterior robusto, combina lujo, confort y un diseño avanzado con un interior totalmente equipado para rendir en cualquier terreno. Destaca el frontal deportivo con parrilla con Mercedes-Benz Pattern."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/glc/interior.jpg"
              titulo="Interior"
              descripcion="El vehículo te recibe en un habitáculo de dimensiones generosas y alta calidad. Cada uno de los elementos se orienta a un fin superior: hacer que el tiempo que pases a bordo sea tan agradable y el manejo tan sencillo como sea posible. Fascinante por su concepción, más moderna e inteligente que nunca."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <!-- Contenido a definir -->

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/glc/tecnologia.jpg"
              titulo="Tecnología"
              descripcion="La GLC entiende tu idioma. Reconoce tus gestos. MBUX es un concepto de manejo táctil y mando fónico sistema multimedia de interacción por voz. Sencillo. Intuitivo. Basado en gestos, tacto y voz."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <!-- Contenido a definir -->

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/glc/aspectos-destacados.jpg"
              titulo="Aspectos Destacados"
              descripcion="Olvidate del estrés al maniobrar en espacios estrechos y estacioná tu vehículo con facilidad. La ayuda activa para estacionar con PARKTRONIC no es solo capaz de encontrar espacios disponibles para estacionar, sino que también te ayuda a estacionar. Para eso te asiste asumiendo el giro del volante y, en vehículos con cambio automático, también puede acelerar, frenar y cambiar de marcha. [1]"
            >
            </AutosCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <AutosExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/passengercars/modelos/suv/glc/overview.html"
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
