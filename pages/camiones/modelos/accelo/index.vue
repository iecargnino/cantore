<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      area="Nuestros camiones"
      titulo="Accelo."
      destacado="Nueva generación."
      descripcion="La agilidad de una nueva generación."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/modelos/accelo/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>Accelo, la agilidad de una nueva generación.</h3>
        <p>Los Accelo 916/39 y Accelo 1116/39 fueron diseñados para ofrecer mayor capacidad de carga, eficiencia y una experiencia de conducción optimizada. Ambos de producción nacional.</p>
        <p>Su diseño incluye una parrilla frontal negra que unifica su identidad visual con la nueva línea Actros L y eActros 600 Alemanes, un guiño a modelos icónicos como el L1114 y el L608. Ideales para el transporte de distribución y logística urbana.</p>
        <p>El Accelo 1116/39, con una capacidad de 11 toneladas, se posiciona como uno de los más pesados de su categoría, ampliando su versatilidad y capacidad de carga. Por su parte, el Accelo 916/39 mantiene su liderazgo como una opción ideal para la distribución urbana, gracias a su excelente relación entre capacidad de carga y maniobrabilidad.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/accelo/motorizacion.jpg"
              titulo="Motorización."
              descripcion="Con Motores OM 924 LA BlueTec 5, que destacan por su combinación de potencia y eficiencia en el consumo de combustible. El Accelo 1116/39 cuenta con transmisión automatizada Mercedes PowerShift, que reduce el esfuerzo del conductor y optimiza el rendimiento, especialmente en recorridos urbanos y de media distancia."
              descripcion2="El tren motriz es un diferenciador de la línea de camiones Accelo. Está equipado con un motor Mercedes-Benz extremadamente robusto y eficiente de 4,8 litros y 156 CV de potencia (utilizado en vehículos de hasta 17 toneladas), de fácil mantenimiento y bajo costo de reparación."
              descripcion3="Estos motores cuentan con la exclusiva tecnología BlueTec 5 (Euro V), que asegura un bajo nivel de emisiones contaminantes y menor consumo de combustible. Así, el Accelo siempre ha tenido el mejor consumo de su categoría, con una diferencia de 10 a 15% menos que otros modelos del mercado. Aún en lo que respecta al tren motriz, el embrague con asistencia neumática reduce en un 45% el esfuerzo del conductor sobre el pedal, lo que se traduce en comodidad, practicidad y productividad al conducir el Camión."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/accelo/seguridad.jpg"
              titulo="Seguridad."
              descripcion="El Accelo es un Camión muy versátil por sus múltiples posibilidades de carrozado, esto le permite desplazarse en calzadas reducidas, irregulares y adaptarse a diversas necesidades, desde distribución de bebidas hasta servicios de emergencia. Ya que su uso no se limita exclusivamente a la ciudad, cuenta con numerosos sistemas de seguridad:"
              :lista="['ABS: sistema antibloqueo de frenos.', 'EBD: distribución electrónica de frenado.', 'ASR: control de tracción.', 'Asistente de arranque en pendiente.', 'ESP: programa electrónico de estabilidad.']"
              descripcion2="Esta generación incorpora el sistema ESP (Programa Electrónico de Estabilidad), una tecnología que previene desvíos en la línea de marcha y mejora el control del vehículo en curvas pronunciadas o maniobras bruscas. A esto se suma el espejo frontal, diseñado para aumentar la visibilidad del conductor y eliminar puntos ciegos, optimizando la seguridad en entornos urbanos."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/accelo/confort.jpg"
              titulo="Confort."
              descripcion="El Accelo ofrece al transportista excelente desempeño y agilidad en el reparto urbano, sin dejar de lado el confort. El interior de la cabina fue diseñado para mejorar la experiencia del conductor, ofreciendo mayor visibilidad y un entorno optimizado para las largas jornadas laborales."
              descripcion2="La Nueva Generación ofrece además al transportista el asiento de conductor neumático, que absorbe posibles vibraciones y golpes en terrenos irregulares, adaptándose a las condiciones variables de rutas o carreteras. Este tipo de asiento permite ajustar la altura y la firmeza del asiento según las preferencias del usuario o las condiciones del terreno."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/accelo/tecnologia.jpg"
              titulo="Tecnología"
              descripcion="La Nueva Generación de Accelo cuenta con el Sistema de Gestión de Flotas, Fleetboard. Este es el sistema de adquisición de datos disponible a través de internet, que utilizando servicios de telemática permite la comunicación permanente entre el vehículo y la central del usuario, brindando el acceso a los datos técnicos del vehículo en tiempo real."
              descripcion2="Para tener una gestión rentable de su empresa es indispensable optimizar sus costos. Fleetboard le ayudará a gestionar eficientemente su flota teniendo en cuenta el ciclo de vida útil del vehículo, el consumo de combustible, el mantenimiento de las unidades y los conductores."
            >
            </CamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <!-- <CamionesExternalLink
      cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
      ctaLink="https://www.mercedes-benz-trucks.com/es_AR/models/accelo.html"
    >
    </CamionesExternalLink> -->

    <CamionesContactForm></CamionesContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
