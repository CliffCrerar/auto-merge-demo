/**
 * Header Index
 */
import { html } from 'lit-html';

export default (content) => {
	console.log('content: ', content);
	html`
	<header class="text-center m-5">
		<div>Header</div>
	</header>
`}