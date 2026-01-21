<template>
  <section id="contactForm">
    <div class="pageWidth">
      <h2>Realizar consulta</h2>
      <p>
        Queremos asesorarte sobre tu Mercedes-Benz. Por favor completá el
        siguiente formulario y nos pondremos en contacto.
      </p>
      <form>
        <div class="wrapper">
          <div class="col2">
            <div
              class="inputWrapper"
              :class="v$.datos.nombre.$error ? 'alert' : ''"
            >
              <label for="name">Nombre *</label>
              <input
                v-model="datos.nombre"
                @blur="v$.datos.nombre.$touch"
                type="text"
                name="name"
                theme="light"
              />
              <span
                v-for="error of v$.datos.nombre.$errors"
                :key="error.$uid"
                class="error"
                >{{ error.$message }}.</span
              >
            </div>
            <div
              class="inputWrapper"
              :class="v$.datos.apellido.$error ? 'alert' : ''"
            >
              <label for="lastname">Apellido *</label>
              <input
                v-model="datos.apellido"
                @blur="v$.datos.apellido.$touch"
                theme="light"
                type="text"
                name="lastname"
              />
              <span
                v-for="error of v$.datos.apellido.$errors"
                :key="error.$uid"
                class="error"
                >{{ error.$message }}.</span
              >
            </div>
          </div>
          <div class="col2">
            <div
              class="inputWrapper"
              :class="v$.datos.telefono.$error ? 'alert' : ''"
            >
              <label for="mobile">Celular *</label>
              <input
                v-model="datos.telefono"
                @blur="v$.datos.telefono.$touch"
                type="phone"
                name="mobile"
              />
              <span
                v-for="error of v$.datos.telefono.$errors"
                :key="error.$uid"
                class="error"
                >{{ error.$message }}.</span
              >
            </div>
            <div
              class="inputWrapper"
              :class="v$.datos.email.$error ? 'alert' : ''"
            >
              <label for="mail">Correo electrónico *</label>
              <input
                v-model="datos.email"
                @blur="v$.datos.email.$touch"
                type="email"
                name="mail"
              />
              <span
                v-for="error of v$.datos.email.$errors"
                :key="error.$uid"
                class="error"
                >{{ error.$message }}.</span
              >
            </div>
          </div>
          <div
            class="inputWrapper city"
            :class="v$.datos.localidad.$error ? 'alert' : ''"
          >
            <label for="city">Localidad *</label>
            <input
              v-model="datos.localidad"
              @blur="v$.datos.localidad.$touch"
              type="text"
              name="city"
            />
            <span
              v-for="error of v$.datos.localidad.$errors"
              :key="error.$uid"
              class="error"
              >{{ error.$message }}.</span
            >
          </div>
        </div>

        <label class="checkboxWrapper">
          <input type="checkbox" v-model="terms" />
          <span class="checkmark"></span>
          <span class="description">Acepto los términos y condiciones</span>
        </label>

        <p class="legal">
          Declaro haber sido informado en los términos del art. 6 de la Ley
          25.326 acerca del carácter facultativo de la presente y de la
          posibilidad de ejercer el derecho de acceso, rectificación y supresión
          de los datos antes referidos, así como también de la política de
          privacidad de este sitio.<br />Sus datos serán almacenados en la base
          de datos de {{ appConfig.legales.razonSocial }} con domicilio en
          {{ appConfig.legales.domicilio }}. El titular de los datos personales
          tiene la facultad de ejercer el derecho de acceso a los mismos en
          forma gratuita a intervalos no inferiores de seis meses, poniéndose en
          contacto con {{ appConfig.legales.razonSocial }}
          <NuxtLink :to="'mailto:' + appConfig.legales.email">
            {{ appConfig.legales.email }}</NuxtLink
          >, siempre y cuando se acredite un interés legítimo al efecto conforme
          lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326. La
          AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano
          de Control de la Ley Nº 25.326, tiene la atribución de atender las
          denuncias y reclamos que interpongan quienes resulten afectados en sus
          derechos por incumplimiento de las normas vigentes en materia de
          protección de datos personales.<br />Autorizo y consiento expresamente
          a {{ appConfig.legales.razonSocial }} para el procesamiento de datos,
          y todo ello en los términos requeridos por el art. 5 de la Ley 25.326
          a usar mis datos personales contenidos en la presente a fin de que
          formulen ofertas publicitarias y remitan información comercial de sus
          bienes y/o servicios, incluido, pero no limitado a futuros acciones de
          marketing/ invitación a eventos/ comunicaciones referentes a ofertas
          de productos y/o servicios, etc.
        </p>

        <div class="action">
          <button
            :disabled="v$.datos.$invalid || !terms"
            class="btn"
            @click.prevent="contact(appConfig, url)"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
