import { reactive, watch } from 'vue'

// Estado compartido entre las fases de la rifa.
// Nombres libres (1 a N, uno por linea en el textarea). Fase 1: tesorero
// entre todos. Fase 2: resto de roles entre quienes no son tesorero.
// Fase 3: director entre esos mismos. Quien sale tesorero sale de la bolsa.
// Persiste en localStorage para que una recarga no borre la rifa en vivo.
const CLAVE = 'nt-rifa-v1'

function normalizar(n) {
  return (n || '').trim().replace(/\s+/g, ' ')
}

function cargar() {
  if (typeof localStorage === 'undefined') {
    return { nombres: '', asignados: {}, motivos: {}, aviso: 'Sin guardado en este navegador: la rifa sigue en memoria y al recargar se pierde. Anota en papelitos.', soloMemoria: true }
  }
  try {
    const crudo = localStorage.getItem(CLAVE)
    if (!crudo) return { nombres: '', asignados: {}, motivos: {}, aviso: '', soloMemoria: false }
    let datos
    try {
      datos = JSON.parse(crudo)
    } catch {
      return { nombres: '', asignados: {}, motivos: {}, aviso: 'Lo guardado venia roto y se empezo de cero. Anota en papelitos.', soloMemoria: false }
    }
    let nombres = datos.nombres
    if (Array.isArray(nombres)) nombres = nombres.join('\n')
    if (typeof nombres !== 'string') return { nombres: '', asignados: {}, motivos: {}, aviso: 'Lo guardado venia roto y se empezo de cero.', soloMemoria: false }
    if (typeof datos.asignados !== 'object' || datos.asignados === null) return { nombres, asignados: {}, motivos: {}, aviso: 'Lo guardado venia roto y se empezo de cero.', soloMemoria: false }
    const motivos = typeof datos.motivos === 'object' && datos.motivos !== null ? datos.motivos : {}
    return { nombres, asignados: datos.asignados, motivos, aviso: '', soloMemoria: false }
  } catch {
    return { nombres: '', asignados: {}, motivos: {}, aviso: 'Sin permiso de guardado: la rifa sigue en memoria. Anota en papelitos.', soloMemoria: true }
  }
}

const inicial = cargar()

export const rifa = reactive({
  nombres: inicial.nombres,
  asignados: inicial.asignados,
  motivos: inicial.motivos,
  aviso: inicial.aviso,
  soloMemoria: inicial.soloMemoria,
  historial: [],
})

if (typeof localStorage !== 'undefined') {
  watch(
    () => [rifa.nombres, JSON.stringify(rifa.asignados), JSON.stringify(rifa.motivos)],
    () => {
      if (rifa.soloMemoria) return
      try {
        localStorage.setItem(CLAVE, JSON.stringify({ nombres: rifa.nombres, asignados: rifa.asignados, motivos: rifa.motivos }))
      } catch {
        rifa.soloMemoria = true
        rifa.aviso = 'Sin espacio o sin permiso: la rifa sigue en memoria. Anota en papelitos.'
      }
    },
  )
}

export function listaNombres() {
  return rifa.nombres.split('\n').map(n => normalizar(n)).filter(n => n !== '')
}

export function nombresValidos() {
  const lista = listaNombres()
  if (lista.length === 0) return 'Escribe al menos un nombre, uno por línea.'
  const bajos = lista.map(n => n.toLowerCase())
  const i = bajos.findIndex((n, k) => bajos.indexOf(n) !== k)
  if (i !== -1) return 'Hay un nombre repetido: ' + lista[i] + '.'
  return ''
}

export function cuentaRoles(nombre) {
  const n = normalizar(nombre).toLowerCase()
  return Object.values(rifa.asignados).filter(x => (x || '').toLowerCase() === n).length
}

export function candidatos() {
  const lista = listaNombres()
  const tesorero = rifa.asignados['Tesorero']
  return lista.filter(n => (tesorero ? n !== tesorero : true) && cuentaRoles(n) < 2)
}

function guardarHistorial() {
  rifa.historial.push({ asignados: { ...rifa.asignados }, motivos: { ...rifa.motivos } })
  if (rifa.historial.length > 1) rifa.historial.shift()
}

export function deshacer() {
  const previo = rifa.historial.pop()
  if (!previo) return false
  rifa.asignados = previo.asignados
  rifa.motivos = previo.motivos
  return true
}

