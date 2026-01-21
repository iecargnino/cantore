<template>
  <NuxtLayout name="vans">
    <VansIntro
      tema="dark"
      titulo="Financiación"
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/vans/asesorate/financiacion/"
    >
    </VansIntro>

    <div id="financiacion">
      <div class="pageWidth">
        <div class="wrapper">
          <h2>Lorem ipsum dolor sit amet consectetur adipiscing elit.</h2>
          <p>Mauris rutrum magna quis mauris accumsan luctus. Aliquam vel venenatis metus. Pellentesque velit ante, ultrices ut ligula at, aliquam cursus massa. Mauris eget augue justo. Mauris eu lectus laoreet mauris dictum mollis. In aliquam sagittis purus et lacinia. Praesent efficitur, libero eget placerat mattis, mi felis sodales urna, nec suscipit erat sem eget mauris. Proin finibus condimentum est eu rhoncus. Mauris a nisl nec magna maximus dignissim ac eget turpis.</p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Donec vel arcu non quam tincidunt tempus eget vel nisi.</li>
            <li>Cras ut nunc quis diam gravida mattis.</li>
            <li>Nunc condimentum tellus hendrerit fringilla accumsan.</li>
            <li>Duis a erat ultricies, sodales mauris ut, blandit urna.</li>
          </ul>
        </div>
      </div>
    </div>

    <VansContactForm></VansContactForm>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/vans/financiacion.css");
</style>
