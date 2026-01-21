<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      area="Postventa"
      titulo="Repuestos Mercedes-Benz"
      descripcion=""
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/postventa/repuestos-y-accesorios/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Repuestos genuinos, calidad y durabilidad garantizadas.</h3>
        <p>Cada pieza original Mercedes‑Benz cumple nuestros elevados estándares de calidad. Ya que se ha desarrollado especialmente para nuestros vehículos. Para ello, realizamos numerosas pruebas conforme a las estrictas y precisas especificaciones del fabricante y a un perfeccionamiento continuo. El ajuste preciso garantiza un montaje sencillo de todas las piezas en tu camión sin necesidad de trabajos de repaso, así como una sustitución sin problemas de las piezas de desgaste. Garantía, capacidad de suministro a largo plazo y tiempos de reaprovisionamiento cortos: esa es nuestra promesa de calidad para vos.</p>
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
              imagen="/images/camiones/postventa/repuestos-y-accesorios/repuestos.jpg"
              titulo="Repuestos geniunios."
              descripcion="Cada pieza original Mercedes‑Benz cumple nuestros elevados estándares de calidad. Ya que se ha desarrollado especialmente para nuestros vehículos. Para ello, realizamos numerosas pruebas conforme a las estrictas y precisas especificaciones del fabricante y a un perfeccionamiento continuo. El ajuste preciso garantiza un montaje sencillo de todas las piezas en tu camión sin necesidad de trabajos de repaso, así como una sustitución sin problemas de las piezas de desgaste. Garantía, capacidad de suministro a largo plazo y tiempos de reaprovisionamiento cortos: esa es nuestra promesa de calidad para vos."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/postventa/repuestos-y-accesorios/reman.jpg"
              titulo="REMAN: piezas genuinas remanufacturadas."
              descripcion="Los motores y cajas de cambios genuinos remanufacturados Mercedes-Benz son una propuesta muy conveniente. Una solución de reparación económicamente flexible para sus camiones Mercedes-Benz. Todas las Piezas Genuinas Remanufacturadas tienen algo en común: bajan sus costos sin comprometer la calidad probada y comprobada de Mercedes-Benz."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/postventa/repuestos-y-accesorios/accesorios.jpg"
              titulo="Accesorios"
              descripcion="Accesorios a medida para que disfrutes de una mayor seguridad, confort y puedas agregar un toque individual a tu vehículo."
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
            titulo="Servicio técnico"
            icon="/images/camiones/icons/service.svg"
            link="/camiones/postventa/servicio-tecnico"
          >
          </CamionesCardsShortcutCard>

          <CamionesCardsShortcutCard
            titulo="Servicios"
            icon="/images/camiones/icons/accesories.svg"
            link="/camiones/postventa/servicios"
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
