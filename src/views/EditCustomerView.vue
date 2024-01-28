<script setup>
import { onMounted, reactive } from "vue";
import { FormKit } from "@formkit/vue";
import { useRouter, useRoute } from "vue-router";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";
import CustomerService from "../services/CustomerService";

defineProps({
  title: {
    type: String,
  },
});

const router = useRouter();
const route = useRoute();

const { id } = route.params;

const formData = reactive({
  name: "",
  secondName: "",
  email: "",
  telephone: "",
  company: "",
  position: "",
});

onMounted(() => {
  CustomerService.getCustomersByID(id)
    .then(({ data }) => {
      Object.assign(formData, data);
    })
    .catch((error) => console.log(`Fallo al obtener cliente: ${error}`));
});

const handleSubmit = () => {
  CustomerService.editCustomer(id, formData).then(
    router
      .push({ name: "home" })
      .catch((error) => `Se produjo un error al editar al usuario: ${error}`)
  );
};
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="home">Volver</RouterLink>
    </div>
    <Heading>{{ title }}</Heading>
    <div class="mx-auto mt-10 bg-white shadow-2xl rounded-xl">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit
          type="form"
          submit-label="Guardar Cambios"
          incomplete-message="No se pudo enviar, revisa los campos del formulario"
          @submit="handleSubmit"
          :value="formData"
        >
          <FormKit
            type="text"
            name="name"
            label="Nombre *"
            placeholder="Nombre del cliente"
            validation="required"
            :validation-messages="{ required: 'El nombre es obligatorio' }"
            v-model="formData.name"
          />

          <FormKit
            type="text"
            name="secondName"
            label="Apellidos *"
            placeholder="Apellidos del cliente"
            validation="required"
            :validation-messages="{
              required: 'Los apellidos son obligatorios',
            }"
            v-model="formData.secondName"
          />

          <FormKit
            type="email"
            name="email"
            label="Email *"
            placeholder="Email del cliente"
            validation="required|email"
            :validation-messages="{
              required: 'El email del cliente es obligatorio',
              email: 'El email introducido no es válido',
            }"
            v-model="formData.email"
          />

          <FormKit
            type="text"
            name="telephone"
            label="Teléfono"
            placeholder="Teléfono XXX-XXX-XXX"
            validation="?matches:/^(?:[0-9]{3}-[0-9]{3}-[0-9]{3})?$/"
            :validation-messages="{ matches: 'El formato no es válido' }"
            v-model="formData.telephone"
            help="El numero de telefono debe tener este formato: XXX-XXX-XXX"
          />

          <FormKit
            type="text"
            name="company"
            label="Empresa"
            placeholder="Empresa del cliente"
            v-model="formData.company"
          />

          <FormKit
            type="text"
            name="position"
            label="Puesto"
            placeholder="Puesto del cliente"
            v-model="formData.position"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>
<style>
.formkit-wrapper {
  max-width: 100%;
}
</style>
