<script setup>
import { FormKit } from "@formkit/vue";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";

defineProps({
  title: {
    type: String,
  },
});

const handleSubmit = (data) => {
  console.log(data);
};
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="home">Volver</RouterLink>
    </div>
    <Heading>{{ title }}</Heading>
    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit
          type="form"
          submit-label="Agregar Cliente"
          incomplete-message="No se pudo enviar, revisa los campos del formulario"
          @submit="handleSubmit"
        >
          <FormKit
            type="text"
            name="nombre"
            label="Nombre *"
            placeholder="Nombre del cliente"
            validation="required"
            :validation-messages="{ required: 'El nombre es obligatorio' }"
          />

          <FormKit
            type="text"
            name="apellidos"
            label="Apellidos *"
            placeholder="Apellidos del cliente"
            validation="required"
            :validation-messages="{
              required: 'Los apellidos son obligatorios',
            }"
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
          />

          <FormKit
            type="text"
            name="telefono"
            label="Teléfono"
            placeholder="Teléfono XXX-XXX-XXX"
            validation="?matches:/^(?:[0-9]{3}-[0-9]{3}-[0-9]{3})?$/"
            :validation-messages="{ matches: 'El formato no es válido' }"
            help="El numero de telefono debe tener este formato: XXX-XXX-XXX"
          />

          <FormKit
            type="text"
            name="empresa"
            label="Empresa"
            placeholder="Empresa del cliente"
          />

          <FormKit
            type="text"
            name="puesto"
            label="Puesto"
            placeholder="Puesto del cliente"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>
<style>
.formkit-wrapper {
  width: 100%;
}
</style>
