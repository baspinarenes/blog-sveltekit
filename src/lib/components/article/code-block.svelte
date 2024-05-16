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
		type LanguageType
	} from 'svelte-highlight/languages';
	import { Icon } from '$lib/ui-kit';

	export let lang: string;
	export let text: string;
	export let file: string;
	export let raw: string;
	export let filename: string;
	export let lineNumber: boolean = true;

	$: [language, fileName] = lang.split(/\s/);

	$: languageFile =
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
			plaintext
		}[language] as LanguageType<string>) || plaintext;

	console.log('language', language);

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
	<div class="code">
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
			<CopyButton content={text} />
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

<!-- 
 <div className={twMerge("border-x border border-gray-200 rounded-lg overflow-hidden mb-6", className)}>
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-lg border-b border-gray-200 bg-gray-50 py-1.5 pl-4 pr-2">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 lg:h-4 lg:w-4 rounded-full bg-gray-200" />
            <span className="h-2.5 w-2.5 lg:h-4 lg:w-4 rounded-full bg-gray-200" />
            <span className="h-2.5 w-2.5 lg:h-4 lg:w-4 rounded-full bg-gray-200" />
          </span>
          <p className="m-0 text-xs font-medium select-none">{title}</p>
        </div>
        <CopyButton code={code} language={language} />
      </div>
      <SyntaxHighlighter
        language={language}
        style={coy}
        showLineNumbers={true}
        customStyle={{ margin: 0, padding: 0 }}
        lineNumberStyle={{ marginRight: 4, marginBottom: 1 }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>

 -->

<style lang="scss">
	.code-result {
		width: 100%;
		position: relative;
		border-radius: 0 0 12px 12px;
		border: 1px solid var(--border-color);
		padding: 12px 46px 12px 12px;
		margin-top: -35px;
		margin-bottom: 32px;
		background-color: #f9fafb;
		z-index: 20;

		.bug-icon {
			position: absolute;
			top: 10px;
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

		&:has(+ pre .code-result) {
			& > *:first-child {
				border-bottom-left-radius: 0 !important;
				border-bottom-right-radius: 0 !important;
				margin-bottom: 15px !important;
			}
		}

		.header {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 20px;
			background-color: #f9fafb;
			padding: 6px 8px 6px 16px;
			border-bottom: 1px solid #e5e7eb;

			.bullets {
				display: flex;
				gap: 4px;

				span {
					display: inline-block;
					width: 16px;
					height: 16px;
					border-radius: 50%;
					background-color: #e5e7eb;
				}
			}

			.file-name {
				font-size: 14px;
				color: #1f2937;
				margin-right: auto;
				line-height: 0;
			}
		}

		.body {
			:global(td:last-child) {
				padding-left: 0;
			}
		}
	}

	.code {
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
