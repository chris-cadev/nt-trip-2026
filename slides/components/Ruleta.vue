<script setup>
import { computed, ref, watch } from 'vue'
import { rifa, listaNombres, nombresValidos, candidatos, asignar, quitar, puedeAsignar, esReglaDura, nombreReal, deshacer, limpiarAsignaciones, exportarTexto, importarTexto } from '../rifaStore.js'
import { emojiDe } from '../roles.js'

const props = defineProps({
  titulo: { type: String, default: 'Rifa' },
  items: { type: Array, default: () => [] },
  nombres: { type: Boolean, default: true },
})

const display = ref('Pulsa girar')
const girando = ref(false)
const volNombre = ref('')
const volRol = ref('')
const volMotivo = ref('')
const volMsg = ref('')
const papel = ref('')
const papelMsg = ref('')
const mostrarPapel = ref(false)
const error = computed(() => nombresValidos())
const cuenta = computed(() => listaNombres().length)
const turno = computed(() => props.items.find(r => !rifa.asignados[r]))
const libres = computed(() => props.items.filter(r => !rifa.asignados[r]))
const sinItems = computed(() => !props.items || props.items.length === 0)
const turnoTexto = computed(() => sinItems.value ? 'Nada que rifar' : (turno.value || 'Rifa completa'))
const puedeGirar = computed(() => !girando.value && !error.value && !!turno.value && !sinItems.value)

watch(() => rifa.nombres, () => {
  const validos = new Set(listaNombres().map(n => n.toLowerCase()))
  for (const [rol, nombre] of Object.entries(rifa.asignados)) {
    if (!validos.has((nombre || '').toLowerCase())) quitar(rol)
  }
  if (display.value !== 'Pulsa girar' && !validos.has(display.value.toLowerCase())) {
    display.value = 'Pulsa girar'
  }
})

function girar() {
  if (girando.value || error.value || !turno.value) return
  let bolsa = candidatos()
  if (turno.value === 'Tesorero') {
    const ocupados = new Set(Object.values(rifa.asignados))
    bolsa = bolsa.filter(n => !ocupados.has(n))
  }
  if (bolsa.length === 0) {
    display.value = 'Nadie libre. Libera un rol con ↻.'
    return
  }
  girando.value = true
  let i = 0
  const tick = () => {
    display.value = bolsa[Math.floor(Math.random() * bolsa.length)]
    i++
    if (i < 12) {
      setTimeout(tick, 60 + i * 40)
    } else {
      asignar(turno.value, display.value)
      girando.value = false
    }
  }
  tick()
}

function regirar(rol) {
  if (girando.value) return
  quitar(rol)
  display.value = 'Pulsa girar'
}

function reset() {
  if (girando.value) return
  if (Object.keys(rifa.asignados).length > 0 && !window.confirm('Borra todos los roles?')) return
  limpiarAsignaciones()
  display.value = 'Pulsa girar'
}

function deshacerUltimo() {
  if (girando.value) return
  if (deshacer()) display.value = 'Pulsa girar'
}

function voluntariar() {
  if (girando.value) return
  if (!volRol.value || !volNombre.value) {
    volMsg.value = 'Elige nombre y rol.'
    return
  }
  const real = nombreReal(volNombre.value)
  const msg = puedeAsignar(volRol.value, real)
  if (msg !== '') {
    volMsg.value = msg
    if (!esReglaDura(volRol.value, real)) {
      return
    }
    if (!window.confirm(msg + ' Darlo de todos modos por decision humana?')) return
    if (!window.confirm('Confirma de nuevo: rompe la regla y queda registrado.')) return
  }
  asignar(volRol.value, real, volMotivo.value.trim())
  display.value = real + ' lleva ' + volRol.value
  volMsg.value = esReglaDura(volRol.value, real) || rifa.motivos[volRol.value] ? 'Registrado como decision humana.' : ''
}

function exportar() {
  papel.value = exportarTexto()
  mostrarPapel.value = true
  papelMsg.value = ''
}

function importar() {
  const r = importarTexto(papel.value)
  papelMsg.value = `Cargados ${r.nombres} nombres y ${r.roles} roles.`
  display.value = 'Pulsa girar'
}

function motivoDe(rol) {
  return rifa.motivos[rol] || ''
}

function rolesDe(nombre) {
  const limpio = (nombre || '').trim().replace(/\s+/g, ' ')
  if (limpio === '') return []
  return Object.keys(rifa.asignados).filter(r => (rifa.asignados[r] || '').toLowerCase() === limpio.toLowerCase())
}
</script>

