import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/Portfolio/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/sitemap.xml',
          dest: ''
        },
        {
          src: 'public/sitemaps.xml',
          dest: ''
        },
        {
          src: 'public/robots.txt',
          dest: ''
        },
        {
          src: 'public/.htaccess',
          dest: ''
        },
        {
          src: 'public/.nojekyll',
          dest: ''
        }
      ]
    })
  ]
})


