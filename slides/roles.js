// Fuente unica de emojis por rol. La tabla de la ruleta y los titulos
// de tarjetas leen de aqui via RolEmoji.vue. Nada hardcodea otro path.
export const EMOJIS = {
  'Tesorero': '/emoji/1f4b0.png',
  'Chef': '/emoji/1f373.png',
  'Actividades': '/emoji/1f4cb.png',
  'Turismo': '/emoji/1f5fa.png',
  'Fotógrafo': '/emoji/1f4f7.png',
  'Animador': '/emoji/1f3b6.png',
  'Director': '/emoji/1f9ed.png',
}

export function emojiDe(rol) {
  return EMOJIS[rol] || ''
}
