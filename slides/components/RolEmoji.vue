<script setup>
import { computed } from 'vue'
import { emojiDe } from '../roles.js'

const props = defineProps({
  rol: { type: String, required: true },
})

const src = computed(() => emojiDe(props.rol))
</script>

<template>
  <img v-if="src" :src="src" class="emj" :alt="rol" />
</template>
