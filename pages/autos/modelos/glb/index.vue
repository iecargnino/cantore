<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="light"
      titulo="GLB"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/modelos/glb/"
    >
    </AutosIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Subite a un mundo de posibilidades.</h3>
        <p>Descubre el diseño del nuevo Mercedes-Benz GLB desde todos los ángulos, donde la robustez todoterreno que se percibe en su exterior se refleja también en su interior.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/glb/exterior.jpg"
              titulo="Exterior"
              descripcion="La GLB destaca con sus líneas elegantes y al mismo tiempo robustas con una zaga llamativa. La parrilla del radiador todoterreno y los faros LED High Performance le proporcionan un aspecto fuerte y dinámico."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/glb/interior.jpg"
              titulo="Interior"
              descripcion="Distintivos elementos de la SUV en combinación con un canon estético elegante. Cuenta con una tercer fila de asientos para un máximo de dos pasajeros adicionales, el cual se puede plegar y desplegar rápidamente en cualquier momento."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/glb/tecnologia.jpg"
              titulo="Tecnología"
              descripcion="Así de intuitiva e innovadora puede ser la conexión en red. El MBUX de la GLB ofrece una conexión innovadora. Este sistema multimedia inteligente permite un control mediante el habla, el tacto o los gestos, manteniéndote siempre un paso adelante."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <!-- Contenido a definir -->

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/glb/aspectos-destacados.jpg"
              titulo="Aspectos Destacados"
              descripcion="Con la GLB tenés la libertad de recorrer el camino que querés gracias a su sistema 4MATIC con paquete Off-Road. Su sistema multimedia de interacción por voz MBUX aprende y predice tus gustos de manera inteligente."
            >
            </AutosCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <AutosExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/passengercars/modelos/suv/glb/overview.html"
    >
    </AutosExternalLink>

    <AutosContactForm></AutosContactForm>
    <div id="notaLegal">
      <div class="pageWidth">
        <p>
          GLB 200: “Categoría de etiquetado comparativo: LETRA A COLOR verde oscuro. Modelo Etiquetado en CO2 y Eficiencia Energética bajo RESOL-2018-85-APN-SGAYDS#SGP en las condiciones detalladas por https://www.argentina.gob.ar/etiqueta-vehicular.“ GLB 250: “Categoría de etiquetado comparativo: LETRA B COLOR verde claro. Modelo Etiquetado en CO2 y Eficiencia Energética bajo RESOL-2018-85-APN-SGAYDS#SGP en las condiciones detalladas por
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
