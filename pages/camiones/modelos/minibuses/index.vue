<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      tema="light"
      area="Nuestros buses"
      titulo="Minibuses."
      descripcion="Chasis LO 916."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/modelos/minibuses/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>
          El chasis para minibus LO 916 fue proyectado para operar en turismo y
          transporte de personal. Permite el montaje de carrocerías de hasta 24
          asientos con bodegas de gran volumen en la parte trasera y lateral.
        </h3>
        <p>
          Está equipado con el motor OM 924 LA, con 156 cv de potencia y par
          motor de 580 Nm, que cumple las normas de emisión de contaminantes
          Euro V. El OM 924 LA es un motor con sistema de inyección electrónica,
          asegurando el máximo desempeño con óptimo consumo de combustible. El
          chasis esta equipado con freno neumático de doble circuito y tambor en
          las 4 ruedas.
        </p>
        <p>
          Las ventajas ofrecidas por el chasis representan para el transportista
          la mejor opción para su negocio. Mercedes-Benz siempre ofrece una
          alternativa más para atender las demandas del transporte de pasajeros,
          en cualquier tipo de servicio.
        </p>
      </div>
    </section>

    <CamionesExternalLink
      cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
      ctaLink="https://www.mercedes-benz-bus.com/es_AR/models/lo-916.html"
    >
    </CamionesExternalLink>

    <CamionesContactForm modelo="MiniBuses"></CamionesContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
