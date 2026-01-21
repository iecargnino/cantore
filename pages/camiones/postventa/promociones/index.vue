<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      area="Postventa"
      titulo="Promociones"
      descripcion="Conocé las mejores promociones."
      cta="Realizar consulta"
      ctaLink="#contactForm"
      imagenURL="/images/camiones/postventa/promociones/"
    >
    </CamionesIntro>

    <section id="promociones">
      <div class="pageWidth">
        <ul>
          <li>
            <div
              data-aos="fade"
              data-aos-duration="800"
            >
              <picture>
                <img
                  src="~/public/images/camiones/postventa/promociones/06.jpg"
                  alt="Act. unidad de luces derecha"
                />
              </picture>
              <h2>Act. unidad de luces derecha <br /><span>A9438201561</span></h2>
            </div>
          </li>

          <li>
            <div
              data-aos="fade"
              data-aos-duration="800"
            >
              <picture>
                <img
                  src="~/public/images/camiones/postventa/promociones/05.jpg"
                  alt="Kit Filtros Aire/Aceite/Comb"
                />
              </picture>
              <h2>VS20 Unidad de luces derecha <br /><span>A4479065900</span></h2>
            </div>
          </li>

          <li>
            <div
              data-aos="fade"
              data-aos-duration="800"
            >
              <picture>
                <img
                  src="~/public/images/camiones/postventa/promociones/09.jpg"
                  alt="Faro antiniebla izquierdo"
                />
              </picture>
              <h2>NCV3 Faro antiniebla izquierdo <br /><span>A9068200856 0064</span></h2>
            </div>
          </li>

          <li>
            <div
              data-aos="fade"
              data-aos-duration="800"
            >
              <picture>
                <img
                  src="~/public/images/camiones/postventa/promociones/03.jpg"
                  alt="Faro antiniebla izquierdo"
                />
              </picture>
              <h2>Faro antiniebla izquierdo <br /><span>A9608202156 964</span></h2>
            </div>
          </li>
          <li>
            <div
              data-aos="fade"
              data-aos-duration="800"
            >
              <picture>
                <img
                  src="~/public/images/camiones/postventa/promociones/04.jpg"
                  alt="Luz trasera derecha"
                />
              </picture>
              <h2>Luz trasera derecha <br /><span>A9068201764 NCV3</span></h2>
            </div>
          </li>

          <li>
            <div
              data-aos="fade"
              data-aos-duration="800"
            >
              <picture>
                <img
                  src="~/public/images/camiones/postventa/promociones/02.jpg"
                  alt="Kit Filtros Aire/Aceite/Comb"
                />
              </picture>
              <h2>VS30 Llanta 6 radios DOB 6,5Jx16 ET54 <br /><span>A9074015200</span></h2>
            </div>
          </li>

          <li>
            <div
              data-aos="fade"
              data-aos-duration="800"
            >
              <picture>
                <img
                  src="~/public/images/camiones/postventa/promociones/01.jpg"
                  alt="Llanta aleación 6,5JX16"
                />
              </picture>
              <h2>Llanta aleación 6,5JX16 <br /><span>A0004017104 3</span></h2>
            </div>
          </li>

          <li>
            <div
              data-aos="fade"
              data-aos-duration="800"
            >
              <picture>
                <img
                  src="~/public/images/camiones/postventa/promociones/07.jpg"
                  alt="Kit Filtros Aire/Aceite/Comb"
                />
              </picture>
              <h2>Kit Filtros Aire/Aceite/Comb <br /><span>A6510107829 VS30</span></h2>
            </div>
          </li>

          <li>
            <div
              data-aos="fade"
              data-aos-duration="800"
            >
              <picture>
                <img
                  src="~/public/images/camiones/postventa/promociones/08.jpg"
                  alt="Kit Filtros Aire/Aceite/Comb"
                />
              </picture>
              <h2>VS30 Kit Filtros OM654 Aire/Aceite/Comb <br /><span>A6540104115</span></h2>
            </div>
          </li>

          <!-- <li>
            <div
              data-aos="fade"
              data-aos-duration="800"
            >
              <picture>
                <img
                  src="~/public/images/camiones/postventa/promociones/kit_embrague.jpg"
                  alt="Kit Embrague Axor"
                />
              </picture>
              <h2>Kit Embrague Axor</h2>
              <p class="price">$3.010.000 con IVA</p>
              <p class="valid">Válido hasta el 30/4/2025</p>
            </div>
          </li> -->
        </ul>
      </div>
    </section>

    <CamionesContactForm></CamionesContactForm>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <CamionesCardsShortcutCard
            titulo="Repuestos y accesorios"
            icon="/images/camiones/icons/parts.svg"
            link="/camiones/postventa/repuestos-y-accesorios"
          >
          </CamionesCardsShortcutCard>

          <CamionesCardsShortcutCard
            titulo="Servicio técnico"
            icon="/images/camiones/icons/service.svg"
            link="/camiones/postventa/servicio-tecnico"
          >
          </CamionesCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/camiones/promociones.css");
</style>
