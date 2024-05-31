<script lang="ts">
	import { CategoryBadge } from '$lib/components';

	export let widths: string[] = [];
	export let aligns: ('left' | 'right' | 'center')[] = [];
	export let columns = ['Year', 'Date', 'Title', 'Views'];
	export let groupingColumns = ['Year', 'Date'];
	export let data: any[] = [];

	function hasGrouping(rowIdx: number, columnIdx: number) {
		const columnName = columns[columnIdx];
		const isGroupable = groupingColumns.includes(columnName);

		if (!isGroupable) return false;

		const colOfPrevRow = rowIdx > 0 ? data[rowIdx - 1][columnIdx] : '';
		const colOfCurrRow = data[rowIdx][columnIdx];
		const grouping = colOfPrevRow === colOfCurrRow;
		return grouping;
	}
</script>

<div class="table-container">
	<div class="table-head">
		<div class="table-row" style:grid-template-columns={widths.join(' ')}>
			{#each columns as column, columnIdx}
				<div class="table-cell" style:text-align={aligns[columnIdx]}>
					{column}
				</div>
			{/each}
		</div>
	</div>
	<div class="table-body">
		{#each data as row, rowIdx}
			<div class="table-row" style:grid-template-columns={widths.join(' ')}>
				{#each row as column, columnIdx}
					{#if column?.href}
						<a
							class="table-cell"
							href={column.href}
							style:text-align={aligns[columnIdx]}
						>
							{column.text}
						</a>
					{:else if column?.badge}
						<div class="table-cell" style:text-align={aligns[columnIdx]}>
							<CategoryBadge type={column.text} />
						</div>
					{:else}
						<div
							class="table-cell"
							style:border-top={hasGrouping(rowIdx, columnIdx) ? 'none' : ''}
							style:text-align={aligns[columnIdx]}
						>
							{!hasGrouping(rowIdx, columnIdx) ? column : ''}
						</div>
					{/if}
				{/each}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.table-container {
		display: flex;
		width: 100%;
		// margin: 64px 0;
		flex-direction: column;
		font-size: 14px;
		line-height: 18px;
		user-select: none;

		.table-head {
			color: #6b7280;
			font-weight: 500;

			.table-row {
				.table-cell {
					border-top: none;
				}
			}
		}

		.table-row {
			display: grid;

			.table-cell {
				padding: 16px 8px;
				border-top: 1px solid #e7e7e7;

				&:empty {
					padding: 0;
				}

				&:hover {
					border-bottom: none !important;
				}
			}
		}

		.table-body {
			color: #111827;
		}
	}

	@include desktop {
		.table-container {
			.table-row {
			}

			.table-body {
				.table-row {
					&:hover {
						* {
							color: #111827 !important;
						}

						&:has(a):hover a {
							color: blue !important;
						}
					}
				}

				&:hover {
					* {
						color: #c1c1c1 !important;
					}
				}
			}
		}
	}
</style>
