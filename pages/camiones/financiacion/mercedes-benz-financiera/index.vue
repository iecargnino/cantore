<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      area="Financiación"
      titulo="Mercedes-Benz Financiera"
      descripcion="Accedé a vehículos Mercedes-Benz de la manera más simple."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/financiacion/mercedes-benz-financiera/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>La financiación justa para todos los modelos.</h3>
        <p>En Mercedes-Benz Financiera desarrollamos productos financieros con una amplia gama de opciones que permiten acceder a vehículos Mercedes-Benz de la manera más simple, transparente y rápida.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/financiacion/mercedes-benz-financiera/financiacion.jpg"
              titulo="Financiación."
              descripcion="Mercedes-Benz Financiera ofrece en la Argentina una amplia gama de opciones financieras especialmente diseñadas para que puedas acceder de la forma más ágil y transparente a los vehículos de la marca Mercedes-Benz."
              :lista="['Tasa Fija en pesos', 'Financiación de vehículos 0Km y Usados', 'Planes a la medida de las necesidades de nuestros clientes']"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/financiacion/mercedes-benz-financiera/leasing.jpg"
              titulo="Leasing."
              descripcion="El Leasing es una alternativa para la adquisición o renovación de tu vehículo Mercedes-Benz, mediante la cual se otorga el uso de la unidad por un plazo determinado, con la opción a comprar o renovar la unidad."
              :lista="['Financiación 100% de la unidad', 'No estar alcanzado por el impuesto a los activos', 'Diferimiento del IVA', 'Amortización acelerada del bien', 'Servicios de Administración']"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/financiacion/mercedes-benz-financiera/flotas.jpg"
              titulo="Flotas."
              descripcion='"Desarrollar alternativas de financiación para flotas es uno de nuestros mayores desafios." La posibilidad de acceder a su flota con cualquiera de nuestros productos financieros esta hoy al alcance de su mano. Las coberturas de seguros, mantenimientos preventivos y correctivos son elementos diferenciales a la hora de elegir un plan de financiación. Además, todo el asesoramiento técnico y financiero de parte del grupoo líder del sector automotriz como así también líder en el mundo en la administración de flotas. No dude en contactarse para obtener información adicional'
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/financiacion/mercedes-benz-financiera/seguros.jpg"
              titulo="Seguros."
              descripcion="Tu mejor inversión exige la mejor protección. Por eso, Mercedes-Benz Financiera junto a Aon Risk Services Argentina, broker líder en administración de riesgos y seguros, pone a tu alcance aseguradoras de primer nivel. Porque nuestro compromiso con la seguridad va más alla del vehículo. Podrás elegir la cobertura a la medida de tus necesidades, con las Compañias de Seguro de primera línea."
            >
            </CamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <CamionesExternalLink
      cta="Más información en el sitio de Mercedes-Benz Financiera Argentina"
      ctaLink="https://www.mbfonline.com.ar/"
    >
    </CamionesExternalLink>

    <CamionesContactForm></CamionesContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
