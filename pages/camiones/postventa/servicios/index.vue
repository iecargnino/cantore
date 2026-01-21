<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      area="Postventa"
      titulo="Servicios"
      descripcion="Conocé los serivicos que tenemos para tu flota."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/postventa/servicios/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Te acompañamos kilómetro a kilómetro.</h3>
        <p>Para estar con vos desde que te subís hasta que elegís tu próximo Mercedes-Benz. Conocé la propuesta 360° que Mercedes-Benz Camiones y Buses tiene para vos.</p>
      </div>
    </section>

    <section
      id="caracteristicas"
      class="x3"
    >
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/postventa/servicios/assistance.jpg"
              titulo="Mercedes-Benz Assistance 24hs."
              descripcion="Estamos las 24 horas disponibles para atenderte en caso de una eventualidad en Argentina y países limítrofes. Llamamos a nuestro Centro de Atención al Cliente y te brindaremos la mejor solución para vos y tu vehículo. Disfrutá de este servicio durante el período de garantía o con tu contrato de mantenimiento ServicePlus."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/postventa/servicios/service-plus.jpg"
              titulo="Mercedes-Benz ServicePlus."
              descripcion="Mercedes-Benz ServicePlus es tu plan de mantenimiento, diseñado para maximizar la rentabilidad y disponibilidad de tu vehículo. Se adaptan a tu flota y aplicación, y tienen en cuenta sus necesidades específicas para garantizarte un correcto mantenimiento."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/postventa/servicios/fleetboard.jpg"
              titulo="FleetBoard"
              descripcion="Para que tus vehículos trabajen de forma rentable: Mercedes‑Benz Camiones te ofrece Fleetboard, para aumentar de forma eficaz la eficiencia de tus camiones. Vista general de la flota, operaciones de los conductores, planificación de rutas, citas en el taller, pedido de repuestos, lectura de los tacógrafos: esto y mucho más se puede organizar digitalmente y en red para utilizar tus camiones de forma predictiva y rentable. Y para ahorrarte mucho tiempo y dinero."
            >
            </CamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <CamionesContactForm></CamionesContactForm>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <CamionesCardsShortcutCard
            titulo="Repuestos y accesorios"
            icon="/images/camiones/icons/parts.svg"
            link="/camiones/postventa/repuestos-y-accesorios"
          >
          </CamionesCardsShortcutCard>

          <CamionesCardsShortcutCard
            titulo="Servicio técnico"
            icon="/images/camiones/icons/service.svg"
            link="/camiones/postventa/servicio-tecnico"
          >
          </CamionesCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
