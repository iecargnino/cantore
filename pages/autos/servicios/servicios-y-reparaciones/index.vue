<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="light"
      titulo="Servicios Mercedes-Benz"
      descripcion="Para que tu Mercedes-Benz siga siendo un auténtico Mercedes-Benz."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/servicios/servicios-y-reparaciones/"
    >
    </AutosIntro>

    <section id="service">
      <div class="pageWidth">
        <div class="resume">
          <h3>Todos los servicios</h3>
          <p>En Mercedes-Benz, nos esforzamos al máximo para ofrecerte servicios de primera clase para tu vehículo y mucho más.</p>
        </div>

        <AutosCardsCaracteristicaDestacadaCard
          orientacion="ltr"
          imagen="/images/autos/servicios/servicios-y-reparaciones/service-programado.jpg"
          titulo="Service Programado"
          :descripcion="['Tener un Mercedes-Benz es un gran plan. Cuidarlo también. ¿Por qué es importante realizar los servicios de mantenimiento cuando tu vehículo lo solicita?', 'Cada 12.000 km o cada año transcurrido, tu vehículo deberá realizar el mantenimiento preventivo. Para ello tu unidad está equipada con un indicador de intervalos de servicio (ASSYST PLUS), que te informará sobre el momento óptimo para acercarte a nuestro concesionario.', ' La realización del mantenimiento preventivo es fundamental para mantener la vida útil del vehículo y sus prestaciones, garantizando el correcto funcionamiento de los sistemas de seguridad y confort.', 'En nuestro concesionario oficial, tu vehículo va a ser atendido por técnicos especialmente capacitados que trabajan con sistemas y herramientas diseñados a medida de tu vehículo, repuestos originales y el mejor asesoramiento.']"
        >
        </AutosCardsCaracteristicaDestacadaCard>

        <h3>Tipos de mantenimiento</h3>
        <p>Realizá el mantenimiento programado de tu Mercedes-Benz cada 12.000 km o un año, lo que ocurra primero.</p>

        <div class="servicesAB">
          <AutosCardsCaracteristicaDestacadaCard
            orientacion="rtl"
            imagen="/images/autos/servicios/servicios-y-reparaciones/servicio-a.jpg"
            titulo="Servicio A"
            :descripcion="['Operaciones incluidas:']"
            :lista="['Sustitución de aceite y filtro de aceite de motor', 'Sustitución de filtro de aire de motor', 'Nivel de fluidos', 'Control de Iluminación', 'Control de frenos', 'Estado y tensión de correas', 'Revisión de tren trasero', 'Control de pérdidas de los conjuntos', 'Estado y estanqueidad de los amortiguadores', 'Chequeo computarizado de la unidad', 'Estado de neumáticos']"
          >
          </AutosCardsCaracteristicaDestacadaCard>
          <AutosCardsCaracteristicaDestacadaCard
            orientacion="rtl"
            imagen="/images/autos/servicios/servicios-y-reparaciones/servicio-b.jpg"
            titulo="Servicio B"
            :descripcion="['Operaciones incluidas:']"
            :lista="['Sustitución de aceite y filtro de aceite de motor', 'Sustitución de filtro de aire de motor', 'Nivel de fluidos', 'Control de Iluminación', 'Control de frenos', 'Estado y tensión de correas', 'Revisión de tren trasero', 'Control de pérdidas de los conjuntos', 'Estado y estanqueidad de los amortiguadores', 'Chequeo computarizado de la unidad', 'Estado de neumáticos', 'Filtro de Aire Acondicionado ']"
          >
          </AutosCardsCaracteristicaDestacadaCard>
        </div>

        <div class="servicePlusGeneric">
          <AutosCardsCaracteristicaDestacadaCard
            orientacion="ttb"
            imagen="/images/autos/servicios/servicios-y-reparaciones/service-plus.jpg"
            titulo="Service Plus"
            :descripcion="['Para que tu tranquilidad llegue tan lejos como tu Mercedes-Benz. Programa de Mantenimiento para automóviles.', '¿Qué ventajas tiene ServicePlus?']"
            :lista="['Congelamiento del precio de mantenimiento por 1 o 2 años', 'Atención a nivel nacional en toda la red de concesionarios oficiales', 'MB Assistance 24hs. durante la vigencia del contrato', 'Prioridad en la asignación de turnos', 'Calidad garantizada por Mercedes-Benz', 'Personal técnico altamente capacitado', 'Usamos todos repuestos originales']"
          >
          </AutosCardsCaracteristicaDestacadaCard>
        </div>

        <div class="servicePlus">
          <AutosCardsCaracteristicaDestacadaCard
            orientacion="ttb"
            imagen="/images/autos/servicios/servicios-y-reparaciones/service-plus-advance.jpg"
            titulo="Service Plus Advance"
            :descripcion="['ServicePlus Advance está desarrollado para atender las necesidades de cada cliente durante 2 años. El Programa incluye todas las revisiones detalladas en el cuaderno de mantenimiento del vehículo y el reemplazo de las siguientes piezas[*]:']"
            :lista="['Aceite de motor', 'Filtro de aire de motor', 'Filtro de aire acondicionado', 'Filtro de combustible', 'Bujías', 'Junta del tapón del cárter', 'Aceite de caja automática', 'Filtro de aceite de caja automática', 'Junta del cárter de caja automática', 'Líquido de frenos', 'Líquido refrigerante', 'Líquido limpiaparabrisas', 'Lubricante de techo', 'Un kit de frenos: Discos de freno delanteros y traseros, Pastillas de freno elanteras y traseras, Sensores de pastillas de frenos (un kit por contrato, sólo en caso de desgaste)']"
            nota="(*) Las piezas se reemplazarán según el intervalo de tiempo/kilometraje indicado en el cuaderno de mantenimiento."
          >
          </AutosCardsCaracteristicaDestacadaCard>

          <AutosCardsCaracteristicaDestacadaCard
            orientacion="ttb"
            imagen="/images/autos/servicios/servicios-y-reparaciones/service-plus-basic.jpg"
            titulo="Service Plus Basic"
            :descripcion="['ServicePlus Basic está desarrollado para atender las necesidades de cada cliente durante 1 año. El Programa incluye todas las revisiones detalladas en el cuaderno de mantenimiento del vehículo y el reemplazo de las siguientes piezas[*]:']"
            :lista="['Aceite de motor', 'Filtro de aire de motor', 'Filtro de aire acondicionado', 'Filtro de combustible', 'Bujías', 'Junta del tapón del cárter', 'Aceite de caja automática', 'Filtro de aceite de caja automática', 'Junta del cárter de caja automática', 'Líquido de frenos', 'Líquido refrigerante', 'Líquido limpiaparabrisas', 'Lubricante de techo']"
            nota="(*) Las piezas se reemplazarán según el intervalo de tiempo/kilometraje indicado en el cuaderno de mantenimiento."
          >
          </AutosCardsCaracteristicaDestacadaCard>
        </div>

        <AutosCardsCaracteristicaDestacadaCard
          orientacion="ltr"
          imagen="/images/autos/servicios/servicios-y-reparaciones/paint-care.jpg"
          titulo="Paint Care"
          :descripcion="['Paint Care tiene como principal responsabilidad asegurar que las  reparaciones por accidente de su vehículo se realicen bajo los lineamentos y procesos autorizados por Mercedes-Benz, con la intención de garantizar su seguridad y el correcto funcionamiento de los sistemas y componentes.', 'Sabemos la importancia de su vehículo para usted, por ello es fundamental que sea reparado con las técnicas y componentes originales que sólo Mercedes-Benz le puede ofrecer.', 'Paint Care le ofrece los siguientes servicios:']"
          :lista="['Sustitución de vidrios.', 'Pequeñas reparaciones (SmallRepair).', 'Reparaciones de carrocería y pintura en general.']"
        >
        </AutosCardsCaracteristicaDestacadaCard>
      </div>
    </section>

    <AutosContactForm origen="servicios"></AutosContactForm>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul class="oneItem">
          <AutosCardsShortcutCard
            titulo="Repuestos"
            descripcion="Accedé a repuestos originales y artículos que satisfacen nuestras severas exigencias."
            icon="/images/autos/icons/parts.svg"
            link="/autos/servicios/repuestos"
          >
          </AutosCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/autos/service.css");
</style>
