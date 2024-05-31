<script>
	import { t } from '$lib/i18n';
	import config from '$lib/blog.config';
	import { Table } from '$lib/ui-kit';
	import { MobileEntriesTable } from '$lib/components';
	import DesktopEntriesTable from '$lib/components/shared/desktop-entries-table.svelte';

	export let data;

	const { name, age } = config.author;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="home-wrapper">
	<div class="home-page">
		<h1 class="title">{$t('home.title')}</h1>
		<p class="describe">{$t('home.description', { name, age })}</p>
		<h2 class="header">{$t('home.table-title')}</h2>
		<DesktopEntriesTable entries={data.content} />
		<MobileEntriesTable entries={data.content} />
	</div>
</div>

<style lang="scss">
	.home-wrapper {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		overflow-y: auto;
		@include scroll-bar(10px, 6px);

		.home-page {
			display: flex;
			flex-direction: column;
			max-width: 800px;
			width: 100%;
			margin: 0 auto;
			padding: 32px 24px 0;
		}

		.desktop-table-wrapper {
			display: none;
		}

		.describe {
			margin-bottom: 32px;
		}
	}

	@include desktop {
		.home-wrapper {
			.home-page {
				padding: 96px 24px 64px;

				.desktop-table-wrapper {
					display: block;
				}

				.describe {
					margin-bottom: 48px;
				}
			}
		}
	}
</style>
