<script setup>
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";

defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="add-new-customer">Agregar nuevo cliente</RouterLink>
    </div>
    <Heading>{{ title }}</Heading>
  </div>
</template>
