// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ['styled-components'],
//     },
//   },
  
// });


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ['styled-components'],
//     },
//   },
//   esbuild: {
//     jsxInject: `import React from 'react'`,
//   },
//   logger: {
//     warn: (message) => {
//       if (message.startsWith('Removing intrinsics.')) {
//         return;
//       }
//       console.warn(message);
//     },
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['styled-components'],
    },
  },
  
});
