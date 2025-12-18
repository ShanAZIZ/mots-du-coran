import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA({
    includeAssets: ['icons/manifest-icon-192.maskable.png', 'icons/apple-touch-icon.png', 'icons/mask-icon.svg'],
    registerType: 'autoUpdate',
    manifest: {
      name: "Mots du Qur'an",
      short_name: "Mots",
      description: "",
      theme_color: "#FAF7F5",
      icons: [
        {
          src: "icons/manifest-icon-192.maskable.png",
          type: "image/png",
          sizes: "192x192"
        },
        {
          src: "icons/manifest-icon-512.maskable.png",
          type: "image/png",
          sizes: "512x512"
        }
      ]
    }
  })],
})
