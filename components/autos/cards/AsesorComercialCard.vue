<template>
  <li
    data-aos="fade"
    data-aos-duration="800"
  >
    <h3>
      {{ nombre }}
      <span v-if="cargo">{{ cargo }}</span>
    </h3>
    <div v-if="mail">
      <img
        src="~/public/images/autos/icons/mail.svg"
        alt="Mail"
      />
      <span
        ><NuxtLink :to="'mailto:' + mail"> {{ mail }}</NuxtLink>
      </span>
    </div>
    <div v-if="telefono">
      <img
        src="~/public/images/autos/icons/phone.svg"
        alt="Teléfono"
      />
      <span
        ><NuxtLink :to="'tel:' + telLink">{{ telefono }}</NuxtLink>
      </span>
    </div>
    <div v-if="zona">
      <img
        src="~/public/images/autos/icons/location.svg"
        alt="Dirección"
      /><span>{{ zona }}</span>
    </div>
  </li>
</template>

<script lang="ts">
import { defineNuxtComponent } from "#app";

export default defineNuxtComponent({
  props: {
    nombre: {
      type: String,
      required: true
    },
    cargo: {
      type: String
    },
    mail: {
      type: String
    },
    telefono: {
      type: String
    },
    telLink: {
      type: String
    },
    zona: {
      type: String
    }
  }
});
</script>
