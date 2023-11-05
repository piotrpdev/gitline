import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/main/ts/Main.ts',
            name: "Gitline"
        },
    },
    publicDir: 'src/main/public'
});