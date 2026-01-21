<template>
  <div id="recomendaciones">
    <!-- Recomendaciones -->
    <div class="pageWidth">
      <h2>Nuestras recomendaciones.</h2>
      <ul>
        <!-- Card -->
        <li
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <div class="content">
            <p>Bienvenido a tu zona de confort.</p>
            <h3>Clase C</h3>
            <NuxtLink
              to="/autos/modelos/clase-c-sedan"
              class="btn"
              >Más información</NuxtLink
            >
          </div>

          <div class="fadeVertical"></div>
          <picture>
            <img
              src="~/public/images/autos/home/cards/clase-c.jpg"
              alt="Clase C"
            />
          </picture>
        </li>
        <!-- Card -->
        <li
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <div class="content">
            <p>Cargada de expresión</p>
            <h3>Nueva GLC Coupé</h3>
            <NuxtLink
              to="/autos/modelos/glc-coupe"
              class="btn"
              >Más información</NuxtLink
            >
          </div>

          <div class="fadeVertical"></div>
          <picture>
            <img
              src="~/public/images/autos/home/cards/glc-coupe.jpg"
              alt="GLC Coupé"
            />
          </picture>
        </li>
        <!-- Card -->
        <li
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="400"
        >
          <div class="content">
            <p>Todos los tipos de fuerza.</p>
            <h3>GLC</h3>
            <NuxtLink
              to="/autos/modelos/glc"
              class="btn"
              >Más información</NuxtLink
            >
          </div>

          <div class="fadeVertical"></div>
          <picture>
            <img
              src="~/public/images/autos/home/cards/glc.jpg"
              alt="GLC"
            />
          </picture>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scope>
@import "~/assets/css/autos/recomendaciones.css";
</style>
