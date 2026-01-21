<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="dark"
      titulo="Mercedes-AMG Clase A Hatchback"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/modelos/clase-a-hatchback-amg/"
    >
    </AutosIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Emoción a primera vista.</h3>
        <p>Dos nuevos modelos compactos de Mercedes-AMG, el A 35 4MATIC y A 45 S 4MATIC+, ofrecen dinamismo y diseño excepcionales, siendo la entrada perfecta al emocionante mundo del AMG Driving Performance. Una vez dentro, no querrás salir.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-a-hatchback-amg/exterior.jpg"
              titulo="Exterior"
              descripcion="El exterior de los nuevos Mercedes-AMG A 35 4MATIC y Mercedes-AMG A 45 S 4MATIC+ promete una experiencia de conducción excepcional desde el primer vistazo. Ambos modelos destacan por su parrilla del radiador con tirantes verticales característicos de AMG, su diseño frontal estilo «Shark Nose» y sus nuevos faros de contorno definido."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-a-hatchback-amg/interior.jpg"
              titulo="Interior"
              descripcion="El interior AMG, con sus asientos y volante Performance de nueva generación, ofrece un diseño deportivo que intensifica el vínculo entre el conductor y el vehículo."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-a-hatchback-amg/tecnologia.jpg"
              titulo="Tecnología"
              descripcion="El motor AMG de 4 cilindros con turbocompresor, 225 kW (306 CV) y 400 Nm[1], tecnología Twin-Scroll, intercooler refrigerado por agua y aspiración de aire de diseño específico (tubería de aire filtrado), transmite toda su fuerza a las ruedas de forma eficiente."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <!-- Contenido a definir -->

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-a-hatchback-amg/aspectos-destacados.jpg"
              titulo="Aspectos Destacados"
              descripcion="El cambio AMG SPEEDSHIFT DCT 8G es tu compañero ideal a la hora de practicar un estilo de conducción deportivo. El cambio de doble embrague opcional impresiona por sus cambios de relación extremadamente rápidos, aunque también domina los cambios apenas perceptibles y con un alto nivel de confort."
            >
            </AutosCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <AutosExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/passengercars/models/hatchback/a-class/amg.html"
    >
    </AutosExternalLink>

    <AutosContactForm></AutosContactForm>

    <div id="notaLegal">
      <div class="pageWidth">
        <p>
          A 35: "Categoría de etiquetado comparativo: LETRA B COLOR verde claro. Modelo Etiquetado en CO2 y Eficiencia Energética bajo RESOL-2018-85-APN-SGAYDS#SGP en las condiciones detalladas por
          <a
            href="https://www.argentina.gob.ar/etiqueta-vehicular"
            target="_blank"
            >https://www.argentina.gob.ar/etiqueta-vehicular</a
          >.“
        </p>
        <p>Las imágenes publicadas son de carácter ilustrativo y con fin publicitario. Consulte especificaciones técnicas y equipamiento de cada vehículo en la Red de Concesionarios Oficiales Mercedes-Benz autorizados. Mercedes-Benz Argentina S.A.U. y sus afiliadas y subsidiarias, red de concesionarios oficiales y eventualmente a los subcontratistas, se reserva el derecho de modificar especificaciones y/o nivel de equipamiento sin previo aviso y sin incurrir en ninguna obligación.</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/autos/resumen.css");
</style>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "amg"
  }
});
</script>
