<script lang="ts">
	import { Table } from '$lib/ui-kit';
	import type { Content } from '$lib/types';
	export let entries: Content[];
</script>

<div class="desktop-table-wrapper">
	<Table
		columns={['Year', 'Date', 'Title', '', '']}
		widths={['60px', '60px', '1fr', '100px', '30px']}
		aligns={['left', 'left', 'left', 'center', 'center']}
		groupingColumns={['Year', 'Date']}
		data={entries.map((entry) => [
			entry.publishedAt.getFullYear(),
			entry.publishedAt.getDate() + '/' + entry.publishedAt.getMonth(),
			{ text: entry.title, href: `/${entry.type}/${entry.slug}` },
			'',
			{ text: entry.type, badge: true }
		])}
	/>
</div>

<style lang="scss">
	.desktop-table-wrapper {
		display: none;
	}

	@include desktop {
		.desktop-table-wrapper {
			display: block;
		}
	}
</style>
