<template>
  <NuxtLayout name="camiones">
    <div id="models">
      <!-- Nuestros modelos -->
      <div class="pageWidth">
        <h2>Nuestros camiones <span v-if="appConfig.unidadesNegocio.buses">y buses</span></h2>
        <h3>Distribución y larga distancia</h3>
        <ul>
          <li>
            <CamionesCardsModeloCard
              titulo="Actros"
              etiqueta="Nuevos 2045 y 2545"
              miniatura="actros-2045-y-2545.png"
              link="/camiones/modelos/actros-2045-y-2545"
            >
            </CamionesCardsModeloCard>
          </li>
          <li>
            <CamionesCardsModeloCard
              titulo="Actros"
              miniatura="actros.png"
              link="/camiones/modelos/actros"
            >
            </CamionesCardsModeloCard>
          </li>
          <li>
            <CamionesCardsModeloCard
              titulo="Atego"
              etiqueta="Nueva generación"
              miniatura="atego.png"
              link="/camiones/modelos/atego"
            >
            </CamionesCardsModeloCard>
          </li>
          <li>
            <CamionesCardsModeloCard
              titulo="Accelo"
              etiqueta="Nueva generación"
              miniatura="accelo.png"
              link="/camiones/modelos/accelo"
            >
            </CamionesCardsModeloCard>
          </li>
        </ul>
        <h3>Todo terreno</h3>
        <ul>
          <li>
            <CamionesCardsModeloCard
              titulo="Arocs"
              miniatura="arocs.png"
              link="/camiones/modelos/arocs"
            >
            </CamionesCardsModeloCard>
          </li>
          <li>
            <CamionesCardsModeloCard
              titulo="Atego"
              miniatura="atego-todo-terreno.png"
              link="/camiones/modelos/atego-todo-terreno"
            >
            </CamionesCardsModeloCard>
          </li>
        </ul>
        <h3>Especiales</h3>
        <ul>
          <li>
            <CamionesCardsModeloCard
              titulo="Unimog U 4000/U 5000"
              miniatura="unimog.png"
              link="/camiones/modelos/unimog"
            >
            </CamionesCardsModeloCard>
          </li>
          <li>
            <CamionesCardsModeloCard
              titulo="Zetros"
              miniatura="zetros.png"
              link="/camiones/modelos/zetros"
            >
            </CamionesCardsModeloCard>
          </li>
        </ul>
        <h3 v-if="appConfig.unidadesNegocio.buses">Buses</h3>
        <ul v-if="appConfig.unidadesNegocio.buses">
          <li>
            <CamionesCardsModeloCard
              titulo="Minibuses"
              miniatura="minibuses.png"
              link="/camiones/modelos/minibuses"
            >
            </CamionesCardsModeloCard>
          </li>
          <li>
            <CamionesCardsModeloCard
              titulo="Urbanos"
              miniatura="urbanos.png"
              link="/camiones/modelos/urbanos"
            >
            </CamionesCardsModeloCard>
          </li>
          <li>
            <CamionesCardsModeloCard
              titulo="Interubanos"
              miniatura="interurbanos.png"
              link="/camiones/modelos/interurbanos"
            >
            </CamionesCardsModeloCard>
          </li>
          <li>
            <CamionesCardsModeloCard
              titulo="Larga distancia"
              miniatura="larga-distancia.png"
              link="/camiones/modelos/larga-distancia"
            >
            </CamionesCardsModeloCard>
          </li>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<style scope>
@import "~/assets/css/camiones/modelos.css";
</style>
