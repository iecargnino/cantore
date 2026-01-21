<template>
  <NuxtLayout name="vans">
    <VansIntro
      tema="dark"
      titulo="Nuestra historia"
      imagenURL="/images/vans/sobre-nosotros/nuestra-historia/"
    >
    </VansIntro>

    <section id="acerca">
      <div class="pageWidth">
        <div class="wrapper">
          <h2>Historia</h2>
          <p>Desde principios de la década de 1970, Ángel Cantore, su fundador, incansable emprendedor, vislumbró la oportunidad de emplazar en la ciudad de Rio Cuarto la concesionaria oficial de Mercedes Benz para vehículos comerciales. Desde entonces tomó la responsabilidad con compromiso y dedicación para asistir a sus clientes, con la visión de iluminar el camino de quienes confiaron y confían en Cantore S.A.</p>
        </div>
        <div id="visionMision">
          <div>
            <h3>Nuestra Visión</h3>
            <p>Representar a Mercedes Benz en la región, siempre procurando la excelencia en los servicios prestados.</p>
          </div>
          <div>
            <h3>Nuestra Misión</h3>
            <p>Venta de Vehículos Comerciales y prestación de Servicios integrales de Post-Venta, en el marco de la Responsabilidad Social Empresaria.</p>
          </div>
          <div>
            <h3>Nuestros Valores</h3>
            <p>Excelencia, Respeto, Responsabilidad y Crecimiento personal.</p>
          </div>
        </div>
        <div class="wrapper">
          <p>La Dirección de Cantore S.A. ha definido y hace conocer su política integrada para la gestión de la calidad, la seguridad laboral y el ambiente bajo los lineamientos enunciados a continuación, basados en la filosofía de la mejora continua:</p>
          <p><strong>Es política para Cantore S.A.</strong></p>
          <ul>
            <li>Satisfacer las necesidades de sus clientes ejecutando los estándares que a nivel mundial caracterizan a Mercedes-Benz, cumpliendo con los requisitos legales y otros requisitos aplicables a la actividad.</li>
            <li>Liderar la venta de vehículos 0km y la provisión de servicios de posventa (Repuestos y servicio técnico) en su zona de influencia, mostrando compromiso a la mejora continua del sistema de gestión integrado.</li>
            <li>Dotar al concesionario de la infraestructura y tecnología adecuada a la satisfacción del cliente y protección del medio ambiente incluyendo la prevención de la contaminación.</li>
            <li>Comprometernos a desarrollar nuestras actividades brindando condiciones laborales seguras y saludables para la prevención de incidentes y de enfermedades profesionales, analizando sistemáticamente nuestros procesos con el objetivo de eliminar los peligros identificados cada vez que sea posible y reducir los riesgos.</li>
            <li>Cumpliendo todas las obligaciones legales que alcancen a nuestras actividades y los requisitos asumidos ante nuestras partes interesadas.</li>
            <li>Fomentando la participación y consulta de nuestros colaboradores en el marco del Comité Mixto para la mejora de la gestión de la salud y seguridad en el trabajo.</li>
            <li>Satisfacer las necesidades de los colaboradores de la Organización, tomando como requisito básico la capacitación y motivación del personal y creando un ambiente de trabajo agradable que permita el crecimiento individual y grupal.</li>
            <li>Estrechar la relación con sus proveedores, clientes y colaboradores.</li>
          </ul>

          <p>
            <strong>La Dirección</strong><br />
            Diciembre 2023
          </p>
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

          <!-- <VansCardsShortcutCard
            titulo="Novedades"
            descripcion="Descubrí nuestras últimas novedades."
            icon="/images/vans/icons/news.svg"
            link="/vans/sobre-nosotros/novedades"
          >
          </VansCardsShortcutCard> -->
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/vans/acerca-de-nosotros.css");
</style>
