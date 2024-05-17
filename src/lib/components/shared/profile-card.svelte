<script>
	import config from '$lib/blog.config';
	import Logo from './logo.svelte';

	export let center = false;
	export let show = 'all';
</script>

<div class="profile-card {show}" class:center>
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

		&.desktop {
			display: none;

			@include desktop {
				display: flex;
			}
		}

		&.mobile {
			@include desktop {
				display: none;
			}
		}

		&.center {
			justify-content: center;
		}

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
