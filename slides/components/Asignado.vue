<script setup>
import { computed } from 'vue'
import { rifa } from '../rifaStore.js'

const props = defineProps({
  rol: { type: String, required: true },
})

const nombre = computed(() => rifa.asignados[props.rol] || '')
</script>

<template>
  <div class="asignado">{{ nombre === '' ? 'Sin asignar todavía' : 'Lleva: ' + nombre }}</div>
</template>

<style scoped>
.asignado {
  display: inline-block;
  margin-top: 0.6rem;
  padding: 0.3rem 1rem;
  border: 2px solid #ffb020;
  border-radius: 0.6rem;
  font-weight: bold;
}
</style>
