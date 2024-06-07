Svelte 各種機能ライブラリ

## Index

1. [本パッケージ構築方法](./app/README.mdREADME.md)
2. [Svelte/SvelteKit : i18n 多言語対応](./app/src/routes/i18n/README.md)

```
npm create svelte@latest app
cd app
npm install
>>
npm run dev
```

### Tailwindcss

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

### Google font

svelte-lib\app\src\app.html

```
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="keywords" content="svelte, tailwindcss" />
		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
		<link
			href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap"
			rel="stylesheet"
		/>
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
		/>
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>
```
