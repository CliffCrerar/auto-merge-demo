/**
 * Footer
 */

import { html } from "lit-html";

export default (content) => {
	console.log('content: ', content);
	const {title} = content;
	return html`
		<footer>
			<h4 class="text-center">${title}</h4>
		</footer>
`}