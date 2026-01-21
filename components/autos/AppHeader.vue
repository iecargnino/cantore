<template>
  <header>
    <div class="pageWidth">
      <div class="mainWrapper">
        <div class="navWrapper">
          <button id="toggle-mobile" @click.prevent="$emit('toggleMenu', 'principal'); toggleClass = !toggleClass"
            class="toggleMenu" :class="(toggleClass == true) ? 'open' : ''">
          </button>
          <nav>
            <ul>
              <li>
                <button @click.prevent="$emit('toggleMenu', 'modelos')">Modelos</button>
              </li>
              <li>
                <button @click.prevent="$emit('toggleMenu', 'asesorate')">Asesorate</button>
              </li>
              <li>
                <button @click.prevent="$emit('toggleMenu', 'servicios')">Servicios</button>
              </li>
              <li>
                <button @click.prevent="$emit('toggleMenu', 'nosotros')">Sobre Nosotros</button>
              </li>
            </ul>
          </nav>
        </div>
        <div class="logoWrapper">
          <NuxtLink to="/autos">
            <img class="star" src="/images/mercedes-benz_star.svg" alt="Mercedes-Benz Logo" />
          </NuxtLink>
        </div>
        <div class="agencyWrapper">
          <span>{{ appConfig.concesionario.razonSocial }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
let toggleClass = ref(false);
</script>
