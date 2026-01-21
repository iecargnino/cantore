<h2 align="center">
  <a href="https://bshouse.io">
    <img src="https://www.bshouse.io/bshouse-animation-wide.gif" alt="Logo" width="200" height="125">
  </a>
</h2>

# Template del sitio de concesionarios de Mercedes-Benz Argentina Autos, Vans, Camiones y Buses.

<div align="center">
<br />

Desarrollado por [Boutique Software House](https://bshouse.io).
<br />
Para reportar un Bug, solicitar una nueva funcionalidad o buscar soporte, escribir un correo a la siguiente dirección:<a href="mailto:concesionarios@bshouse.io"> concesionarios@bshouse.io </a>

</div>

## Requerimientos

- Node.js 20x - https://nodejs.org/en/download/package-manager

## Instalación

Asegurarse siempre de tener instaladas las dependencias con el siguiente comando:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Iniciar la versión en modo Desarrollo local en: `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Producción

Para generar el paquete de archivos finales de producción y subir al web server:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Se puede hacer una previsualización del paquete a subir en producción con el siguiente comando:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

---

## Datos del concesionario

En el archivo [app.config.ts](app.config.ts) se definen los datos generales del Concesionario:

- Razón social
- Links a redes sociales
- Sucursales
- Unidades de negocio
- Información legal

<strong> Es importante entender que cualquier modificacion al archivo debe ser generada una nueva version de la web (npm run build) y subida al servidor para que pueda tomar efecto el cambio.
</strong>

---

## Configuración de Pilot

En el mismo archivo [app.config.ts](app.config.ts) se definen los datos de conexión con Pilot del Concesionario en la sección llamada: "Pilot"

- appkey: es el valor unico que identifica al concesionario en Pilot
- action: create es fijo
- Por unidad de negocio:
  - pilot_contact_type_id: "1",
  - pilot_business_type_id: "6",
  - pilot_suborigin_id: "FI0FA5R2CNBO5HSSG",
  - pilot_notes: "Formulario de Contacto del sitio institucional",

---

## Menú principal (Encabezado)

Los ítems que conforman el menú principal se definen en la constante "menus":
[Autos](layouts/autos.vue)
[Vans](layouts/vans.vue)
[Camiones](layouts/camiones.vue)

En menuList es posible definir cada ítem del menú (nombre y link).

Los ítems que se presentan dentro del menú "Modelos" se definen en:
[Autos](components/autos/menus/PrimerNivelAutosMenu.vue)
[Vans](components/vans/menus/PrimerNivelVansMenu.vue)
[Camiones](components/camiones/menus/PrimerNivelCamionesMenu.vue)

---

## Slider inicial

La página home de cada sitio presenta un slider inicial que puede personalizarse en:
[Autos](components/autos/IntroSlider.vue)
[Vans](components/vans/IntroSlider.vue)
[Camiones](components/camiones/IntroSlider.vue)

Los slides de cada slider se definen dentro las etiquetas
<SplideSlide></SplideSlide>

Se puede elegir en entre 2 opciones de color incluyendo las clases "light" o "dark"
Ej: <SplideSlide class="light"></SplideSlide>

Se debe incluir 3 tamaños de imágenes para usar en diferentes dispositivos:

Escritorio (intro.jpg):
[1800 x 800px](public/images/documentacion/autos-y-vans/intro.jpg)

Tablet (intro-t.jpg):
[1200 x 800px](public/images/documentacion/autos-y-vans/intro-t.jpg)

Móvil (intro-m.jpg):
[800 x 800px](public/images/documentacion/autos-y-vans/intro-m.jpg)

Hay que considerar que los títulos y textos de cada slide se muestran sobre las imágenes,
por este motivo es conveniente encuadrar las fotos dentro del "área segura" como se observa en los ejemplos anteriores.

---

## Nuestras recomendaciones (Autos y Vans) / Productos destacados (Camiones)

[Autos](components/autos/cards/Recomendaciones.vue)
[Vans](components/vans/cards/Recomendaciones.vue)
[Camiones](components/camiones/cards/Recomendaciones.vue)

AUTOS y VANS presentan 3 recomendaciones cada uno.
Cada recomendación está compuesta por:
-Imagen vertical de 433 x 770 px
-Claim
-Título
-Link

CAMIONES presenta 4 recomendaciones.
Cada recomendación está compuesta por:
-Imagen horizontal de 768 x 432 px
-Título
-Descripción
-Link

---

## Modelos

En Autos los modelos están definidos en la constante "autos":
[Autos](pages/autos/modelos/index.vue)

En Vans y Camiones los modelos están definidos en cada <li>
[Vans](components/vans/Descubri.vue)
[Camiones](pages/camiones/modelos/index.vue)

---

## Información de cada modelo y páginas internas

Las páginas con información de cada modelo están definidas dentro de carpetas nombradas como el modelo:
[Autos](pages/autos/modelos/NOMBRE-DEL-MODELO/index.vue)
[Vans](pages/vans/modelos/NOMBRE-DEL-MODELO/index.vue)
[Camiones](pages/camiones/modelos/NOMBRE-DEL-MODELO/index.vue)

Las páginas internas están definidas dentro de carpetas nombradas como la sección y el tema:
[Autos](autos/SECCION/TEMA/index.vue)
[Vans](vans/SECCION/TEMA/index.vue)
[Camiones](camiones/SECCION/TEMA/index.vue)

### Imagen principal

Cada página tiene una imagen principal que junto con el título funciona como introducción:

#### Autos y Vans

En Autos y Vans se debe proveer 3 tamaños de imagen:

Escritorio (intro.jpg):
[1800 x 800px](public/images/documentacion/autos-y-vans/intro.jpg)

Tablet (intro-t.jpg):
[1200 x 800px](public/images/documentacion/autos-y-vans/intro-t.jpg)

Móvil (intro-m.jpg):
[800 x 800px](public/images/documentacion/autos-y-vans/intro-m.jpg)

Hay que considerar que los tíulos de las páginas se muestran sobre las imágenes,
por este motivo es conveniente encuadrar las fotos dentro del "área segura" como se observa en los ejemplos anteriores.

La ruta en donde se buscarán las imágenes está definida en los componentes <AutosIntro> y <VansIntro> en el parámetro "imagenURL".
Se debe especificar las ubicación de la carpeta que contiene las 3 imágenes ("intro.jpg", "intro-t.jpg", "intro-m.jpg").
Adicionalmente es posible definir la variante de color del tema ("light" o "dark").

#### Camiones

En Camiones se debe proveer 2 tamaños de imagen:

Escritorio (intro.jpg):
[1680 x 560px](public/images/documentacion/camiones/intro.jpg)

Tablet y Móvil (intro-m.jpg):
[768 x 432px](public/images/documentacion/camiones/intro-m.jpg)

En la versión de escritorio se debe oscurecer el sector izquierdo de la imagen para mejorar la legibilidad de los títulos que se muestras sobre la imagen, como se observa en el ejemplo anterior.
En la versión Tablet y Móvil los textos se muestran por afuera de la imagen, por lo tanto no es necesario oscurcer ningún sector.

La ruta en donde se buscarán las imágenes está definida en los componentes <CamionesIntro> en el parámetro "imagenURL".
Se debe especificar las ubicación de la carpeta que contiene las 2 imágenes ("intro.jpg", "intro-t.jpg").

### Imagen para característica

Cada modelo y página interna cuenta con imágenes ilustrativas para presentar las características:

#### Autos y Vans

En Autos y Vans se debe proveer 1 tamaño de imagen:

Característica:
[1280 x 720px](public/images/documentacion/autos-y-vans/caracteristica.jpg)

La ruta en donde se buscarán las imágenes está definida en los componentes <AutosCardsCaracteristicaCard> y <VansCardsCaracteristicaCard> en el parámetro "imagen".

Se debe especificar la ruta completa de la imagen JPG.

#### Camiones

En Camiones se debe proveer 1 tamaño de imagen:

Característica:
[1396 x 782px](public/images/documentacion/camiones/caracteristica.jpg)

La ruta en donde se buscarán las imágenes está definida en los componentes <CamionesCardsCaracteristicaCard> en el parámetro "imagen".

Se debe especificar la ruta completa de la imagen jpg.

---

## Nuestros asesores (Autos y Vans) / Asesores comerciales (Camiones)

[Autos](pages/autos/asesorate/nuestros-asesores/index.vue)
[Vans](pages/vans/asesorate/nuestros-asesores/index.vue)
[Camiones](pages/camiones/nosotros/asesores-comerciales/index.vue)

Los asesores se definen en pasando valores en:
AUTOS: <AutosCardsAsesorComercialCard>
VANS: <VansCardsAsesorComercialCard>
CAMIONES: <CamionesCardsAsesorComercialCard>

---

## Novedades

El índice con las novedades se define en:

[Autos](pages/autos/sobre-nosotros/novedades/index.vue)
[Vans](pages/vans/sobre-nosotros/novedades/index.vue)
[Camiones](pages/camiones/nosotros/novedades/index.vue)

Se debe usar imágenes horizontales de 710 x 400 px

### Novedad - Texto

Novedad compuestas por:
-Título
-Textos
-Imagen ilustrativa 1100 x 620 px

Se provee una página para usar como modelo:
[Autos](pages/autos/sobre-nosotros/novedades/detalle-texto/index.vue)
[Vans](pages/vans/sobre-nosotros/novedades/detalle-texto/index.vue)
[Camiones](pages/camiones/nosotros/novedades/detalle-texto/index.vue)

### Novedad - Galería de fotos

Novedad compuestas por:
-Título
-Descripción
-Selección de imágenes de 1400 x 788 px

Se provee una página para usar como modelo:
[Autos](pages/autos/sobre-nosotros/novedades/detalle-fotos/index.vue)
[Vans](pages/vans/sobre-nosotros/novedades/detalle-fotos/index.vue)
[Camiones](pages/camiones/nosotros/novedades/detalle-fotos/index.vue)

Las imágenes se deben cargar dentro de cada etiqueta:
<SplideSlide> <img> </SplideSlide>

### Novedad - Video

Novedad compuestas por:
-Título
-Descripción
-Video

Se provee una página para usar como modelo:
[Autos](pages/autos/sobre-nosotros/novedades/detalle-video/index.vue)
[Vans](pages/vans/sobre-nosotros/novedades/detalle-video/index.vue)
[Camiones](pages/camiones/nosotros/novedades/detalle-video/index.vue)

El video se debe cargar dentro la etiqueta:

<div class="wrapperVideo"> </div>

---
