import { defineConfig } from 'vite';
import { name } from './package.json';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/main/ts/Main.ts',
            name: name.charAt(0).toUpperCase() + name.slice(1)
        },
    },
});