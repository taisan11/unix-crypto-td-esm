import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./mod.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  exports: true,
})
