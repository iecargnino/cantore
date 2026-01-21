<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="dark"
      titulo="Nuestra historia"
      imagenURL="/images/autos/sobre-nosotros/nuestra-historia/"
    >
    </AutosIntro>

    <section id="acerca">
      <div class="pageWidth">
        <div class="wrapper">
          <h2>Historia</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate viverra orci sed gravida. Pellentesque convallis sagittis diam vel mattis. In posuere eleifend justo, eu condimentum risus aliquet eu. Suspendisse porttitor magna sed congue vehicula. Morbi mollis libero est, aliquet dignissim nunc interdum ut. Sed pellentesque tincidunt neque, vitae ornare nulla maximus eget. Sed eget orci et dui molestie pellentesque. Etiam porttitor mauris id cursus posuere. Donec sit amet turpis justo. Sed id rhoncus lectus. Aliquam mauris ex, semper ac erat sit amet, semper lobortis ipsum. Duis lectus velit, placerat quis odio id, rhoncus vehicula urna. Praesent ac feugiat libero. Nulla tempor sodales orci, consectetur sollicitudin nisi pulvinar nec. Fusce vitae ligula vitae sem gravida rhoncus sed eu massa. Sed sodales, diam sit amet eleifend efficitur, nisi urna pretium massa, in dictum quam enim in nibh.</p>
          <p>Praesent fringilla ultrices congue. Mauris suscipit vulputate tortor, et vehicula dui placerat non. Curabitur vitae lectus et nunc congue dictum non condimentum justo. Mauris eu elit ut orci auctor tristique sed ac urna. Vestibulum molestie tristique erat, vitae posuere risus cursus et. Donec eget diam at ante facilisis ultrices id vitae nunc. Aliquam erat volutpat. Sed sit amet volutpat libero. Integer malesuada ac turpis maximus mollis. Sed vulputate risus eros. Suspendisse sit amet porttitor felis.</p>
          <p>Vestibulum luctus ultrices mauris, vitae feugiat eros venenatis a. Integer commodo neque sit amet leo aliquam, nec suscipit leo scelerisque. Praesent ultricies dictum fringilla. Nunc pretium vulputate auctor. Nam libero neque, ornare a est a, rhoncus accumsan purus. Praesent eu aliquam nisi. Pellentesque non risus tincidunt, condimentum leo in, suscipit diam. Aenean posuere sed nibh id pellentesque.</p>
          <ul>
            <li>Vivamus condimentum lectus sit amet sem vulputate, egestas tristique erat accumsan.</li>
            <li>Vestibulum eleifend orci sit amet euismod consectetur.</li>
            <li>Donec tincidunt nisl a eleifend gravida.</li>
            <li>Proin fermentum metus et sem commodo auctor.</li>
          </ul>

          <p>Fusce eu molestie purus, blandit laoreet lacus. Quisque ac erat semper nisl mattis facilisis et sed leo. Suspendisse magna libero, bibendum et eleifend eget, sodales ac tortor. Curabitur viverra massa sapien, at finibus turpis interdum eget. Phasellus nec massa sem. Quisque a turpis eleifend, elementum quam non, scelerisque massa. Mauris tempor elementum enim sed tempor. Etiam vestibulum magna orci, sit amet efficitur libero cursus in. Ut ac justo blandit sapien sollicitudin scelerisque vel eget ipsum. Donec volutpat est risus, nec vestibulum ligula tempor in.</p>
        </div>
      </div>
    </section>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <AutosCardsShortcutCard
            titulo="Contacto"
            descripcion="Comunicate con nosotros por diferentes vías."
            icon="/images/autos/icons/phone.svg"
            link="/autos/sobre-nosotros/contacto"
          >
          </AutosCardsShortcutCard>

          <AutosCardsShortcutCard
            titulo="Sucursales"
            descripcion="Te esperamos en nuestras sucursales."
            icon="/images/autos/icons/location.svg"
            link="/autos/sobre-nosotros/sucursales"
          >
          </AutosCardsShortcutCard>

          <AutosCardsShortcutCard
            titulo="Novedades"
            descripcion="Descubrí nuestras últimas novedades."
            icon="/images/autos/icons/news.svg"
            link="/autos/sobre-nosotros/novedades"
          >
          </AutosCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/autos/acerca-de-nosotros.css");
</style>
