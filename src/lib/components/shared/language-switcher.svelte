<script lang="ts">
	import { Icon, Button } from '$lib/ui-kit';
	import { setLocale, locale } from '$lib/i18n';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import {
		isAvaliableCategoryForLanguage,
		replaceUrl,
		setCookie
	} from '$lib/helpers';
	import FlagTr from '$lib/assets/images/flags/tr.png?enhanced';
	import FlagEn from '$lib/assets/images/flags/en.png?enhanced';

	function switchLanguage() {
		const newLocale = $locale === 'en' ? 'tr' : 'en';
		setLocale(newLocale);
		setCookie('language', newLocale);

		if (isAvaliableCategoryForLanguage($page.params.category, newLocale)) {
			goto(`/${newLocale}`);
		}

		replaceUrl(window.location.pathname.replace($locale, newLocale));
	}

	$: flag = $locale === 'en' ? FlagEn : FlagTr;
</script>

<Button class="language-switcher" onClick={switchLanguage}>
	<enhanced:img class="flag" src={flag}></enhanced:img>
	<Icon name="language" size={18} />
</Button>

<style lang="scss">
	:global(.language-switcher) {
		display: flex;
		gap: var(--spacing-md);
		align-items: center;
		padding: var(--spacing-xs);

		.flag {
			display: none;
		}

		@include desktop {
			.flag {
				display: block;
				width: 100%;
				height: 32px;
				flex-shrink: 1;
				border-radius: var(--border-radius-md);
			}
		}
	}
</style>
