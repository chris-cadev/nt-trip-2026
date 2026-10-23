import { defineConfig, presetUno } from 'unocss'

// Tema global NT fuera de slides.md para que no dependa del
// transform de markdown (ese cacheaba los estilos a veces).
export default defineConfig({
  presets: [presetUno()],
  preflights: [
    {
      layer: 'nt-theme',
      getCSS: () => `
html .slidev-layout {
  background: #0d0f12;
  color: #f2f4f6;
}
html .slidev-layout h1 {
  color: #ffb020;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.04em;
  text-shadow: 2px 0 0 rgba(242, 244, 246, 0.85), -2px 0 0 rgba(255, 176, 32, 0.6);
}
html .slidev-layout a {
  color: #ffb020;
}
html .slidev-layout img.emj {
  display: inline-block;
  height: 1em;
  vertical-align: -0.12em;
}
html .slidev-layout::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(0deg, rgba(242, 244, 246, 0.035) 0 1px, transparent 1px 3px);
}`,
    },
  ],
})
