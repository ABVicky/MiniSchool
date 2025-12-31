import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/script\.google\.com/,
            handler: "NetworkFirst",
            options: {
              cacheName: "school-api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 86400
              }
            }
          }
        ]
      },
      manifest: {
        name: "MiniSchool",
        short_name: "MiniSchool",
        theme_color: "#2563eb",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/icon.png",
            sizes: "192x192",
            type: "/assets/gallery/MS_Logo.png"
          }
        ]
      }
    })
  ]
});
