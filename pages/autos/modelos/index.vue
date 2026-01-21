<template>
  <NuxtLayout name="autos">
    <!-- Modelos -->
    <div id="models">
      <div class="pageWidth">
        <h2>Nuestros modelos</h2>
        <div class="mainList">
          <div class="vehicles">
            <!-- Sedán -->
            <div
              v-if="
                lista.filter((obj) => {
                  return obj.segmento === 'Sedán';
                }).length > 0
              "
              id="sedan"
              class="group"
            >
              <h3>Sedán</h3>
              <ul>
                <li
                  v-for="item in lista.filter((obj) => {
                    return obj.segmento === 'Sedán';
                  })"
                  :key="item.miniatura"
                >
                  <AutosCardsModeloCard
                    :titulo="item.titulo"
                    :miniatura="item.miniatura"
                    :link="item.link"
                    :amg="item.amg"
                  >
                  </AutosCardsModeloCard>
                </li>
              </ul>
            </div>

            <!-- SUV & Todoterreno -->
            <div
              v-if="
                lista.filter((obj) => {
                  return obj.segmento === 'SUV & Todoterreno';
                }).length > 0
              "
              id="suv"
              class="group"
            >
              <h3>SUV & Todoterreno</h3>
              <ul>
                <li
                  v-for="item in lista.filter((obj) => {
                    return obj.segmento === 'SUV & Todoterreno';
                  })"
                  :key="item.miniatura"
                >
                  <AutosCardsModeloCard
                    :titulo="item.titulo"
                    :miniatura="item.miniatura"
                    :link="item.link"
                    :amg="item.amg"
                  >
                  </AutosCardsModeloCard>
                </li>
              </ul>
            </div>

            <!-- Hatchback -->
            <div
              v-if="
                lista.filter((obj) => {
                  return obj.segmento === 'Hatchback';
                }).length > 0
              "
              id="hatchback"
              class="group"
            >
              <h3>Hatchback</h3>
              <ul>
                <li
                  v-for="item in lista.filter((obj) => {
                    return obj.segmento === 'Hatchback';
                  })"
                  :key="item.miniatura"
                >
                  <AutosCardsModeloCard
                    :titulo="item.titulo"
                    :miniatura="item.miniatura"
                    :link="item.link"
                    :amg="item.amg"
                  >
                  </AutosCardsModeloCard>
                </li>
              </ul>
            </div>

            <!-- Coupés -->
            <div
              v-if="
                lista.filter((obj) => {
                  return obj.segmento === 'Coupés';
                }).length > 0
              "
              id="coupes"
              class="group"
            >
              <h3>Coupés</h3>
              <ul>
                <li
                  v-for="item in lista.filter((obj) => {
                    return obj.segmento === 'Coupés';
                  })"
                  :key="item.miniatura"
                >
                  <AutosCardsModeloCard
                    :titulo="item.titulo"
                    :miniatura="item.miniatura"
                    :link="item.link"
                    :amg="item.amg"
                  >
                  </AutosCardsModeloCard>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AutosLegal></AutosLegal>
  </NuxtLayout>
</template>

<style scope>
@import "~/assets/css/autos/modelos.css";
</style>

<script setup lang="ts">
const route = useRoute();

let lista: Array<any> = [];

const autos = [
  {
    segmento: "Sedán",
    titulo: "Clase A Sedán",
    miniatura: "clase-a-sedan.png",
    link: "/autos/modelos/clase-a-sedan",
    amg: false,
    electric: false,
  },
  {
    segmento: "Sedán",
    titulo: "Clase A Sedán",
    miniatura: "clase-a-sedan-amg.png",
    link: "/autos/modelos/clase-a-sedan-amg",
    amg: true,
    electric: false,
  },
  {
    segmento: "Sedán",
    titulo: "Clase C Sedán",
    miniatura: "clase-c-sedan.png",
    link: "/autos/modelos/clase-c-sedan",
    amg: false,
    electric: false,
  },
  {
    segmento: "Sedán",
    titulo: "Clase S",
    miniatura: "clase-s.png",
    link: "/autos/modelos/clase-s",
    amg: false,
  },

  {
    segmento: "SUV & Todoterreno",
    titulo: "EQA",
    miniatura: "eqa.png",
    link: "/autos/modelos/eqa",
    amg: false,
    electric: true,
  },
  {
    segmento: "SUV & Todoterreno",
    titulo: "GLA",
    miniatura: "gla.png",
    link: "/autos/modelos/gla",
    amg: false,
    electric: false,
  },
  {
    segmento: "SUV & Todoterreno",
    titulo: "GLB",
    miniatura: "glb.png",
    link: "/autos/modelos/glb",
    amg: false,
    electric: false,
  },
  {
    segmento: "SUV & Todoterreno",
    titulo: "GLC",
    miniatura: "glc.png",
    link: "/autos/modelos/glc",
    amg: false,
    electric: false,
  },
  {
    segmento: "SUV & Todoterreno",
    titulo: "GLC Coupé",
    miniatura: "glc-coupe.png",
    link: "/autos/modelos/glc-coupe",
    amg: false,
    electric: false,
  },
  {
    segmento: "SUV & Todoterreno",
    titulo: "GLE",
    miniatura: "gle.png",
    link: "/autos/modelos/gle",
    amg: false,
    electric: false,
  },
  {
    segmento: "SUV & Todoterreno",
    titulo: "GLE Coupé",
    miniatura: "gle-coupe.png",
    link: "/autos/modelos/gle-coupe",
    amg: true,
    electric: false,
  },
  {
    segmento: "SUV & Todoterreno",
    titulo: "Clase G",
    miniatura: "clase-g.png",
    link: "/autos/modelos/clase-g",
    amg: false,
    electric: false,
  },

  {
    segmento: "Hatchback",
    titulo: "Clase A Hatchback",
    miniatura: "clase-a-hatchback.png",
    link: "/autos/modelos/clase-a-hatchback",
    amg: false,
    electric: false,
  },
  {
    segmento: "Hatchback",
    titulo: "Clase A Hatchback",
    miniatura: "clase-a-hatchback-amg.png",
    link: "/autos/modelos/clase-a-hatchback-amg",
    amg: true,
    electric: false,
  },

  {
    segmento: "Coupés",
    titulo: "Clase E Coupé",
    miniatura: "clase-e-coupe.png",
    link: "/autos/modelos/clase-e-coupe",
    amg: true,
    electric: false,
  },
];

onBeforeMount(async () => {
  if (route.query.filter === "electric") {
    lista = autos.filter((obj) => {
      return obj.electric === true;
    });
    return;
  }

  if (route.query.filter === "amg") {
    lista = autos.filter((obj) => {
      return obj.amg === true;
    });
    return;
  }

  lista = autos;
});
</script>
