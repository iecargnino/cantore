<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="dark"
      titulo="Mercedes-AMG GLE Coupé"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/modelos/gle-coupe/"
    >
    </AutosIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Todos los tipos de fuerza.</h3>
        <p>La Mercedes-AMG GLE Coupé combina un rendimiento excepcional con la sofisticada apariencia de una SUV Coupé. Este modelo de Mercedes-AMG satisface las más estrictas expectativas en términos de dinámica de conducción y rendimiento.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/gle-coupe/exterior.jpg"
              titulo="Exterior"
              descripcion="La GLE Coupé combina lo mejor de dos mundos: la deportividad de un coupé y la espaciosidad típica de una SUV. La combinación transmite automáticamente una presencia fascinante. Una carrocería baja y un techo ligeramente inclinado conforman su silueta característica."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/gle-coupe/interior.jpg"
              titulo="Interior"
              descripcion="Una vez que tomes asiento, experimentarás el liderazgo de los asientos deportivos AMG climatizados con paquete de memoria y  sujeción lateral optimizada, diseñados para ofrecer un placer de conducción similar al del automovilismo."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/gle-coupe/tecnologia.jpg"
              titulo="Tecnología"
              descripcion="Los botones AMG en el volante, confieren un aire radicalmente deportivo y permiten controlar con rapidez y precisión determinadas funciones dinámicas. Gracias a su funcionamiento intuitivo, tampoco tenés que separar la vista de la carretera."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/gle-coupe/aspectos-destacados.jpg"
              titulo="Aspectos Destacados"
              descripcion="El potente motor de seis cilindros en línea y 3,0 litros con sobrealimentación doble mediante un turbocompresor y un compresor adicional eléctrico, así como alternador arrancador integrado, entrega un par máximo de 560 Nm[1], ofrece una excelente capacidad de aceleración y garantiza placer de conducción."
            >
            </AutosCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <AutosExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/passengercars/models/suv/gle-coupe/amg.html"
    >
    </AutosExternalLink>

    <AutosContactForm></AutosContactForm>
    <div id="notaLegal">
      <div class="pageWidth">
        <p>
          “Categoría de etiquetado comparativo: LETRA B COLOR verde claro Modelo Etiquetado en CO2 y Eficiencia Energética bajo RESOL-2018-85-APN-SGAYDS#SGP en las condiciones detalladas por
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
