<template>
  <NuxtLayout
    name="autos"
    class="XXX"
  >
    <AutosIntro
      tema="dark"
      :titulo="'Mercedes-AMG \nClase A Sedán'"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/modelos/clase-a-sedan-amg/"
    >
    </AutosIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>A tu medida.</h3>
        <p>Disfrutá de un manejo lleno de energía y diversión para tus trayectos diarios, en un automóvil deportivo sin igual.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-a-sedan-amg/exterior.jpg"
              titulo="Exterior"
              descripcion="El llamativo faldón trasero AMG con efecto difusor específico, cuatro perfiles verticales y dos embellecedores redondos de la salida de escape, otorga al vehículo una presencia inconfundible. Su diseño irradia deportividad en su forma más pura, combinando dinamismo y sofisticación de manera excepcional."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-a-sedan-amg/interior.jpg"
              titulo="Interior"
              descripcion="El volante AMG en cuero de napa con buena adherencia, para un agarre perfecto y un manejo preciso. La forma aplanada típica de los volantes AMG procede del deporte del motor y acentúa el carácter deportivo del puesto de conducción. Los botones Touch Control dispuestos en forma ergonómica ofrecen opcionalmente un confort de manejo intuitivo y favorecen la concentración durante la conducción."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-a-sedan-amg/tecnologia.jpg"
              titulo="Tecnología"
              descripcion="Disfrutá de la belleza y la inteligencia de un sistema multimedia digitalizado. Con el visualizador de medios y su pantalla táctil, tenés el control total sobre la información que querés ver."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <!-- Contenido a definir -->

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-a-sedan-amg/aspectos-destacados.jpg"
              titulo="Aspectos Destacados"
              descripcion="Creá un vínculo emocional y convertí un vehículo de serie en «tu» vehículo individual. Las funciones MBUX ampliadas se adaptan completamente a tus preferencias. Simplemente tenes que decir «Hey Mercedes» para que tu MBUX atienda a tus peticiones."
            >
            </AutosCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <AutosExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/passengercars/models/saloon/a-class/amg.html"
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
            >https://www.argentina.gob.ar/etiqueta-vehicular.</a
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
