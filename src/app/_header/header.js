/**
 * Header Index
 */
import { html } from 'lit-html';

export default (content) => {
	console.log('content: ', content);
	const { title } = content;
	return html`
		<header class="text-center m-5">
			<h4>${title }</h4>
		</header>
`}