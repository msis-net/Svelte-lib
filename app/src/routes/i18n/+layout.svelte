<script>
	import '$lib/theme/app.css';
	import '$lib/theme/global.css';
	import '$lib/theme/p-card.css';

	import { t, loadTranslations } from '$lib/lang/i18n';
	const defaultLanguage = 'ja';
	loadTranslations(defaultLanguage, '/');
	import { page } from '$app/stores';
</script>

<div class="h-lvh border p-4">
	<slot />
</div>