export function asignar(rol, nombre, motivo = '') {
  guardarHistorial()
  rifa.asignados[rol] = nombre
  if (motivo) rifa.motivos[rol] = motivo
  else delete rifa.motivos[rol]
}

export function quitar(rol) {
  guardarHistorial()
  delete rifa.asignados[rol]
  delete rifa.motivos[rol]
}

// Reglas para dar un rol a mano (voluntario). Devuelve '' si se puede,
// o el mensaje a mostrar si no.
export function puedeAsignar(rol, nombre) {
  const n = normalizar(nombre)
  if (n === '') return 'Elige un nombre.'
  if (!listaNombres().some(x => x.toLowerCase() === n.toLowerCase())) return 'Ese nombre no está en la lista.'
  const real = listaNombres().find(x => x.toLowerCase() === n.toLowerCase())
  const dueno = Object.keys(rifa.asignados).find(r => rifa.asignados[r] === rol)
  if (dueno) return 'Ese rol ya salió.'
  if (cuentaRoles(real) >= 2) {
    return real + ' ya lleva 2 roles. Libera uno con ↻.'
  }
  const suyos = Object.keys(rifa.asignados).filter(r => rifa.asignados[r] === real)
  if (rol === 'Tesorero' && suyos.length > 0) {
    return real + ' ya tiene ' + suyos.join(', ') + '. Libéralo o elige a otro.'
  }
  if (rol !== 'Tesorero' && rifa.asignados['Tesorero'] === real) {
    return 'Tesorero lleva solo ese rol.'
  }
  return ''
}

// True si rompe regla dura y pide doble confirmacion en UI.
export function esReglaDura(rol, nombre) {
  const n = normalizar(nombre)
  const real = listaNombres().find(x => x.toLowerCase() === n.toLowerCase()) || n
  const suyos = Object.keys(rifa.asignados).filter(r => rifa.asignados[r] === real)
  if (rol === 'Tesorero' && suyos.length > 0) return true
  if (rol !== 'Tesorero' && rifa.asignados['Tesorero'] === real) return true
  if (rol === 'Director' && rifa.asignados['Tesorero'] === real) return true
  if (cuentaRoles(real) >= 2) return true
  return false
}

export function nombreReal(nombre) {
  const n = normalizar(nombre)
  return listaNombres().find(x => x.toLowerCase() === n.toLowerCase()) || n
}

export function exportarTexto() {
  const lineas = ['Nombres:', ...listaNombres(), '', 'Roles:']
  for (const [rol, nombre] of Object.entries(rifa.asignados)) {
    const m = rifa.motivos[rol] ? ` (${rifa.motivos[rol]})` : ''
    lineas.push(`${rol}: ${nombre}${m}`)
  }
  return lineas.join('\n')
}

export function importarTexto(texto) {
  const lineas = (texto || '').split('\n').map(l => l.trim()).filter(l => l !== '')
  const nombres = []
  const asignados = {}
  const motivos = {}
  let modo = 'nombres'
  for (const l of lineas) {
    if (/^roles:?$/i.test(l)) { modo = 'roles'; continue }
    if (/^nombres:?$/i.test(l)) { modo = 'nombres'; continue }
    if (modo === 'roles' && l.includes(':')) {
      const i = l.indexOf(':')
      const rol = l.slice(0, i).trim()
      let resto = l.slice(i + 1).trim()
      let motivo = ''
      const m = resto.match(/\(([^)]+)\)\s*$/)
      if (m) { motivo = m[1].trim(); resto = resto.slice(0, m.index).trim() }
      if (rol && resto) { asignados[rol] = resto; if (motivo) motivos[rol] = motivo; if (!nombres.some(x => x.toLowerCase() === resto.toLowerCase())) nombres.push(resto) }
    } else if (modo === 'nombres') {
      if (!l.includes(':') && !nombres.some(x => x.toLowerCase() === l.toLowerCase())) nombres.push(l)
    }
  }
  guardarHistorial()
  rifa.nombres = nombres.join('\n')
  rifa.asignados = asignados
  rifa.motivos = motivos
  return { nombres: nombres.length, roles: Object.keys(asignados).length }
}

export function reiniciar() {
  rifa.nombres = ''
  rifa.asignados = {}
  rifa.motivos = {}
  rifa.historial = []
  try {
    localStorage.removeItem(CLAVE)
  } catch {
    // Nada que limpiar.
  }
}

export function limpiarAsignaciones() {
  guardarHistorial()
  rifa.asignados = {}
  rifa.motivos = {}
}
