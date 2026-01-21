<template>
  <NuxtLayout name="autos">
    <AutosIntro
      tema="light"
      titulo="Nuestros asesores"
      imagenURL="/images/autos/asesorate/nuestros-asesores/"
    >
    </AutosIntro>

    <section id="asesores">
      <div class="pageWidth">
        <ul>
          <!-- Asesor comercial -->
          <AutosCardsAsesorComercialCard
            nombre="Nombre Apellido"
            cargo="Cargo"
            mail="mail@concesionario.com.ar"
            telefono="+54 11 1234-5678"
            telLink="+541112345678"
            zona="Sucursal, localidad"
          >
          </AutosCardsAsesorComercialCard>

          <!-- Asesor comercial -->
          <AutosCardsAsesorComercialCard
            nombre="Nombre Apellido"
            cargo="Cargo"
            mail="mail@concesionario.com.ar"
            telefono="+54 11 1234-5678"
            telLink="+541112345678"
            zona="Sucursal, localidad"
          >
          </AutosCardsAsesorComercialCard>

          <!-- Asesor comercial -->
          <AutosCardsAsesorComercialCard
            nombre="Nombre Apellido"
            cargo="Cargo"
            mail="mail@concesionario.com.ar"
            telefono="+54 11 1234-5678"
            telLink="+541112345678"
            zona="Sucursal, localidad"
          >
          </AutosCardsAsesorComercialCard>

          <!-- Asesor comercial -->
          <AutosCardsAsesorComercialCard
            nombre="Nombre Apellido"
            cargo="Cargo"
            mail="mail@concesionario.com.ar"
            telefono="+54 11 1234-5678"
            telLink="+541112345678"
            zona="Sucursal, localidad"
          >
          </AutosCardsAsesorComercialCard>

          <!-- Asesor comercial -->
          <AutosCardsAsesorComercialCard
            nombre="Nombre Apellido"
            cargo="Cargo"
            mail="mail@concesionario.com.ar"
            telefono="+54 11 1234-5678"
            telLink="+541112345678"
            zona="Sucursal, localidad"
          >
          </AutosCardsAsesorComercialCard>
        </ul>
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
            link="enlace"
          >
          </AutosCardsShortcutCard>

          <AutosCardsShortcutCard
            titulo="Realizar consulta"
            descripcion="Enviá tu consulta y te responderemos a la brevedad."
            icon="/images/autos/icons/mail.svg"
            link="enlace"
          >
          </AutosCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/autos/resumen.css");
@import url("~/assets/css/autos/nuestros-asesores.css");
</style>
