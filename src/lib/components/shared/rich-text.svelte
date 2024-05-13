<script lang="ts">
	import { type Document } from '@contentful/rich-text-types';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	export let document: Document;

	const options = {
		renderNode: {
			// [BLOCKS.UL_LIST]: (node: NodeData, next: Next) =>
			// 	`<ul>${next(node.content)}</ul>`,
		}
	};
</script>

<div>{@html documentToHtmlString(document, options)}</div>
