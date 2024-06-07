<script lang="ts">
	import { t, locale, locales } from '$lib/lang/i18n';

	const onChange = ({ currentTarget }: any) => {
		//language.set($language);
		const { value } = currentTarget;
		document.cookie = `lang=${value} ;`;
	};

	let arrowDown = false;
	const toggleArrow = () => {
		if (arrowDown) {
			arrowDown = false;
		} else {
			arrowDown = true;
		}
	};
</script>

<div class="flex flex-col items-center">
	<div class="p-1 space-x-2">
		<span>{$t('common.navigate.Language')}</span>
		<select bind:value={$locale} on:change={onChange} class="pl-4 pr-4">
			{#each $locales as value}
				<option {value}>{value}</option>
			{/each}
		</select>
	</div>
	<div>{$t('common.header.welcome')}</div>
</div>
<div>
	<span class="material-symbols-outlined"> home </span>
	<div>{$t('common.header.detail')}</div>
</div>
