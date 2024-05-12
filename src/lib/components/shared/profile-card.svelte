<script>
	import config from '$lib/blog.config';
	import Logo from './logo.svelte';
</script>

<div class="profile-card">
	<Logo />
	<div>
		<h3>{config.author.name}</h3>
		<summary>{config.author.title}</summary>
	</div>
</div>

<style lang="scss">
	.profile-card {
		display: flex;
		gap: var(--spacing-sm);
		align-items: center;

		& > div {
			display: flex;
			flex-direction: column;
			gap: 0;

			h3 {
				font-size: 14px;
				margin: 0;
			}

			summary {
				font-size: 12px;
			}
		}
	}
</style>