<template>
  <div class="ruleta">
    <h3>{{ titulo }}</h3>
    <div class="columnas">
      <div class="lista">
        <table class="tabla">
          <tr v-if="listaNombres().length === 0">
            <td>Escribe los nombres a la derecha</td>
            <td></td>
          </tr>
          <tr v-for="n in listaNombres()" :key="n">
            <td>{{ n }}</td>
            <td>
              <span v-for="rol in rolesDe(n)" :key="rol" class="chip" :title="motivoDe(rol)">
                <img :src="emojiDe(rol)" class="emj" :alt="rol" /> {{ rol }}<span v-if="motivoDe(rol)"> *</span>
                <button @click="regirar(rol)" :disabled="girando" title="Re-girar">↻</button>
              </span>
              <span v-if="rolesDe(n).length === 0">sin rol</span>
            </td>
          </tr>
        </table>
      </div>
      <div class="giro">
        <div v-if="nombres" class="entradas">
          <textarea v-model="rifa.nombres" rows="2" placeholder="Un nombre por línea"></textarea>
          <div class="cuenta">{{ cuenta }} {{ cuenta === 1 ? 'nombre' : 'nombres' }}</div>
        </div>
        <div v-if="error" class="error">{{ error }}</div>
        <div v-if="sinItems" class="error">Nada que rifar: este momento no trae items.</div>
        <div v-if="rifa.aviso" class="volmsg">{{ rifa.aviso }}</div>
        <div class="turno">Turno: <img v-if="turno" :src="emojiDe(turno)" class="emj" :alt="turno" /> {{ turnoTexto }}</div>
        <div class="display" :class="{ girando }">{{ display }}</div>
        <button @click="girar" :disabled="!puedeGirar">Girar</button>
        <button @click="reset" :disabled="girando">Reset</button>
        <button @click="deshacerUltimo" :disabled="girando || rifa.historial.length === 0">Deshacer</button>
        <button @click="exportar" :disabled="girando">Papelitos</button>
        <div class="voluntario">
          <span>Voluntario:</span>
          <select v-model="volNombre">
            <option value="">Nombre</option>
            <option v-for="n in listaNombres()" :key="n" :value="n">{{ n }}</option>
          </select>
          <select v-model="volRol">
            <option value="">Rol</option>
            <option v-for="r in libres" :key="r" :value="r">{{ r }}</option>
          </select>
          <input v-model="volMotivo" placeholder="Motivo (corto)" maxlength="80" />
          <button @click="voluntariar" :disabled="girando">Dar rol</button>
        </div>
        <div v-if="volMsg" class="volmsg">{{ volMsg }}</div>
        <div v-if="mostrarPapel" class="entradas">
          <textarea v-model="papel" rows="4" placeholder="Nombres: ... Roles: ..."></textarea>
          <div><button @click="importar" :disabled="girando">Cargar papelitos</button></div>
          <div v-if="papelMsg" class="volmsg">{{ papelMsg }}</div>
        </div>
        <div v-if="libres.length > 0" class="pendientes">
          Faltan: <span v-for="rol in libres" :key="rol" class="chip"><img :src="emojiDe(rol)" class="emj" :alt="rol" /> {{ rol }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ruleta {
  text-align: center;
  padding: 0.25rem 0.6rem;
  font-size: 0.85rem;
}
.ruleta h3 {
  margin: 0.1rem 0;
  font-size: 1.15rem;
}
.columnas {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
  text-align: left;
}
.giro {
  text-align: center;
}
@media (max-width: 700px) {
  .columnas {
    grid-template-columns: 1fr;
  }
  .ruleta {
    font-size: 0.85rem;
  }
  .tabla td {
    padding: 0.12rem 0.5rem;
  }
  .display {
    font-size: 1.5rem;
    min-height: 2.2rem;
  }
  .entradas textarea {
    font-size: 0.85rem;
  }
}
.entradas textarea {
  width: 100%;
  font-size: 0.9rem;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #888;
  resize: vertical;
}
.cuenta {
  font-size: 0.85rem;
  opacity: 0.8;
  margin-top: 0.1rem;
}
.error {
  color: #ff6b6b;
  font-weight: bold;
  margin-bottom: 0.2rem;
}
.turno {
  opacity: 0.85;
  white-space: nowrap;
}
.display {
  font-size: 1.35rem;
  font-weight: bold;
  min-height: 2rem;
}
.display.girando {
  animation: salto 0.3s infinite alternate;
}
@keyframes salto {
  from { transform: scale(1); }
  to { transform: scale(1.08); }
}
button {
  font-size: 0.95rem;
  padding: 0.3rem 0.9rem;
  border-radius: 0.6rem;
  border: none;
  cursor: pointer;
  margin: 0.2rem;
}
button:disabled {
  opacity: 0.4;
  cursor: default;
}
.tabla {
  margin: 0.6rem auto;
  border-collapse: collapse;
  width: 100%;
}
.tabla td {
  border-bottom: 1px solid #444;
  padding: 0.12rem 0.6rem;
  text-align: left;
  overflow-wrap: break-word;
}
.tabla td:first-child {
  white-space: nowrap;
}
.voluntario {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  justify-content: center;
  align-items: center;
  margin-top: 0.3rem;
}
.voluntario select {
  font-size: 0.9rem;
  padding: 0.25rem 0.4rem;
  border-radius: 0.5rem;
  border: 1px solid #888;
  max-width: 9rem;
}
.voluntario input {
  font-size: 0.9rem;
  padding: 0.25rem 0.4rem;
  border-radius: 0.5rem;
  border: 1px solid #888;
  max-width: 10rem;
}
.volmsg {
  color: #ffb020;
  font-weight: bold;
  margin-top: 0.2rem;
  font-size: 0.9em;
}
.pendientes {
  margin-top: 0.2rem;
  font-size: 0.8rem;
  opacity: 0.9;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  border: 1px solid #ffb020;
  border-radius: 0.6rem;
  padding: 0.1rem 0.3rem 0.1rem 0.5rem;
  margin: 0.1rem 0.3rem 0.1rem 0;
}
.chip button {
  font-size: 0.9rem;
  padding: 0.1rem 0.4rem;
  margin: 0;
}
.regla {
  font-size: 0.8rem;
  opacity: 0.8;
  margin-top: 0.2rem;
}
</style>
