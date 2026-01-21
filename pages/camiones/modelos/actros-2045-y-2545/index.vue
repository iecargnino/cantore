<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      area="Nuestros camiones"
      titulo="Actros 2045 y 2545 ClassicSpace."
      descripcion="La fuerza de un Clásico."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/modelos/actros-2045-y-2545/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>ACTROS, LAS NUEVAS VERSIONES 2045 LS y 2545 LS CLASSICSPACE.</h3>
        <p>Los nuevos Actros 2045 LS/36 y 2545 LS/33 ClassicSpace fueron diseñados para ofrecer un rendimiento excepcional en el transporte de cargas de larga distancia. Estos modelos se destacan por su potencia, robustez y calidad, consolidándose como una alternativa renovada dentro de la familia Actros, con una operación accesible y robusta ideal para sectores como construcción, agroindustria, logística, energía y transporte de materiales peligrosos.</p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/actros-2045-y-2545/motorizacion.jpg"
              titulo="Motorización."
              descripcion="Equipados con el motor Mercedes-Benz OM 460 LA BlueTec 5, un propulsor diésel de 12,8 litros y 449 CV, los nuevos Actros aseguran un desempeño confiable y eficiente. El peso bruto total combinado (PBTC) del Actros 2545 es de hasta 60 toneladas y del Actros 2045 es de hasta 55,5 toneladas. Estos camiones están diseñados para cumplir con las exigencias del transporte de alto tonelaje, asegurando una operación económica y robusta. Además, incorporan la transmisión automatizada Mercedes PowerShift 3, nueva generación de 12 marchas que optimiza los cambios para mejorar la conducción y reducir el consumo de combustible."
            >
            </CamionesCardsCaracteristicaCard>
          </li>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/actros-2045-y-2545/eficiencia.jpg"
              titulo="Eficiencia"
              descripcion="El Actros 2045 LS/36 y 2545 LS/33 se destacan por su excepcional eficiencia en cada kilómetro recorrido. Su potente motor y avanzada tecnología de gestión del motor y transmisión garantizan una operación eficaz, reduciendo los costos operativos y maximizando la rentabilidad. Con tres modos de conducción disponibles: ECO, normal y Power, y control crucero. Además, incorpora sistemas avanzados de monitoreo y diagnóstico que alertan sobre posibles problemas antes de que se conviertan en fallas mayores, garantizando una experiencia de conducción confiable y eficiente."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/actros-2045-y-2545/seguridad.jpg"
              titulo="Seguridad."
              descripcion="En términos de seguridad, el Actros está equipado con una serie de sistemas de asistencia al conductor, como ABS, ASR, EBS y ESP, que mejoran la estabilidad y el control del vehículo. Estos sistemas, junto con el asistente de arranque en pendiente y la alerta por cansancio, están diseñados para prevenir accidentes y garantizar una conducción segura en todo momento, incluso en terrenos difíciles."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/actros-2045-y-2545/confort.jpg"
              titulo="Confort."
              descripcion="La cabina ClassicSpace es techo bajo, pensada para largas jornadas de trabajo, ofrece un amplio espacio interior, tablero analógico, cama de descanso y controles de fácil acceso, garantizando una experiencia de conducción eficiente y cómoda."
            >
            </CamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <CamionesContactForm modelo="Actros"></CamionesContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
