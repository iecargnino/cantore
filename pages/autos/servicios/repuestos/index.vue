<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="light"
      titulo="Repuestos Mercedes-Benz"
      descripcion="Para que tu Mercedes-Benz siga siendo un auténtico Mercedes-Benz."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/autos/servicios/repuestos/"
    >
    </AutosIntro>

    <section id="service">
      <div class="pageWidth">
        <div class="resume">
          <h3>El repuesto adecuado para cada Mercedes-Benz.</h3>
          <p>Tanto si necesitás un repuesto para tu Mercedes-Benz de siempre o piezas para el mantenimiento de tu vehículo nuevo. En la extensa cartera de Mercedes-Benz encontrarás la opción adecuada para cada vehículo y para cada presupuesto.</p>
          <p>Como es natural, podés estar seguro de que todos los artículos de cada una de nuestras líneas satisfacen nuestras severas exigencias.</p>
        </div>
        <AutosCardsCaracteristicaDestacadaCard
          orientacion="ltr"
          imagen="/images/autos/servicios/repuestos/piezas-originales.jpg"
          titulo="Tan nuevos como las piezas originales"
          :descripcion="['¿Utilizar únicamente piezas nuevas certificadas en tu Mercedes-Benz cuando hay que realizar el mantenimiento o si es necesario sustituir piezas de desgaste? En ese caso, te recomendamos utilizar repuestos originales Mercedes-Benz. Estos repuestos están respaldados por el know-how de Mercedes-Benz como fabricante, se desarrollan específicamente para tu modelo y se adaptan a la perfección a los demás componentes del vehículo.', 'Todas las ventajas, en síntesis:']"
          :lista="['Calidad, precisión y durabilidad excelentes', 'Probados según los estrictos requisitos de Mercedes-Benz en materia de seguridad y fiabilidad', 'Desarrollados especialmente para cada modelo de vehículo', 'Disponibilidad prácticamente inmediata en todo el mundo.']"
        >
        </AutosCardsCaracteristicaDestacadaCard>

        <AutosCardsCaracteristicaDestacadaCard
          orientacion="rtl"
          imagen="/images/autos/servicios/repuestos/mantenimiento.jpg"
          titulo="Para tu Mercedes-Benz: Mantenimiento y piezas de desgaste a precios atractivos"
          :descripcion="['Mercedes-Benz StarParts ofrece nuevas piezas de mantenimiento y de desgaste para vehículos más antiguos, especialmente desarrolladas para series de modelos seleccionadas: Mercedes-Benz StarParts se alinean con el valor actual del vehículo. Alta calidad para clientes sensibles al precio, sin comprometer la seguridad.', 'Las ventajas son:']"
          :lista="['Desarrolladas, probadas y homologadas según las especificaciones y estándares de Mercedes-Benz.', 'La mejor opción para tu Mercedes-Benz con 5 años o más de antigüedad: sugerimos comprobar disponibilidad según modelo de vehículo.', 'Cumplen los estrictos estándares de calidad y seguridad de Mercedes-Benz.']"
        >
        </AutosCardsCaracteristicaDestacadaCard>
      </div>
    </section>

    <AutosContactForm></AutosContactForm>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul class="oneItem">
          <AutosCardsShortcutCard
            titulo="Servicios y reparaciones"
            descripcion="Para que tu Mercedes-Benz siga siendo un auténtico Mercedes-Benz."
            icon="/images/autos/icons/service.svg"
            link="/autos/servicios/servicios-y-reparaciones"
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
