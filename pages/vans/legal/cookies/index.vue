<template>
  <NuxtLayout name="vans">
    <section id="legal">
      <div class="pageWidth">
        <div class="wrapper">
          <h2>Cookies</h2>
          <p>{{ appConfig.legales.razonSocial }} utiliza cookies para poder conocer las preferencias de los visitantes y así poder optimizar la presentación de las páginas web. Las cookies son pequeños archivos que se almacenan temporalmente en su disco duro. La información contenida en las cookies facilita la navegación y hace posible que el usuario alcance un alto grado de satisfacción al visitar una página web. Asimismo, las cookies nos ayudan a identificar las secciones más populares de nuestra oferta en Internet. De esta forma podemos adaptar a sus necesidades los contenidos de nuestra página web de un modo más preciso y, por tanto, mejorar nuestras ofertas para usted. Las cookies también resultan útiles a la hora de averiguar si ya se ha producido previamente una comunicación entre su ordenador y nuestra página. Se identifica únicamente el cookie en su ordenador. Los datos relacionados con su persona sólo se almacenarán en forma de cookies si usted lo permite (por ejemplo, para simplificar el acceso a un sitio protegido en Internet, de tal forma que usted no deba introducir su ID de usuario y su contraseña cada vez que entra.)</p>
          <p>Naturalmente, también puede visitar nuestra página web sin cookies. La mayoría de los browsers aceptan cookies de forma automática. Usted podrá evitar el almacenamiento de cookies en su disco duro mediante la elección en su configuración del browser del comando *No aceptar cookies*. Podrá obtener información más detallada de las instrucciones de su fabricante de browsers. Puede eliminar las cookies que ya estén almacenadas en su ordenador en cualquier momento. El hecho de no aceptar cookies podrá suponer una limitación de las funciones de nuestras ofertas.</p>
          <p>Para la finalidad de realizar análisis estadísticos, {{ appConfig.legales.razonSocial }} colabora con socios selectos (entre otros, Google, Facebook y Salesforce). Si usted no desea que {{ appConfig.legales.razonSocial }} recolecte y analice datos estadísticos de su visita, usted puede objetar la utilización futura de sus datos personales en cualquier momento (opt-out).</p>
          <p>Para la implementación técnica de su objeción es necesario instalar en su navegador una cookie de opt-out. Esta cookie sólo le indicará que usted ha ejercido su derecho de opt-out. Por favor tenga en cuenta que por razones técnicas, la cookie de opt-out sólo afectará el navegador desde el cual usted realiza la objeción. Por lo tanto, si usted elimina las cookies de su navegador o utiliza un dispositivo o navegador diferente respectivamente, usted deberá ejercer nuevamente el opt-out.</p>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<style>
@import url("~/assets/css/vans/legal.css");
</style>
