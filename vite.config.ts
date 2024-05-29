import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@containers', replacement: '/src/components/containers' },
      { find: '@components', replacement: '/src/components' },
      { find: '@layout', replacement: '/src/layout' },
      { find: '@sections', replacement: '/src/components/sections' },
      { find: '@data-service', replacement: '/src/utils/data-service.ts' },
      { find: '@service', replacement: '/src/service' },
      { find: '@modals', replacement: '/src/components/modals' },
      { find: '@global-interface', replacement: '/src/interface/global.ts' },
      { find: '@auth-interface', replacement: '/src/interface/auth.ts' },
      { find: '@notification', replacement: '/src/utils/notification.ts' },
      { find: '@validation', replacement: '/src/utils/validations.ts' },
    ]
  }
})