const url = useRequestURL();
const v$ = useVuelidate();
let terms = ref(false);
</script>

<script lang="ts">
import { defineComponent } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import { apiFetch } from "~/utils/apiFetch";
import type { DefineNuxtConfig } from "nuxt/config";
// import { defineRule, Field, Form, ErrorMessage } from 'vee-validate';
export default defineComponent({
  name: "ContactForm",
  props: {
    modelo: { type: String, default: "" },
    pilot_suborigin_id: { type: String, default: "" },
    pilot_notes: { type: String, default: "" },
    pilot_business_type_id: { type: String, default: "" },
    pilot_contact_type_id: { type: String, default: "" },
  },
  data: function () {
    return {
      result: { marca: null, operativos: [], tipo: null },
      showIframeModal: false,
      isLoading: false,
      messageSent: false,
      aceptacion: false,
      notification: {
        mode: "",
        show: false,
        message: "",
      },
      datos: {
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        localidad: "",
        concesionario: {},
      },
      vin: null,
    };
  },
  validations() {
    return {
      datos: {
        nombre: {
          required: helpers.withMessage("Campo obligatorio", required),
          $autoDirty: true,
        }, // Matches this.firstName
        apellido: {
          required: helpers.withMessage("Campo obligatorio", required),
          $autoDirty: true,
        }, // Matches this.lastName
        telefono: {
          required: helpers.withMessage("Campo obligatorio", required),
          $autoDirty: true,
        }, // Matches this.lastName
        email: {
          required: helpers.withMessage("Campo obligatorio", required),
          email: helpers.withMessage("Formato erróneo", email),
          $autoDirty: true,
        }, // Matches this.contact.email
        localidad: {
          required: helpers.withMessage("Campo obligatorio", required),
          $autoDirty: true,
        }, // Matches this.lastName
      },
    };
  },
  methods: {
    async tecnom(appConfig: any, url: any) {
      const info = {
        prospect: {
          customer: {
            comments: "",
            contacts: [
              {
                emails: [
                  {
                    value: this.datos.email,
                  },
                ],
                names: [
                  {
                    part: "first",

                    value: this.datos.nombre,
                  },
                  {
                    part: "last",

                    value: this.datos.apellido,
                  },
                ],
                phones: [
                  {
                    type: "cellphone",

                    value: this.datos.telefono,
                  },
                ],
                addresses: [
                  {
                    city: this.datos.localidad,

                    postalcode: "",
                  },
                ],
              },
            ],
          },
          provider: {
            name: {
              value: "Website",
            },
            service: "Camiones",
            url: url,
          },
        },
      };

      const { data, error }: any = await apiFetch(appConfig.tecnom.url, {
        method: "post",
        body: info,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Basic " + appConfig.tecnom.authorization,
        },
      });

      this.$router.push("/autos/sobre-nosotros/contacto/gracias");
      return;
    },
    async contact(appConfig: any, url: any) {
      console.log(appConfig.concesionario.crm);
      if (appConfig.concesionario.crm === "tecnom")
        return this.tecnom(appConfig, url);

      this.datos.marca = "Mercedes-Benz";
      this.datos.unidad_de_negocio = "autos";
      this.datos.modelo = this.modelo;
      this.datos.url = url;
      this.datos.appkey = appConfig.pilot.appkey;
      this.datos.action = appConfig.pilot.action;
      this.datos.pilot_contact_type_id = this.pilot_contact_type_id
        ? this.pilot_contact_type_id
        : appConfig.pilot.autos.pilot_contact_type_id;
      this.datos.pilot_business_type_id = this.pilot_business_type_id
        ? this.pilot_business_type_id
        : appConfig.pilot.autos.pilot_business_type_id;
      this.datos.pilot_suborigin_id = this.pilot_suborigin_id
        ? this.pilot_suborigin_id
        : appConfig.pilot.autos.pilot_suborigin_id;
      this.datos.pilot_notes = this.pilot_notes
        ? this.pilot_notes
        : appConfig.pilot.autos.pilot_notes;
      this.datos.concesionario = { id: appConfig.concesionario.id };

      const { data, error }: any = await apiFetch(
        "contacto-form/contacto-sitio-concesionario/public",
        {
          method: "post",
          body: this.datos,
        }
      );

      this.$router.push("/camiones/sobre-nosotros/contacto/gracias");
    },
    reset() {
      this.datos.nombre = "";
      this.datos.apellido = "";
      this.datos.email = "";
      this.datos.telefono = "";
      this.datos.localidad = "";
      this.datos.url = "";
      this.datos.marca = "";
      this.datos.modelo = "";
      this.datos.concesionario = {};
    },
  },
});
</script>

<style scope>
@import "~/assets/css/camiones/contact-form.css";
</style>
