import { build } from 'esbuild';

build({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
  bundle: true,
  minify: true,
  format: 'esm',
  globalName: 'jikants',
  loader: { '.ts': 'ts' },
  tsconfig: 'tsconfig.json',
})
  .then(() => console.log('⚡ Done'))
  .catch(() => process.exit(1));
