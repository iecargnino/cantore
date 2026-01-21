<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      tema="light"
      area="Nuestros camiones"
      titulo="Atego."
      descripcion="Robustez y versatilidad Fuera de Ruta."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/modelos/atego-todo-terreno/"
    >
    </CamionesIntro>

    <section id="resumen">
      <div class="pageWidth">
        <h3>ATEGO, AVANZAR TAMBIÉN ES DEJAR DE HACER CAMBIOS.</h3>
        <p>
          El Atego, con caja de velocidades automatizada Mercedes PowerShift de
          12 marchas.
        </p>
      </div>
    </section>

    <section id="caracteristicas">
      <div class="pageWidth">
        <ul>
          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/atego-todo-terreno/seguridad.jpg"
              titulo="Seguridad."
              :lista="[
                'ABS',
                'EBD',
                'ASR',
                'Asistente de arranque en pendiente',
              ]"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/atego-todo-terreno/confort.jpg"
              titulo="Confort."
              :lista="[
                'Asiento del conductor con suspención neumática.',
                'Control de velocidades crucerto Tempomat.',
                'Volante multifunción',
                'Espejos calefaccionados con regulación eléctrica y climatizador de techo.',
              ]"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/atego-todo-terreno/tecnologia.jpg"
              titulo="Tecnología"
              :lista="['Sistema de Gestión de Flotas Fleetboard']"
            >
            </CamionesCardsCaracteristicaCard>
          </li>

          <li>
            <CamionesCardsCaracteristicaCard
              imagen="/images/camiones/modelos/atego-todo-terreno/datos-tecnicos.jpg"
              titulo="Datos técnicos."
              :lista="[
                'Caja de velocidades automatizada Mercedes-Benz PowerShift de 12 marchas.',
                'Menor tara para maximizar la carga útil.',
                '2 modos de conducción: Eco-Roll y Power.',
              ]"
            >
            </CamionesCardsCaracteristicaCard>
          </li>
        </ul>
      </div>
    </section>

    <CamionesExternalLink
      cta="Más información en el sitio de Mercedes-Benz Camiones y Buses Argentina"
      ctaLink="https://www.mercedes-benz-trucks.com/es_AR/models/atego-fuera-de-ruta.html"
    >
    </CamionesExternalLink>

    <CamionesContactForm modelo="Atego Todo Terreno"></CamionesContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/resumen.css");
</style>
