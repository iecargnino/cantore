<template>
  <div id="home">
    <SelectorAppHeader></SelectorAppHeader>
    <slot></slot>
    <SelectorAppFooter></SelectorAppFooter>
  </div>
</template>
<script setup lang="ts">
import "~/assets/css/selector/header.css";
import "~/assets/css/selector/footer.css";
import "~/assets/css/selector/home.css";
import "~/assets/css/selector/global.css";

useHead({
  bodyAttrs: {
    id: "selector"
  }
});
</script>
