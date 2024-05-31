<script lang="ts">
	import { Table } from '$lib/ui-kit';
	import { locale, t } from '$lib/i18n';
	import type { Content } from '$lib/types';
	import CategoryBadge from './category-badge.svelte';
	import { formatDate } from '$lib/helpers';
	import ViewCount from './view-count.svelte';
	import { page } from '$app/stores';
	import ReadingTime from './reading-time.svelte';

	export let entries: Content[];
</script>

<div class="mobile-table-wrapper">
	<div class="entries">
		{#each entries as entry}
			<div class="entry">
				<div class="type">
					<CategoryBadge type={entry.type!} />
				</div>
				<div class="body">
					<div class="title">
						<a href={`/${entry.type}/${entry.slug}`}>{entry.title}</a>
					</div>
					<div class="statistics">
						<span class="date">{formatDate(entry.publishedAt, $locale)}</span>
						<ViewCount
							path={`/${$page.params.language}/${entry.type}/${entry.slug}`}
						/>
						<ReadingTime value={entry.readingMinute} />
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.mobile-table-wrapper {
		display: block;
		margin: 0 -24px;

		.entries {
			display: flex;
			flex-direction: column;

			.entry {
				display: flex;
				gap: 24px;
				border-bottom: 1px solid #e0e0e0;
				padding: 12px 24px;

				.type {
					width: 20px;
					height: 20px;
					flex-shrink: 0;
				}

				.body {
					display: flex;
					flex-direction: column;
					width: 100%;

					.statistics {
						display: flex;
						gap: 8px;
						font-size: 12px;
						color: #666;

						.date {
							margin-right: auto;
						}
					}
				}
			}
		}
	}

	@include desktop {
		.mobile-table-wrapper {
			display: none;
		}
	}
</style>
