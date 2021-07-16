import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        reactRefresh(),
    ],
    server: {
        port: 3000,
        open: false
    },
    resolve: {
        alias: {
            Body: join(__dirname, 'src/components/body'),
            Form: join(__dirname, 'src/components/form'),
            List: join(__dirname, 'src/components/list'),
            Topbar: join(__dirname, 'src/components/topbar'),
            '_icons': join(__dirname, 'src/components/_icons')
        },
    },
})
