import { defineConfig } from 'vite';  // ← Add this line
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ... rest of config
});
