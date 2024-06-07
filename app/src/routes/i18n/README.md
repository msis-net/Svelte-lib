### Svelte/SvelteKit : i18n 多言語対応

#### install

```
npm i sveltekit-i18n
```

### Structure

```
.
└── src/
    ├── lib/
    │   └── lang/
    │       ├── en/
    │       │   └── common.json
    │       ├── ja/
    │       │   └── commom.json
    │       ├── .../
    │       └── i18n.ts
    └── routes/
        └── i18n/
            ├── +layout.server.ts
            ├── +layout.ts
            ├── +layout.svelte
            ├── +page.ts(optional)
            └── +page.svelte
```

設定変更した場合は値がcookieに保存され、次回移行はデフォルトになります。
+page.svelte

```javascript {.line-numbers}
<script lang="ts">
	import { t, locale, locales } from '$lib/lang/i18n';

	const onChange = ({ currentTarget }: any) => {
		const { value } = currentTarget;
		document.cookie = `lang=${value} ;`;
	};
    ...
```
