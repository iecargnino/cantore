<template>
  <div id="descubri">
    <!-- Descubrí todos nuestros modelos. -->
    <div class="pageWidth">
      <h2>Descubrí todos nuestros modelos.</h2>
      <ul>
        <!-- Card -->
        <li>
          <NuxtLink
            to="/autos/modelos#sedan"
            class="content"
          >
            <p>Más información sobre</p>
            <h4>Sedán</h4>

            <picture>
              <img
                src="~/public/images/autos/home/descubri/sedan.png"
                alt="Sedán"
              />
            </picture>
          </NuxtLink>
        </li>
        <!-- Card -->
        <li>
          <NuxtLink
            :to="{ path: '/autos/modelos', hash: '#suv' }"
            class="content"
          >
            <p>Más información sobre</p>
            <h4>SUV & Todoterreno</h4>

            <picture>
              <img
                src="~/public/images/autos/home/descubri/suv.png"
                alt="SUV & Todoterreno"
              />
            </picture>
          </NuxtLink>
        </li>
        <!-- Card -->
        <li>
          <NuxtLink
            to="/autos/modelos#hatchback"
            class="content"
          >
            <p>Más información sobre</p>
            <h4>Hatchback</h4>

            <picture>
              <img
                src="~/public/images/autos/home/descubri/hatchback.png"
                alt="Hatchback"
              />
            </picture>
          </NuxtLink>
        </li>
        <!-- Card -->
        <li>
          <NuxtLink
            to="/autos/modelos#coupes"
            class="content"
          >
            <p>Más información sobre</p>
            <h4>Coupé</h4>

            <picture>
              <img
                src="~/public/images/autos/home/descubri/coupe.png"
                alt="Coupé"
              />
            </picture>
          </NuxtLink>
        </li>
        <!-- Card -->
        <li>
          <NuxtLink
            to="/autos/modelos#cabriolet"
            class="content"
          >
            <p>Más información sobre</p>
            <h4>Cabriolets & Roadster</h4>

            <picture>
              <img
                src="~/public/images/autos/home/descubri/cabriolet.png"
                alt="Cabriolets & Roadster"
              />
            </picture>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scope>
@import "~/assets/css/autos/descubri.css";
</style>
