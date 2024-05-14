<div class="static-layout">
	<div>
		<slot />
	</div>
</div>

<style lang="scss">
	.static-layout {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow-y: auto;

		div {
			max-width: 800px;
			width: 100%;
			margin: 0 auto;
			padding: 68px 32px 32px;
		}
	}
</style>
