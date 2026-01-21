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
            <p>Simple, rápido y conveniente</p>
            <h3>Turnos online</h3>
            <NuxtLink
              to="https://www.mercedes-benz.com.ar/vans/services/online-appointment.html"
              class="btn"
              target="_blank"
              >Más información
              <img
                src="~/public/images/vans/icons/external_white.svg"
                alt="Abrir en pestaña nueva"
            /></NuxtLink>
          </div>

          <div class="fadeVertical"></div>
          <picture>
            <img
              src="~/public/images/vans/home/recomendaciones/turnos-online.jpg"
              alt="Turnos online"
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
            <p>Llamado de vehículos al taller</p>
            <h3>Recall de Takata</h3>
            <NuxtLink
              to="https://www.mercedes-benz.com.ar/vans/services/recalls.html"
              class="btn"
              target="_blank"
              >Más información
              <img
                src="~/public/images/vans/icons/external_white.svg"
                alt="Abrir en pestaña nueva"
            /></NuxtLink>
          </div>

          <div class="fadeVertical"></div>
          <picture>
            <img
              src="~/public/images/vans/home/recomendaciones/recall-de-takata.jpg"
              alt="Recall de Takata"
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
            <p>Confianza para tu negocio</p>
            <h3>Servicio Postventa y Repuestos Originales</h3>
            <NuxtLink
              to="https://www.mercedes-benz.com.ar/vans/services/genuine-parts.html"
              class="btn"
              target="_blank"
              >Más información
              <img
                src="~/public/images/vans/icons/external_white.svg"
                alt="Abrir en pestaña nueva"
            /></NuxtLink>
          </div>

          <div class="fadeVertical"></div>
          <picture>
            <img
              src="~/public/images/vans/home/recomendaciones/servicio-postventa.jpg"
              alt="Servicio Postventa y Repuestos Originales"
            />
          </picture>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scope>
@import "~/assets/css/vans/recomendaciones.css";
</style>
