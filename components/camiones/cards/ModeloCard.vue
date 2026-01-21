<template>
  <picture>
    <img
      :src="'/images/camiones/modelos/miniaturas/' + miniatura"
      :alt="titulo"
    />
  </picture>
  <div class="content">
    <h3>
      {{ titulo }}
      <span
        v-if="etiqueta"
        class="tag"
        >{{ etiqueta }}</span
      >
    </h3>
    <NuxtLink :to="link"><span>Más información</span></NuxtLink>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  props: {
    titulo: {
      type: String,
      required: true
    },
    etiqueta: {
      type: String,
      required: false
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
