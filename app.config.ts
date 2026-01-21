export default defineAppConfig({
  // Sección concesionario dedicada a los datos propios de la empresa, redes sociales, contactos, etc.
  concesionario: {
    id: 476,
    razonSocial: "Cantore S.A.",
    crm: "tecnom",
    social: {
      facebook: "https://www.facebook.com/cantoresa?locale=es_LA",
      linkedin: "",
      youtube: "",
      instagram: "https://www.instagram.com/cantore_mercedesbenz/",
      x: "",
    },

    sucursales: [
      {
        nombre: "Cantore S.A - Concesionario oficial Mercedes-Benz",
        ubicacion: "Río Cuarto, Córdoba",
        direccion: "Ruta 8 km 608",
        telefono: "+54 358-4645880",
        telLink: "+543584645880",
        mail: "proveedores@cantore.com.ar",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53326.354622718565!2d-64.40895082616282!3d-33.16099411214383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d1ff9a13a18b03%3A0x71d7e666d96c9fcb!2sCantore%20S.A.!5e0!3m2!1ses-419!2sar!4v1734101177509!5m2!1ses-419!2sar",
        horario: "Lunes a viernes de 8:00 a 17:00hs.",
        horario2: "",
      },
    ],

    // Botón de contacto flotante vía WhatsApp.
    // Definir "https://wa.me/12345678" o dejar vacío para no mostrar el botón.
    contactoFlotante: {
      autos: "https://wa.me/12345678",
      vans: "https://wa.me/+543585764446",
      camiones: "https://wa.me/+543585764446",
    },
  },

  // En la siguiente sección se configura la estructura de páginas y menúes de la web.
  unidadesNegocio: {
    autos: false,
    vans: true,
    camiones: true,
    buses: false,
  },
  legales: {
    razonSocial: "Cantore Sacifei",
    domicilio: "Ruta 8 Km 608, Río Cuarto/Córdoba",
    email: "proveedores@cantore.com.ar",
    telefono: "+54 358-4645880",
    responsableDataProtection: "*** RESPONSABLE PROTECCIÓN DE DATOS ***",
    linkDirectrizProteccionDeDatos: "#",
  },
  pilot: {
    appkey: "4A390AF7-9056-42F3-AA07-53B7C02D23BF",
    action: "create",
    autos: {
      pilot_contact_type_id: "1",
      pilot_business_type_id: "6",
      pilot_suborigin_id: "FI0FA5R2CNBO5HSSG",
      pilot_notes: "Formulario de Contacto del sitio institucional",
    },
    vans: {
      pilot_contact_type_id: "1",
      pilot_business_type_id: "6",
      pilot_suborigin_id: "FI0FA5R2CNBO5HSSG",
      pilot_notes: "Formulario de Contacto del sitio institucional",
    },
    camiones: {
      pilot_contact_type_id: "1",
      pilot_business_type_id: "6",
      pilot_suborigin_id: "FI0FA5R2CNBO5HSSG",
      pilot_notes: "Formulario de Contacto del sitio institucional",
    },
  },
  tecnom: {
    authorization: "bGVhZHMud2ViLm1iQGNhbnRvcmUuY29tOkM0blQwcjMyMDI1",
    url: "https://cantore.tecnomcrm.com/api/v1/webconnector/consultas/adf",
  },
});
