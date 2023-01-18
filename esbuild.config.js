import { build } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

build({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
  treeShaking: true,
  platform: 'node',
  bundle: true,
  minify: true,
  format: 'esm',
  loader: { '.ts': 'ts' },
  tsconfig: 'tsconfig.json',
  plugins: [nodeExternalsPlugin()],
})
  .then(() => console.log('⚡ Done'))
  .catch(() => process.exit(1));
