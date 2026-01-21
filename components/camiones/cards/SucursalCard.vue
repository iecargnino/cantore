<template>
  <div class="map">
    <div class="wrapper">
      <iframe
        :src="sucursal.mapa"
        style="border: 0"
        allowfullscreen="false"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  <div class="content">
    <h3>{{ sucursal.nombre }}</h3>
    <p class="ubicacion">{{ sucursal.ubicacion }}</p>
    <div class="contact">
      <div>
        <img
          src="~/public/images/camiones/icons/location.svg"
          alt="Dirección"
        />
        <span>{{ sucursal.direccion }}</span>
      </div>
      <div>
        <img
          src="~/public/images/camiones/icons/phone.svg"
          alt="Teléfono"
        />
        <span>
          <NuxtLink :to="'tel:' + sucursal.telLink">{{ sucursal.telefono }}</NuxtLink>
        </span>
      </div>
      <div>
        <img
          src="~/public/images/camiones/icons/mail.svg"
          alt="Mail"
        />
        <span>
          <NuxtLink to="#">{{ sucursal.mail }}</NuxtLink>
        </span>
      </div>
      <div>
        <img
          src="~/public/images/camiones/icons/clock.svg"
          alt="Horario"
        />
        <span>
          <strong>Horario de atención</strong><br />
          {{ sucursal.horario }}
          <span v-if="sucursal.horario2"><br />{{ sucursal.horario2 }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sucursal: {
    type: Object,
    required: true
  }
});
const { sucursal } = props;
</script>
