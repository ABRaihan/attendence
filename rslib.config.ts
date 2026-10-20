import { defineConfig } from '@rslib/core';
import path from 'node:path';

export default defineConfig({
  dts: true,
  source: {
    entry: {
      index: "src/server.ts"
    }
  },
  resolve: {
    alias: { '@': path.resolve(import.meta.filename, 'src') },
  },
  
});
