<template>
  <li>
    <NuxtLink :to="link">
      <h4>{{ titulo }}</h4>
      <picture>
        <img
          :src="'/images/autos/modelos/miniaturas/' + miniatura"
          :alt="titulo"
        />
        <span
          v-if="amg"
          class="amgBrand"
        >
          <img src="~/public/images/autos/modelos/amg.svg" />
        </span>
      </picture>
      <span class="more">
        <img
          src="~/public/images/autos/modelos/datasheet.svg"
          alt="Ficha técnica"
        />
        Más información
      </span>
    </NuxtLink>
  </li>
</template>

<script lang="ts">
export default defineNuxtComponent({
  props: {
    titulo: {
      type: String,
      required: true
    },
    miniatura: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    amg: {
      type: Boolean
    }
  }
});
</script>
