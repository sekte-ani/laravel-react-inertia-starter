import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
    resolve: {
        alias: {
            // `@ani-ui/anis/styles.css` imports `tw-animate-css` but the library lists it as a devDependency.
            // Alias it to a local fallback so dev server/build doesn't crash.
            'tw-animate-css': path.resolve(
                __dirname,
                'resources/css/tw-animate-css.css',
            ),
        },
    },
    esbuild: {
        jsx: 'automatic',
    },
});
