import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});
// module.exports = {
//     content: [
//       "./", // Asegúrate de que esta ruta sea correcta
//     ],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }