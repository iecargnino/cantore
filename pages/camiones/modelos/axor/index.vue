<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      tema="dark"
      area="Nuestros camiones"
      titulo="Axor."
      descripcion="El de siempre, como nunca."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/modelos/axor/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>POTENCIA Y VERSATILIDAD PARA EL TRANSPORTE PESADO.
</h3>
        <p>Los nuevos Axor se consolidan como la solución ideal para quienes buscan un equilibrio perfecto entre capacidad de carga, bajos costos operativos y un confort excepcional. Diseñados para enfrentar las exigencias de la media y larga distancia. Los nuevos Axor 2038 y 2545 ofrecen robustez mecánica con la inteligencia tecnológica que el transporte eficiente requiere.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/axor/motorizacion.jpg"
              titulo="Motorización y eficiencia."
              descripcion="Equipados con el legendario motor Mercedes-Benz OM 460 LA, reconocido por su durabilidad y entrega de potencia eficiente. Ambos de transmisión avanzada con la caja automatizada Powershift 3 Advanced de 12 marchas, que optimiza el consumo de combustible y reduce el desgaste de los componentes mediante cambios de marcha precisos.
El Axor 2038 entrega 380 CV y un torque de 1.900 Nm, ideal para operaciones ágiles y versátiles.
El Axor 2545 se destaca con 449 CV y un impresionante torque de 2.200 Nm, diseñado para cargas más pesadas y terrenos exigentes.">
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/axor/seguridad.jpg"
              titulo="Seguridad de vanguardia."
              descripcion="La seguridad no es un opcional. Tanto el Axor 2038 como el 2545 cuentan con un paquete de asistencia al conductor de última generación:"
              :lista="[
    'Sistemas activos: ABS, EBD (Distribución electrónica de frenado) y ASR (Control de tracción).',
    'Estabilidad y frenado: equipados con ESP (Control de estabilidad) y EBS (Sistema electrónico de frenado).',
    'Asistencia en pendientes: el sistema HSA facilita el arranque en subidas, evitando que el camión retroceda.'
  ]"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/axor/confort.jpg"
              titulo="Confort al volante."
              descripcion="El habitáculo del Axor está pensado como un puesto de trabajo ergonómico y un espacio de descanso reparador.
El Axor 2038 cuenta con cabina dormitorio ClassicSpace techo bajo, volante multifunción, espejos calefaccionados con regulación eléctrica y asiento de cuero sintético neumático regulable. Disponible en versiones tractor y chasis rígido.
El Axor 2545 con cabina dormitorio BigSpace techo elevado, ofreciendo mayor libertad de movimiento para viajes largos, volante multifunción, espejos eléctricos y asiento neumático regulable tapizado en tela.

Ambos cuentan con control de velocidad crucero Tempomat y el eficaz freno motor Top Brake."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/axor/tecnologia.jpg"
              titulo="Tecnología y Gestión de flotas."
              descripcion="Ambos modelos vienen equipados con el sistema de gestión de flotas Fleetboard, que permite monitorear el desempeño del vehículo en tiempo real, reducir el consumo de combustible y optimizar los intervalos de mantenimiento.
La gestión de datos permite a los transportistas tomar decisiones informadas para maximizar la rentabilidad de cada kilómetro recorrido."
            >
            </CamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <CamionesContactForm modelo="Axor"></CamionesContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
