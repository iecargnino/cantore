<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="light"
      titulo="EQA"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/modelos/eqa/"
    >
    </AutosIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Una nueva generación.</h3>
        <p>EQA es el modelo de acceso a la gama de vehículos con propulsión exclusivamente eléctrica de Mercedes-Benz.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/eqa/exterior.jpg"
              titulo="Exterior"
              descripcion="Las formas claras, con predominio de las superficies y reducción de las líneas y aristas, unidas con precisión, son expresión de modernidad deportiva. Los detalles de color azul en los faros LED High Performance son también indicadores del avanzado concepto de propulsión."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/eqa/interior.jpg"
              titulo="Interior"
              descripcion="El interior de la EQA es una síntesis entre espaciosidad, alta tecnología y deportividad. El agradable interior se extiende desde el volante hasta los asientos, permitiendo a los pasajeros que disfruten plenamente de la emocionante sensación que proporciona la conducción eléctrica."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/eqa/tecnologia.jpg"
              titulo="Tecnología"
              descripcion="Con el Wallbox incluido, cualquier sitio se convierte en una estación de carga. Gracias al potente sistema de carga de corriente alterna, la EQA carga la batería con una mayor rapidez que si se conecta a una caja de enchufe doméstica convencional."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <!-- Contenido a definir -->

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/eqa/aspectos-destacados.jpg"
              titulo="Aspectos Destacados"
              descripcion="Convertir el tiempo de conducción en tiempo de carga. Basta con un solo movimiento de mano para depositar el smartphone en un lugar reservado en el compartimento multiuso, donde se recarga la batería sin necesidad de cables. Los smartphones compatibles se cargan por vía inalámbrica, independientemente del modelo y la marca."
            >
            </AutosCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <AutosExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/passengercars/modelos/suv/eqa/overview.html"
    >
    </AutosExternalLink>

    <AutosContactForm></AutosContactForm>
    <div id="notaLegal">
      <div class="pageWidth">
        <p>Las imágenes publicadas son de carácter ilustrativo y con fin publicitario. Consulte especificaciones técnicas y equipamiento de cada vehículo en la Red de Concesionarios Oficiales Mercedes-Benz autorizados. Mercedes-Benz Argentina S.A.U. y sus afiliadas y subsidiarias, red de concesionarios oficiales y eventualmente a los subcontratistas, se reserva el derecho de modificar especificaciones y/o nivel de equipamiento sin previo aviso y sin incurrir en ninguna obligación.</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/autos/resumen.css");
</style>
