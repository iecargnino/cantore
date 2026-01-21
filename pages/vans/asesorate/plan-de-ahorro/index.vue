<template>
  <NuxtLayout name="vans">
    <VansIntro
      tema="dark"
      titulo="Plan de ahorro"
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/vans/asesorate/plan-de-ahorro/"
    >
    </VansIntro>

    <div id="planAhorro">
      <div class="pageWidth">
        <h2>Nosotros</h2>
        <p class="experience">Por más de 45 años, con el respaldo y la garantía de Mercedes-Benz Argentina y Mercedes-Benz Camiones y Buses Argentina, te ofrecemos la posibilidad de acceder a la compra del vehículo que vos y tu negocio necesitan.</p>
        <div class="why">
          <h3>Por qué elegirnos:</h3>
          <ul class="benefits">
            <li>
              <img
                src="~/public/images/vans/asesorate/plan-de-ahorro/icon-45.svg"
                alt="45"
              />
              <strong>45 años en el mercado</strong> y más de 40.000 unidades entregadas.
            </li>
            <li>
              <img
                src="~/public/images/vans/asesorate/plan-de-ahorro/icon-handshake.svg"
                alt="Respaldo y garantía"
              />
              Con el <strong>respaldo y garantía</strong> de <span>Mercedes-Benz</span> Argentina y <span>Mercedes-Benz</span> Camiones y Buses Argentina.
            </li>
            <li>
              <img
                src="~/public/images/vans/asesorate/plan-de-ahorro/icon-star.svg"
                alt="Mercedes-Benz Star"
              />
              <strong>Todos los productos <span>Mercedes-Benz</span></strong
              >, sin intermediarios, sin bancos.
            </li>
            <li>
              <img
                src="~/public/images/vans/asesorate/plan-de-ahorro/icon-shield.svg"
                alt="Protección"
              />
              <strong>Protegés tus ahorros</strong> con nuestros planes.
            </li>
          </ul>

          <ul class="features">
            <li>
              <img
                src="~/public/images/vans/asesorate/plan-de-ahorro/icon-money.svg"
                alt="Pesos"
              />
              <p>
                <strong>84 cuotas en pesos y sin interés.</strong>
              </p>
            </li>
            <li>
              <img
                src="~/public/images/vans/asesorate/plan-de-ahorro/icon-key-hand.svg"
                alt="Adjudicación"
              />
              <p>Podés participar en el <strong>acto de adjudicación</strong> desde la primera cuota.</p>
            </li>
            <li>
              <img
                src="~/public/images/vans/asesorate/plan-de-ahorro/icon-money-hand.svg"
                alt="Flexibilidad"
              />
              <p><strong>Flexibilidad:</strong> podés adelantar, licitar o integrar cuotas.</p>
            </li>
            <li>
              <img
                src="~/public/images/vans/asesorate/plan-de-ahorro/icon-saving.svg"
                alt="Facilidades"
              />
              <p>Tenemos las <strong>mejores facilidades</strong> para abonar la cuota de tu plan.</p>
            </li>

            <li>
              <img
                src="~/public/images/vans/asesorate/plan-de-ahorro/icon-personalized.svg"
                alt="Atención personalizada"
              />
              <p><strong>Atención personalizada</strong> en todas las etapas del plan.</p>
            </li>
            <li>
              <img
                src="~/public/images/vans/asesorate/plan-de-ahorro/icon-transfer.svg"
                alt="Transferencia"
              />
              <p><strong>La titularidad del contrato puede ser transferida</strong> a otra persona.</p>
            </li>
          </ul>
        </div>
        <div class="cta">
          <p>Subite a tu próximo <span>Mercedes-Benz</span>, con <span>Mercedes-Benz</span> Plan de Ahorro.</p>
          <NuxtLink
            to="https://www.plandeahorro.mercedes-benz.com.ar/"
            target="blank"
            >www.plandeahorro.mercedes-benz.com.ar
            <img
              src="~/public/images/vans/icons/external.svg"
              alt=""
          /></NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/vans/plan-de-ahorro.css");
</style>
