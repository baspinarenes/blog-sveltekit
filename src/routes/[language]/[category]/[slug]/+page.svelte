<script>
	import { t } from '$lib/i18n';
	import { page } from '$app/stores';

	$: category = $page.params.category;
	$: slug = $page.params.slug;
</script>

<section>
	<h1>{$t(`common.navigation.${category}`)}</h1>
	<h1>{slug}</h1>
</section>
