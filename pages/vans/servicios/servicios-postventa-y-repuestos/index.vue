<template>
  <NuxtLayout name="vans">
    <VansIntro
      tema="light"
      titulo="Servicios Postventa y Repuestos"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/vans/servicios/servicios-postventa-y-repuestos/"
    >
    </VansIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Si das lo mejor de vos, deberías recibir el mejor servicio</h3>
        <p>Tus clientes exigen la máxima fiabilidad y calidad. Entonces, ¿por qué pedirle menos a tu vehículo? Y es que, solo cuando tu van funciona de forma fiable todos los días, tu negocio también funciona.</p>
        <p>Con el servicio postventa de Mercedes-Benz, tienes a tu lado un socio que conoce tu vehículo a la perfección y que te ayuda a seguir adelante con fiabilidad. Como fabricantes de vans, conocemos tu vehículo mejor que nadie.</p>
        <p>Gracias a la calidad Mercedes-Benz, podrás moverte con seguridad y de manera rentable.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/servicios/servicios-postventa-y-repuestos/confort.jpg"
              titulo="Confort y seguridad: el informe de servicio digital"
              descripcion="El informe digital de servicio sustituye al cuaderno de mantenimiento habitual y ofrece a tu taller autorizado Mercedes-Benz la documentación segura y precisa de todos los trabajos de servicio realizados."
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/servicios/servicios-postventa-y-repuestos/service-care.jpg"
              titulo="Mercedes-Benz ServiceCare"
              descripcion="En mantenimiento o trabajo de garantía, nuestros contratos de servicios te brindan una solución personalizada y acorde a todas tus necesidades, para que cada viaje sea predecible, sin complicaciones y libre de costos inesperados."
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/servicios/servicios-postventa-y-repuestos/garantia.jpg"
              titulo="Garantía comercial Mercedes-Benz"
              :lista="['Sprinter – 3 años sin límite de kilometraje, en los términos de las condiciones de Garantía que se entregan con el vehículo.', 'Vito – 1 año sin límite de kilometraje, en los términos de las condiciones de Garantía que se entregan con el vehículo.']"
            >
            </VansCardsCaracteristicaCard>
          </li>

          <li>
            <VansCardsCaracteristicaCard
              imagen="/images/vans/servicios/servicios-postventa-y-repuestos/repuestos.jpg"
              titulo="Repuestos originales Mercedes-Benz"
              descripcion="Los repuestos originales Mercedes-Benz concentran todo nuestro conocimiento como fabricante de vehículos: se desarrollan específicamente para los vehículos Mercedes-Benz y sus componentes, y se someten a pruebas intensivas. Porque cada vehículo se compone de miles de repuestos originales Mercedes-Benz perfectamente armonizados entre sí. De este modo, se garantiza una interacción óptima de todos los componentes del vehículo."
            >
            </VansCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <VansContactForm></VansContactForm>

    <!-- Shortcuts-->
    <!-- <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <VansCardsShortcutCard
            titulo="Accesorios"
            descripcion="Una selección de productos ideales para tu vehículo  Mercedes-Benz."
            icon="/images/vans/icons/accesories.svg"
            link="/vans/servicios/accesorios"
          >
          </VansCardsShortcutCard>

          <VansCardsShortcutCard
            titulo="Servicio técnico"
            descripcion="Contamos con profesionales experimentados y continuamente entrenados."
            icon="/images/vans/icons/service.svg"
            link="/vans/servicios/servicio-tecnico"
          >
          </VansCardsShortcutCard>
        </ul>
      </div>
    </div> -->
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/vans/resumen.css");
</style>
