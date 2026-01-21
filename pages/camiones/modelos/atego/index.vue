<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      area="Nuestros camiones"
      titulo="Atego."
      destacado="Nueva generación."
      descripcion="Eficiencia en el transporte semipesado de cargas."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/modelos/atego/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>ATEGO, LA VERSATILIDAD DE UNA NUEVA GENERACIÓN.</h3>
        <p>Diseñados para satisfacer las necesidades del transporte semipesado. Ideales también para recorridos de media distancia en el transporte de carga general. Estos camiones se adaptan a una amplia gama de aplicaciones, desde el transporte de carga general hasta la logística especializada. Su capacidad de carga generosa y su diseño versátil lo convierten en la elección perfecta para una variedad de industrias. Con su diseño ergonómico y su rendimiento excepcionales, este vehículo es la elección perfecta para quienes buscan lo mejor en términos de transporte de carga.</p>
      </div>
    </section>

    <!-- <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/atego/seguridad.jpg"
              titulo="Seguridad."
              :lista="['ABS', 'EBD', 'ASR', 'Asistente de arranque en pendiente']"
            >
            </CamionesCamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/atego/confort.jpg"
              titulo="Confort."
              :lista="['Control de velocidades crucerto Tempomat.', 'Volante multifunción', 'Espejos calefaccionados con regulación eléctrica y climatizador de techo.']"
            >
            </CamionesCamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/atego/tecnologia.jpg"
              titulo="Tecnología"
              :lista="['Sistema de Gestión de Flotas Fleetboard']"
            >
            </CamionesCamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/atego/datos-tecnicos.jpg"
              titulo="Datos técnicos."
              :lista="['Caja de velocidades automatizada Mercedes-Benz PowerShift de 12 marchas.', '2 modos de conducción: Eco-Roll y Power.']"
            >
            </CamionesCamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section> -->

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/atego/caja-automatizada.jpg"
              titulo="Caja Automatizada"
              descripcion="Las cajas automatizadas facilitan la conducción, optimizan el consumo de combustible y se adapta automáticamente a las condiciones de la ruta, reduciendo el esfuerzo del conductor y mejorando la eficiencia operativa. En las Nuevas Generaciones de Atego, el selector de cambios se encuentra integrado a la columna de dirección, permitiendo al conductor operar el camión con mayor comodidad y agilidad."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/atego/motorzacion.jpg"
              titulo="Motorización."
              descripcion="Los motores están equipados con la tecnología exclusiva BlueTec 5 (norma de tratamiento de gases de escape Euro V), presente en toda la línea de camiones Mercedes-Benz, que reduce el nivel de emisiones. Además de la fortaleza del camión, la tecnología BlueTec 5 brinda ahorro de combustible. Las transmisiones y los ejes traseros originales de Mercedes-Benz completan el tren motriz, brindando una perfecta integración entre los componentes, priorizando el alto rendimiento mecánico, la extrema durabilidad y fiabilidad, además de la operación económica."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/atego/seguridad.jpg"
              titulo="Seguridad."
              descripcion="El Atego está equipado con una amplia gama de sistemas avanzados que garantizan una experiencia de manejo segura y confiable. Entre ellos se encuentran los frenos ABS, que evitan el bloqueo de las ruedas durante el frenado; el control de tracción ASR, que mejora la adherencia en superficies resbaladizas; el EBD (Distribución Electrónica de Frenado), que optimiza la distribución de la fuerza de frenado entre las ruedas; y la asistencia de arranque en pendientes, que facilita el inicio del movimiento en subidas."
              descripcion2="Además, la nueva generación (Atego 1721/48 - Atego 1732/42 - Atego 1932 LS/36) incorpora el sistema ESP (Programa Electrónico de Estabilidad), una tecnología que previene desvíos en la línea de marcha y mejora el control del vehículo en curvas pronunciadas o maniobras bruscas, y suma el espejo frontal, que incrementa la visibilidad del conductor y elimina puntos ciegos. Estas características hacen del Atego un vehículo preparado para enfrentar condiciones de tráfico denso o terrenos desafiantes con la máxima seguridad."
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/atego/confort.jpg"
              titulo="Confort."
              descripcion="El interior de la cabina del Atego está diseñado para maximizar la comodidad del conductor. Posee asiento neumático, control de velocidades crucero Tempomat, volante multifunción, espejos calefaccionados con regulación eléctrica y climatizador de techo en un espacio interior optimizado que aseguran una experiencia más confortable durante largas jornadas laborales."
            >
            </CamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <CamionesContactForm modelo="Atego"></CamionesContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
