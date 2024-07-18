<script lang="ts">
	import CopyButton from './copy-button.svelte';
	import github from 'svelte-highlight/styles/github';
	import { Highlight, LineNumbers } from 'svelte-highlight';
	import {
		typescript,
		bash,
		javascript,
		css,
		dockerfile,
		go,
		http,
		json,
		scss,
		java,
		kotlin,
		swift,
		yaml,
		shell,
		plaintext,
		cpp,
		type LanguageType
	} from 'svelte-highlight/languages';
	import { Icon } from '$lib/ui-kit';

	export let lang: string; // metadata
	export let text: string;
	export let lineNumber: boolean = true;

	let language: string;
	let fileName: string;
	let languageFile: LanguageType<string>;

	$: {
		language = lang.split(/\s/)[0];
		fileName = lang.split(/\s/)[1];
		languageFile =
			({
				typescript,
				javascript,
				bash,
				css,
				dockerfile,
				go,
				http,
				json,
				scss,
				java,
				kotlin,
				swift,
				yaml,
				shell,
				plaintext,
				cpp
			}[language] as LanguageType<string>) || plaintext;
	}

	let TypelessLineNumbers = LineNumbers as any;
</script>

<svelte:head>
	{@html github}
</svelte:head>

{#if language === 'result'}
	<div class="code-result">
		<Highlight language={languageFile} code={text} />
		<div class="bug-icon">
			<Icon name="bug" size={22} />
		</div>
	</div>
{:else if language === ''}
	<div class="code-plain">
		<Highlight language={languageFile} code={text} />
	</div>
{:else}
	<div class="code-block">
		<div class="header">
			<div class="bullets">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<span class="file-name">{fileName}</span>
			<CopyButton {text} />
			<div class="icon-container">
				<Icon name={language} size={20} />
			</div>
		</div>
		<div class="body">
			<Highlight
				lang={language}
				langtag
				language={languageFile}
				code={text}
				let:highlighted
			>
				{#if lineNumber}
					<TypelessLineNumbers
						highlightedLines={[]}
						{highlighted}
						hideBorder
						--highlighted-background="#e5e7eb"
					/>
				{/if}
			</Highlight>
		</div>
	</div>
{/if}

<style lang="scss">
	.code-result {
		width: 100%;
		position: relative;
		border-radius: 0 0 12px 12px;
		border: 1px solid var(--border-color);
		padding: 0 46px 0 12px;
		margin-top: -35px;
		margin-bottom: 32px;
		background-color: #f9fafb;
		z-index: 20;

		.bug-icon {
			position: absolute;
			bottom: 16px;
			right: 18px;
			z-index: 10;
			color: #94a3b8;
		}
	}

	.code-block {
		display: flex;
		flex-direction: column;
		width: 100%;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
		margin: 32px 0;
		overflow: hidden;

		&:has(+ .code-result) {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		.header {
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #f9fafb;
			padding: 6px 16px 6px 16px;
			border-bottom: 1px solid #e5e7eb;

			.bullets {
				display: flex;
				gap: 4px;
				margin-right: 12px;

				span {
					display: inline-block;
					width: 16px;
					height: 16px;
					border-radius: 50%;
					background-color: #e5e7eb;
				}
			}

			.icon-container {
				&:empty {
					display: none;
				}
			}

			.file-name {
				font-size: 14px;
				color: #1f2937;
				margin-right: auto;
			}
		}

		.body {
			:global(div div) {
				@include scroll-bar(6px, 6px);
			}

			:global(td:last-child) {
				padding-left: 0;
			}
		}
	}

	.code-plain {
		margin: 32px 0;

		:global(pre code) {
			width: 100%;
			position: relative;
			border-radius: 12px;
			border: 1px solid var(--border-color);
			margin-bottom: 32px;
			background-color: #f9fafb !important;
			overflow: hidden !important;
			white-space: normal !important;
			padding: 20px 30px !important;
		}
	}

	@include desktop {
		.code-block {
			width: 100%;
		}
	}
</style>
