<template>
  <header>
    <div class="pageWidth">
      <div class="mainWrapper">
        <div class="logoWrapper">
          <NuxtLink to="/camiones">
            <img
              class="star"
              src="/images/mercedes-benz_star.svg"
              alt="Mercedes-Benz Logo"
            />
            <img
              class="brand"
              src="/images/camiones/logo-mercedes-benz-camiones-y-buses.svg"
              alt="Mercedes-Benz Logo"
            />
          </NuxtLink>
        </div>
        <div class="agencyWrapper">
          <span>{{ appConfig.concesionario.razonSocial }}</span>
        </div>
      </div>
    </div>
    <div class="navWrapper">
      <div class="pageWidth">
        <button
          id="toggle-mobile"
          @click.prevent="
            $emit('toggleMenu', 'principal');
            toggleClass = !toggleClass;
          "
          class="toggleMenu"
          :class="toggleClass == true ? 'open' : ''"
        ></button>
        <nav>
          <ul>
            <li>
              <button @click.prevent="$emit('toggleMenu', 'modelos')">Modelos</button>
            </li>
            <li>
              <button @click.prevent="$emit('toggleMenu', 'financiacion')">Financiación</button>
            </li>
            <li>
              <button @click.prevent="$emit('toggleMenu', 'postventa')">Postventa</button>
            </li>
            <li>
              <button @click.prevent="$emit('toggleMenu', 'nosotros')">Nosotros</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
let toggleClass = ref(false);
</script>
