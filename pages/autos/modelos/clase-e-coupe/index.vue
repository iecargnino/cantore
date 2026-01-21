<template>
  <NuxtLayout name="autos">
    <div class="amg">
      <AutosIntro
        tema="dark"
        titulo="Mercedes-AMG Clase E Coupé"
        descripcion=""
        cta="Realizar consulta"
        ctaLink="#contactForm"
        imagenURL="/images/autos/modelos/clase-e-coupe/"
      >
      </AutosIntro>
    </div>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Elegancia deportiva, diseño excepcional.</h3>
        <p>El diseño exterior del Mercedes-AMG E 53 4MATIC+ Coupé con el expresivo AMG Styling es una manifestación clara del dinamismo del vehículo, antes incluso de ponerse en marcha.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-e-coupe/exterior.jpg"
              titulo="Exterior"
              descripcion="El Mercedes-AMG E 53 4MATIC+ Coupé resulta inspirador desde cualquier perspectiva. Gracias a los elementos de diseño específicos de AMG y al expresivo diseño de los faros y las luces traseras, el coupé hace gala de deportividad y afán de prestaciones."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-e-coupe/interior.jpg"
              titulo="Interior"
              descripcion="El volante AMG Performance en napa y, como opción, los asientos con exclusivo tapizado en napa AMG negro/gris titanio pearl con costuras de adorno en color de contraste rojo crean un ambiente deportivo y exclusivo. También son fascinantes el puesto de conducción intuitivo y el sistema de infoentretenimiento MBUX con estilos de visualización específicos de AMG."
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-e-coupe/aspectos-destacados.jpg"
              titulo="Aspectos destacados"
              descripcion='Detalles llamativos como las llantas de aleación AMG de 20" en diseño de 5 radios dobles, con propiedades aerodinámicas optimizadas, ponen la guinda a la vocación del vehículo por las altas prestaciones.'
            >
            </AutosCardsCaracteristicaCard>
          </li>

          <li>
            <AutosCardsCaracteristicaCard
              imagen="/images/autos/modelos/clase-e-coupe/tecnologia.jpg"
              titulo="Tecnología"
              descripcion="El Clase E Coupé de Mercedes-AMG se caracteriza por sus altas prestaciones. Los componentes de alto rendimiento opcionales contribuyen a incrementar eficazmente la deportividad."
            >
            </AutosCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <AutosExternalLink
      cta="Más información en el sitio de Mercedes-Benz Argentina"
      ctaLink="https://www.mercedes-benz.com.ar/passengercars/models/coupe/e-class/amg.html#performance"
    >
    </AutosExternalLink>

    <AutosContactForm></AutosContactForm>
    <div id="notaLegal">
      <div class="pageWidth">
        <p>Las imágenes publicadas son de carácter ilustrativo y con fin publicitario. Consulte especificaciones técnicas y equipamiento de cada vehículo en la Red de Concesionarios Oficiales Mercedes-Benz autorizados. Mercedes-Benz Argentina S.A.U. se reserva el derecho de modificar especificaciones y/o nivel de equipamiento sin previo aviso y sin incurrir en ninguna obligación. 1. Los valores indicados han sido determinados según el método de medición prescrito (Reglamento (CE) R85 en su versión actual). 2. Los valores indicados se han determinado según el procedimiento de medición prescrito en el (Reglamento [CE] R101 en su versión actual). Mercedes-Benz Argentina S.A.U. se reserva el derecho de modificar sin previo aviso, parcial o totalmente, el equipamiento detallado.</p>
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
