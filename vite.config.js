import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if ( mode === "production" ) {
    return {
      plugins: [react()],
      build: {
        outDir: 'build'
      },
      base: '',
      server: {
        port: 8081
      }
    }
  }

  if ( mode === "development" ) {
    return {
      plugins: [react()],
      build: {
        outDir: 'build'
      },
      base: '/AnyCompanyReads-frontend',
      server: {
        port: 8081
      }
    }
  }
});