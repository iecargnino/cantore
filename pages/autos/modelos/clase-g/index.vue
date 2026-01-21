<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="dark"
      titulo="Clase G"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/modelos/clase-g/"
    >
    </AutosIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Más fuerte que el tiempo.</h3>
        <p>Las excepcionales capacidades en conducción todo terreno son la esencia y el propósito de la Clase G. Estas características han establecido históricamente el referente en aspectos como la profundidad de vadeo y la inclinación lateral máxima.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-g/exterior.jpg"
              titulo="Exterior"
              descripcion="El potente motor de seis cilindros en línea y 3,0 litros con sobrealimentación doble mediante un turbocompresor y un compresor adicional eléctrico, así como alternador arrancador integrado, entrega un par máximo de 560 Nm[1], ofrece una excelente capacidad de aceleración y garantiza placer de conducción."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-g/interior.jpg"
              titulo="Interior"
              descripcion="El diseño interior completamente reestilizado alcanza un nuevo nivel. Los rasgos formales y las dimensiones del habitáculo no permiten albergar duda alguna: estamos ante un todoterreno digno de la sigla G, dominante, anguloso, emblemático. El habitáculo de la Clase G manifiesta una generosidad y comodidad para todos los ocupantes."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-g/tecnologia.jpg"
              titulo="Tecnología"
              descripcion="Máximo confort de asiento, incluso en trayectos largos. Optimizá tu posición sobre el asiento con las amplias opciones de ajuste que ofrecen los asientos. Si lo deseas, puedes disfrutar de un agradable calor y ocho programas de masaje diferentes. Si te gusta la conducción deportiva, los apoyos laterales dinámicos te ofrecen una sujeción lateral inmejorable."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <!-- Contenido a definir -->

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-g/aspectos-destacados.jpg"
              titulo="Aspectos Destacados"
              descripcion="El sistema de la Clase G puede advertirte mediante vibraciones en el volante si sobrepasas involuntariamente una línea delimitadora de la ruta, tanto continua como discontinua.
Si se trata de una línea continua, o discontinua y se detecta tráfico en el carril contiguo el asistente puede intervenir adicionalmente en los frenos de un lado del vehículo. [1]"
            >
            </AutosCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <AutosExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/passengercars/models/suv/g-class/overview.html"
    >
    </AutosExternalLink>

    <AutosContactForm></AutosContactForm>
    <div id="notaLegal">
      <div class="pageWidth">
        <p>
          “Categoría de etiquetado comparativo: LETRA E COLOR rojo. Modelo Etiquetado en CO2 y Eficiencia Energética bajo RESOL-2018-85-APN-SGAYDS#SGP en las condiciones detalladas por
          <a
            href="https://www.argentina.gob.ar/etiqueta-vehicular"
            target="_blank"
            >https://www.argentina.gob.ar/etiqueta-vehicular.</a
          >.“
        </p>
        >“

        <p>[1] Nuestros sistemas de seguridad y asistencia a la conducción son herramientas auxiliares, por lo que no eximen al usuario de su responsabilidad como conductor. Hay que tener en cuenta las indicaciones que figuran en las instrucciones de servicio del vehículo y las limitaciones del sistema que allí se describen.</p>
        <p>Las imágenes publicadas son de carácter ilustrativo y con fin publicitario. Consulte especificaciones técnicas y equipamiento de cada vehículo en la Red de Concesionarios Oficiales Mercedes-Benz autorizados. Mercedes-Benz Argentina S.A.U. y sus afiliadas y subsidiarias, red de concesionarios oficiales y eventualmente a los subcontratistas, se reserva el derecho de modificar especificaciones y/o nivel de equipamiento sin previo aviso y sin incurrir en ninguna obligación.</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/autos/resumen.css");
</style>
