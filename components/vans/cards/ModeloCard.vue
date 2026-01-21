<template>
  <picture>
    <img
      :src="'/images/vans/modelos/miniaturas/' + miniatura"
      :alt="titulo"
    />
  </picture>
  <div class="content">
    <h3>{{ titulo }}</h3>
    <h4>{{ modelo }}</h4>
    <NuxtLink :to="link">Más información</NuxtLink>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  props: {
    titulo: {
      type: String,
      required: true
    },
    modelo: {
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
    }
  }
});
</script>
