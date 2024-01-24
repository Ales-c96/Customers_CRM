<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    to: {
        type: String,
        required: true
    }
})

</script>

<template>
    <div>
        <RouterLink 
            :to="{ name: to }"
            class="block md:inline-block rounded bg-blue-600 py-2 px-3 
                    text-sm shadow hover:bg-blue-700 text-white uppercase"
        >
            <slot></slot>
        </RouterLink>
    </div>
</template>
