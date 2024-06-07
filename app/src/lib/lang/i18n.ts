import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('$lib/lang/en/common.json')).default
		},
		{
			locale: 'ja',
			key: 'common',
			loader: async () => (await import('$lib/lang/ja/common.json')).default
		}
	]
};
export const defaultLocale = 'ja';
export const {
	t,
	loading,
	locales,
	locale,
	loadTranslations,
	addTranslations,
	translations,
	setLocale,
	setRoute
} = new i18n(config);

loading.subscribe(
	($loading) => $loading && console.log('Loading translations for the main instance...')
);
