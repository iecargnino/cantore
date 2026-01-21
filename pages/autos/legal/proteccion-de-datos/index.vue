<template>
  <NuxtLayout name="autos">
    <section id="legal">
      <div class="pageWidth">
        <div class="wrapper">
          <h2>Protección de datos</h2>
          <p>Responsable del tratamiento de datos conforme al Reglamento General de Protección de Datos (RGPD), salvo que en lo sucesivo se indique lo contrario:</p>
          <p>Responsable de la protección de datos del grupo</p>
          <p>Delegado de Protección de Datos:</p>
          <p>
            <strong>{{ appConfig.legales.razonSocial }}</strong
            ><br />
            <!-- <strong>{{ appConfig.legales.responsableDataProtection }}</strong
            ><br /> -->
            <strong>{{ appConfig.legales.domicilio }}</strong
            ><br />
            <strong
              ><NuxtLink :to="'mailto:' + appConfig.legales.email"> {{ appConfig.legales.email }}</NuxtLink></strong
            >
          </p>

          <h3>1. Protección de datos</h3>
          <p>Nos alegra que haya decidido visitar nuestras páginas web y le agradecemos su interés en nuestras ofertas. Nos tomamos muy en serio la protección de sus datos personales. En estas Indicaciones sobre protección de datos explicamos el modo en que recopilamos sus datos personales, qué hacemos con ellos, con qué fines, sobre qué fundamentos legales, así como sus derechos y obligaciones vinculados a ello. Asimismo, nos remitimos a la Directriz de protección de datos de {{ appConfig.legales.razonSocial }}.</p>
          <!-- <p v-if="appConfig.legales.linkDirectrizProteccionDeDatos">
            <NuxtLink
              :to="appConfig.legales.linkDirectrizProteccionDeDatos"
              target="_blank"
              >Directriz de protección de datos</NuxtLink
            >
          </p> -->
          <p>Nuestras Indicaciones sobre protección de datos para el uso de nuestras páginas web y la Directriz sobre protección de datos de {{ appConfig.legales.razonSocial }} no se aplican a las actividades que usted realice en las páginas web de las redes sociales u otros proveedores, a los que usted puede acceder a través de los enlaces contenidos en nuestras páginas web. En las páginas web de estos proveedores puede informarse acerca de sus disposiciones de protección de datos.</p>

          <h3>2. Obtención y tratamiento de datos personales</h3>
          <p>a. Cuando usted visita nuestras páginas web, memorizamos determinadas informaciones acerca del navegador y el sistema operativo que utiliza en su dispositivo, la fecha y la hora de su visita, el resultado del intento de acceso (por ejemplo, si ha podido abrir una página web, o si ha obtenido un aviso de avería), el uso de las funciones de la página web, los términos de búsqueda que ha introducido en su caso, la frecuencia con la que abre determinadas páginas web, el nombre de los ficheros solicitados, el volumen de datos transmitido, la página web desde la que ha accedido a nuestras páginas web y la página web que visita desde nuestras páginas web, sea haciendo clic en enlaces contenidos en nuestras páginas o especificando directamente el dominio en el campo de entrada de la misma pestaña (o bien de la misma ventanilla) de su navegador en la que ha abierto nuestras páginas web. Además, por motivos de seguridad, especialmente para prevenir y reconocer ataques a nuestras páginas web o intentos de fraude, memorizamos durante siete días su dirección IP y el nombre de su proveedor de Internet.</p>
          <p>b. Almacenamos otros datos personales solamente si usted nos comunica dichos datos; por ejemplo, en el marco de un registro, al cumplimentar un formulario de datos de contacto, un chat, en relación con una encuesta o un concurso, o para la conclusión de un contrato y, en estos casos, memorizamos los datos solamente si usted otorga su consentimiento o si lo exigen así las disposiciones legales vigentes (véase la sección 7).</p>
          <p>c. Usted no está obligado por ley ni contractualmente a cedernos sus datos personales. Por otro lado, es posible que determinadas funciones de nuestras páginas web dependan de la cesión de datos personales. En esos casos, si no desea cedernos sus datos personales, es posible que no pueda utilizar determinadas funciones, o que estas solo estén disponibles de forma limitada.</p>

          <h3>3. Uso previsto</h3>
          <p>a. Utilizamos los datos personales obtenidos durante una visita a nuestras páginas web para operar estas páginas de tal modo que resulten confortables para los visitantes, y para proteger nuestros sistemas informáticos de ataques y otras acciones ilegales.</p>
          <p>b. En la medida en que usted nos comunique otros datos personales, por ejemplo, en el marco de un registro, en un chat, un formulario de datos de contacto, en relación con una encuesta o un concurso, o para la conclusión de un contrato, utilizamos estos datos para el uso mencionado, para tareas de administración de clientes y, si resulta necesario, para la tramitación y la liquidación de transacciones comerciales, y solamente en la medida en que sea necesario.</p>
          <p>c. Para otros fines (por ejemplo, mostrar contenidos o publicidad personalizados basados en su comportamiento de uso), usamos sus datos y, si es necesario, también ciertos terceros, siempre que haya dado su consentimiento en nuestra plataforma de gestión de consentimiento (= autorización). <NuxtLink to="/autos/legal/cookies">Encontrará más información y opciones aquí</NuxtLink></p>
          <p>d. Además, utilizamos datos personales en la medida en que estemos obligados a ello (por ejemplo, almacenamiento para cumplir las obligaciones de almacenamiento legales o comerciales, publicación según las disposiciones administrativas o judiciales, por ejemplo, a los cuerpos de seguridad).</p>

          <h3>4. Transmisión de datos personales a terceros; social Plug-ins; uso de proveedores de servicios</h3>
          <p>a. Nuestras páginas web pueden contener también ofertas de terceros. Si hace clic en una oferta de este tipo, transferimos datos al proveedor correspondiente en la medida necesaria (por ejemplo, la indicación de que usted ha encontrado esta oferta en nuestras páginas y, en su caso, otras informaciones que usted haya comunicado para este fin en nuestras páginas web).</p>
          <p>b. Si utilizamos en nuestras páginas web los llamados «social plug-ins» de redes sociales tales como Facebook y Twitter, los integramos como se explica a continuación:</p>
          <p>Los plug-ins están desactivados por defecto durante su visita a nuestras páginas web; es decir, no se envían datos de ningún tipo a los operadores de estas redes sociales. Si desea utilizar una de las redes sociales, haga clic en el social plug-in correspondiente para establecer una conexión directa con el servidor de la red social.</p>
          <p>Si dispone de una cuenta de usuario en la red social y hay una sesión abierta en esta red en el momento de activar el social plug-in, la red social puede vincular su visita a nuestra página web con su cuenta de usuario. Si quiere evitar que se establezca este vínculo, cierre la sesión en la red social antes de activar el social plug-in. Una red social no puede establecer vínculos con su visita a otras páginas web de Mercedes-Benz, a no ser que usted haya activado el social plug-in correspondiente también en dichas páginas.</p>
          <p>Si activa un social plug-in, la red transfiere directamente los contenidos disponibles a su navegador, que las vincula a nuestras páginas web. En esta situación pueden tener lugar transmisión de datos, iniciadas y controladas por la red social correspondiente. En relación con su conexión con una red social, la transmisión de datos entre la red social y su sistema y las interacciones en esta plataforma se aplican exclusivamente las disposiciones de protección de datos de la red social correspondiente.</p>
          <p>El social plug-in se mantiene activo hasta que usted lo desactive o borre sus cookies (véase la sección 5.d).</p>
          <p>c. Si hace clic en el enlace a una oferta, o si activa un social plug-in, es posible que sus datos personales se transmitan a países situados fuera del Espacio Económico Europeo, en los que, desde la perspectiva legal de la Unión Europea («UE»), no pueda asegurarse un «nivel adecuado de protección» equiparable a los estándares de la Unión Europea en el tratamiento de datos personales. Los mismo puede ocurrir si está establecido en Argentina, y sus datos personales se trasmitan a países que no garanticen un «nivel adecuado de protección» de conformidad con la legislación Argentina. Tenga en cuenta esta circunstancia antes de hacer clic en un enlace o activar un social plug-in que suponga una transmisión de sus datos.</p>
          <p>d. Utilizamos proveedores cualificados para el funcionamiento, la optimización y la protección de nuestras páginas web (por ejemplo, proveedores de tecnologías informáticas, agencias de marketing). Solo transferimos datos personales a dichos proveedores en la medida en que sea necesario para la puesta a disposición y el uso de las páginas web y sus funcionalidades, la satisfacción de intereses legítimos, el cumplimiento de obligaciones contractuales o en la medida en que usted haya dado su consentimiento (véase la sección 7). <NuxtLink to="/autos/legal/cookies">Encontrará más datos sobre los destinatarios en nuestro sistema de gestión de consentimiento.</NuxtLink></p>

          <h3>5. Cookies</h3>
          <p>a. Visitar nuestras páginas web puede implicar el uso de cookies. Desde el punto de vista técnico, se trata de cookies HTML y herramientas de software similares como Web/DOM Storage o Local Shared Objects (llamadas «flash-cookies»), que denominamos cookies en conjunto.</p>
          <p>b. Las cookies son pequeños archivos que se crean en su ordenador de escritorio, ordenador portátil o dispositivo móvil al visitar una página web. A partir de ellos podemos detectar si ya existe una vinculación entre el dispositivo y nuestras páginas web, tener en cuenta su idioma preferido u otros ajustes, ofrecerle funcionalidades particulares para usted (por ejemplo, la tienda online, el configurador de vehículos) o detectar sus intereses basados en el uso. Las cookies también pueden contener datos personales.</p>
          <p>c. El hecho de que se utilicen cookies y qué cookies se utilizan depende de qué áreas y funciones de nuestra página web utilice, y si autoriza el uso de cookies no necesarias técnicamente en nuestro sistema de gestión de consentimiento. <NuxtLink to="/autos/legal/cookies">Encontrará más datos sobre los destinatarios en nuestro sistema de gestión de consentimiento.</NuxtLink></p>
          <p>d. El uso de cookies depende también de los ajustes del navegador web que utilice (por ejemplo, Microsoft Edge, Google Chrome, Apple Safari, Mozilla Firefox). La mayoría de navegadores web están preconfigurados para aceptar determinados tipos de cookies automáticamente; la mayoría de las veces puede modificar esta configuración. Puede eliminar en todo momento las cookies que ya estén memorizadas en su dispositivo. Puede borrar el web/DOM-Storage y los Local Shared Objects por separado. En las instrucciones del fabricante de su navegador o dispositivo encontrará la forma concreta de cambiar la configuración.</p>
          <p>e. El consentimiento (= autorización) y el rechazo o la eliminación de las cookies dependen del dispositivo y del navegador web utilizado. Si utiliza varios dispositivos o navegadores web, puede realizar distintos ajustes en cada uno.</p>
          <p>f. Si decide rechazar el uso de cookies o borrarlas, es posible que no pueda hacer uso de todas las funciones de nuestras páginas web, o que algunas funciones solo estén disponibles de forma limitada.</p>

          <h3>6. Seguridad</h3>
          <p>Adoptamos medidas de seguridad de carácter técnico y organizativo para proteger los datos que gestionamos y para evitar su manipulación, pérdida, destrucción y el acceso de personas no autorizadas. Mejoramos continuamente nuestras medidas de seguridad de acuerdo con el desarrollo tecnológico.</p>

          <h3>7. Base legal para el tratamiento de datos</h3>
          <p>a. Si usted está establecido en Argentina, la base legal para el procesamiento de sus datos personales será su consentimiento expreso, libre e informado, y serán procesados únicamente para los fines para los cuales fueron recolectados.</p>

          <h3>8. Supresión de sus datos de datos personales</h3>
          <p>Su dirección IP y el nombre de su proveedor de servicios de Inter-net se almacenan únicamente por motivos de seguridad y se borran al cabo de siete días. Por lo demás, suprimimos sus datos personales en el momento en que expira el motivo para el que hemos obtenido y procesado sus datos. Pasado ese periodo, solo se almacenan los datos en la medida en que sea necesario en cumplimiento de las leyes, los reglamentos u otras normas legales a las que estamos sometidos en Argentina, o en cumplimiento de las normas legales de países terceros, en caso de que exista un nivel de protección de datos adecuado. En caso de que, en un caso específico, no sea posible eliminar los datos personales, dichos datos se marcarán con el objetivo de limitar su tratamiento futuro.</p>

          <h3>9. Derechos de los interesados</h3>
          <p>a. Si nos ha otorgado usted su consentimiento al tratamiento de sus datos personales, tiene derecho a retirar en todo momento este consentimiento del interesado. El retiro del consentimiento no afecta a la legitimidad del tratamiento de sus datos de datos personales hasta la fecha de retiro. Tampoco afecta al posterior tratamiento de estos datos sobre una base legal diferente como, por ejemplo, para el cumplimiento de obligaciones legales (ver el apartado «Base legal para el tratamiento de datos»).</p>
          <p>b. Derecho de oposición<br />Tiene derecho a oponerse al tratamiento de los datos personales que le conciernen en cualquier momento y por razones que se deriven de su situación particular, de conformidad con el art. 6, párrafo 1 e) del RGPD (tratamiento de datos de interés público) o el art. 6, párrafo 1 f) del RGPD (tratamiento de datos basado en una ponderación de intereses). Si se opone a este tratamiento, sus datos de datos personales se someten a tratamiento solamente si podemos acreditar motivos que justifiquen el tratamiento y que prevalezcan frente a sus intereses, sus derechos y sus libertades, o bien si el tratamiento de datos tiene como fin hacer valer, ejercer o defender títulos legales. En la medida en que tratamos sus datos personales para gestionar publicidad directa con el objetivo de satisfacer intereses legítimos a partir de la ponderación de los intereses, tiene derecho también a oponerse a ello sin necesidad de dar razones.</p>
          <p>
            c. Le rogamos que, en la medida de lo posible, dirija sus exigencias o declaraciones a la dirección de contacto siguiente: <NuxtLink :to="'mailto:' + appConfig.legales.email"> {{ appConfig.legales.email }}</NuxtLink>
          </p>
          <p>d. Adicionalmente a los derechos recién enumerados, bajo ciertas circunstancias, como interesado Usted tendrá el derecho a:</p>
          <ul>
            <li>Requerir el acceso a los datos personales que recopilemos de Usted (artículo 14 de la Ley 25.326);</li>
            <li>Requerir que rectifiquemos los datos personales que recopilamos sobre Usted (artículo 16 de la Ley 25.326);</li>
            <li>Requerir que actualicemos los datos personales que recopilamos de Usted (artículo 16 de la Ley 25.326);</li>
            <li>Requerir que eliminemos los datos personales que recopilemos de Usted (incluyendo los casos en los que nuestra actividad de procesamiento se basa en su consentimiento) (artículo 16 de la Ley 25.326);</li>
          </ul>

          <p>
            Asimismo, el titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326, el cual podrá ser ejercido enviando un mail <NuxtLink :to="'mailto:' + appConfig.legales.email"> {{ appConfig.legales.email }}</NuxtLink> o contactándose telefónicamente al <NuxtLink :to="'tel:' + appConfig.legales.telefono"> {{ appConfig.legales.telefono }}</NuxtLink
            >. LA AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.
          </p>

          <h3>10. Newsletter</h3>
          <p>Si se suscribe usted a una newsletter ofrecida en nuestra página web, los datos facilitados durante la suscripción a la newsletter se utilizarán solamente para su envío, a no ser que usted haya aceptado un uso diferente de estos datos. Puede cancelar la suscripción en todo momento a través de la opción de cancelación de la suscripción que se ofrece en la propia newsletter.</p>

          <h3>11. Servicio central de acceso de {{ appConfig.legales.razonSocial }}</h3>
          <p>El servicio posventa central de acceso de {{ appConfig.legales.razonSocial }} le permite registrarse en todas las páginas web y aplicaciones de {{ appConfig.legales.razonSocial }} a este servicio posventa. Las condiciones de uso válidas contienen regulaciones especiales de protección de datos. Puede consultar dichas condiciones de uso en las páginas de registro de las páginas web y aplicaciones enlazadas.</p>

          <h3>12. Transmisión de datos a destinatarios fuera del Espacio Económico Europeo y a países sin «nivel de protección adecuado» de conformidad con lo establecido en la Ley de Protección de Datos Personales N° 25.326</h3>
          <p>a. Al utilizar proveedores (ver sección 4. d.) y transmitir datos a terceros con su consentimiento (= autorización) (ver sección 3.c), es posible que los datos personales se transmitan a destinatarios en países fuera de la Unión Europea («UE»), Islandia, Liechtenstein y Noruega (= Espacio Económico Europeo), o que no cuenten con «nivel de protección adecuado» materia de protección de datos personales de conformidad con lo es-tablecido en la Disposición 60/2016 de la Agencia de Acceso a la Información Pública (AAIP), autoridad de control de la Ley 25.326 y se traten allí, especialmente a Estados Unidos, India.</p>
          <p>Conforme se establece en la Disposición 60/2016 de la AAIP, en los siguientes países existe un nivel de protección adecuado para el tratamiento de datos personales: estados miembros de la Unión Europea y miembros del espacio económico europeo (EEE), Confederación Suiza, Guernsey, Jersey, Isla de Man, Islas Feroe, Canadá sólo respecto de su sector privado, Principado de Andorra, Nueva Zelanda, República Oriental del Uruguay y Estado de Israel sólo respecto de los datos que reciban un tratamiento automatizado. Con destinatarios en otros países acordamos la aplicación de las cláusulas contractuales contenidas en la Disposición 60/2016 de la AAIP, de normativas de empresa vinculantes u otros mecanismos admisibles para obtener un «nivel de protección adecuado» que se corresponda con la legislación Argentina. Estaremos encantados de facilitarle información a este respecto a través de los datos de contacto indicados en el punto 9.d.</p>
          <p>Sus datos personales se almacenarán en la base de datos de {{ appConfig.legales.razonSocial }} con domicilio en {{ appConfig.legales.domicilio }}.</p>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<style>
@import url("~/assets/css/autos/legal.css");
</style>
