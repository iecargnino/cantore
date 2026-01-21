<template>
  <NuxtLayout name="camiones">
    <section id="news">
      <div class="pageWidth">
        <div class="breadcrumbs">
          <NuxtLink to="/camiones/nosotros/novedades">Novedades</NuxtLink>
          <span>Novedad con texto</span>
        </div>
        <h2>Vestibulum molestie tristique erat, vitae posuere risus cursus et.</h2>
        <div class="newsText">
          <picture>
            <img
              src="~/public/images/camiones/nosotros/novedades/novedad-texto.jpg"
              alt="Vestibulum molestie tristique erat, vitae posuere risus cursus et."
            />
          </picture>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate viverra orci sed gravida. Pellentesque convallis sagittis diam vel mattis. In posuere eleifend justo, eu condimentum risus aliquet eu. Suspendisse porttitor magna sed congue vehicula. Morbi mollis libero est, aliquet dignissim nunc interdum ut. Sed pellentesque tincidunt neque, vitae ornare nulla maximus eget. Sed eget orci et dui molestie pellentesque. Etiam porttitor mauris id cursus posuere. Donec sit amet turpis justo. Sed id rhoncus lectus. Aliquam mauris ex, semper ac erat sit amet, semper lobortis ipsum. Duis lectus velit, placerat quis odio id, rhoncus vehicula urna. Praesent ac feugiat libero. Nulla tempor sodales orci, consectetur sollicitudin nisi pulvinar nec. Fusce vitae ligula vitae sem gravida rhoncus sed eu massa. Sed sodales, diam sit amet eleifend efficitur, nisi urna pretium massa, in dictum quam enim in nibh.</p>
          <p>Praesent fringilla ultrices congue. Mauris suscipit vulputate tortor, et vehicula dui placerat non. Curabitur vitae lectus et nunc congue dictum non condimentum justo. Mauris eu elit ut orci auctor tristique sed ac urna. Vestibulum molestie tristique erat, vitae posuere risus cursus et. Donec eget diam at ante facilisis ultrices id vitae nunc. Aliquam erat volutpat. Sed sit amet volutpat libero. Integer malesuada ac turpis maximus mollis. Sed vulputate risus eros. Suspendisse sit amet porttitor felis.</p>
          <p>Vestibulum luctus ultrices mauris, vitae feugiat eros venenatis a. Integer commodo neque sit amet leo aliquam, nec suscipit leo scelerisque. Praesent ultricies dictum fringilla. Nunc pretium vulputate auctor. Nam libero neque, ornare a est a, rhoncus accumsan purus. Praesent eu aliquam nisi. Pellentesque non risus tincidunt, condimentum leo in, suscipit diam. Aenean posuere sed nibh id pellentesque.</p>
          <p>Nunc felis sem, egestas quis suscipit quis, mollis fermentum sem. Nullam interdum massa id ipsum fringilla luctus. Vestibulum vel nisi urna. Aliquam non nisl nulla. Nam in pretium tortor, vitae dictum diam. Maecenas ullamcorper feugiat velit. Suspendisse enim quam, congue ut tincidunt et, feugiat eget turpis. Sed vulputate, magna non eleifend aliquam, turpis ante sollicitudin purus, ut consequat erat lorem id turpis. Nulla eget gravida mauris, a ultricies ante. Suspendisse auctor risus eu mauris rutrum, sit amet eleifend neque hendrerit. Proin a tellus a urna pulvinar varius non quis odio. Ut eget felis risus.</p>
          <p>Fusce eu molestie purus, blandit laoreet lacus. Quisque ac erat semper nisl mattis facilisis et sed leo. Suspendisse magna libero, bibendum et eleifend eget, sodales ac tortor. Curabitur viverra massa sapien, at finibus turpis interdum eget. Phasellus nec massa sem. Quisque a turpis eleifend, elementum quam non, scelerisque massa. Mauris tempor elementum enim sed tempor. Etiam vestibulum magna orci, sit amet efficitur libero cursus in. Ut ac justo blandit sapien sollicitudin scelerisque vel eget ipsum. Donec volutpat est risus, nec vestibulum ligula tempor in.</p>
        </div>
      </div>
    </section>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <CamionesCardsShortcutCard
            titulo="Contacto"
            icon="/images/camiones/icons/phone.svg"
            link="enlace"
          >
          </CamionesCardsShortcutCard>

          <CamionesCardsShortcutCard
            titulo="Realizar consulta"
            icon="/images/camiones/icons/mail.svg"
            link="enlace"
          >
          </CamionesCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scope>
@import "~/assets/css/camiones/novedades.css";
</style>
