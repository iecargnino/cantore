<template>
  <NuxtLayout name="vans">
    <section id="news">
      <div class="pageWidth">
        <div class="breadcrumbs">
          <NuxtLink to="/vans/sobre-nosotros/novedades">Novedades</NuxtLink>
          <span>Novedad con video</span>
        </div>
        <div class="newsVideo">
          <h2>Novedad con video.</h2>
          <p>Sed vulputate, magna non eleifend aliquam, turpis ante sollicitudin purus, ut consequat erat lorem id turpis. Nulla eget gravida mauris, a ultricies ante.</p>
          <div class="wrapperVideo">
            <iframe
              src="https://www.youtube.com/embed/TZgaaLLQWAs?si=JpaQBjgNzKHID_BU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <VansCardsShortcutCard
            titulo="Contacto"
            descripcion="Comunicate con nosotros por diferentes vías."
            icon="/images/vans/icons/phone.svg"
            link="/vans/sobre-nosotros/contacto"
          >
          </VansCardsShortcutCard>

          <VansCardsShortcutCard
            titulo="Sucursales"
            descripcion="Te esperamos en nuestras sucursales."
            icon="/images/vans/icons/location.svg"
            link="/vans/sobre-nosotros/sucursales"
          >
          </VansCardsShortcutCard>

          <VansCardsShortcutCard
            titulo="Nuestra historia"
            descripcion="Conocé nuestra trayectoria."
            icon="/images/vans/icons/users.svg"
            link="/vans/sobre-nosotros/nuestra-historia"
          >
          </VansCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scope>
@import "~/assets/css/vans/novedades.css";
</style>
