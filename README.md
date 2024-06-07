機能のサンプル

## Svelte ベースのインストール

```
npm create svelte@latest app
cd app
npm install
>>
npm run dev
```

### Tailwindcss の適用

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

svelte.config.js

```
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';　👈
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess() 👈
};
export default config;
```

tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],👈
  theme: {
    extend: {}
  },
  plugins: []
};
```

svelte-lib\app\src\lib\theme\app.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
