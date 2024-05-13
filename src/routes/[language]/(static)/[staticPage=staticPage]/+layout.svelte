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

		div {
			max-width: 800px;
			width: 100%;
			margin: 0 auto;
			padding: 60px 32px;
		}
	}
</style>
