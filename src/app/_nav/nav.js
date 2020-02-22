/**
 * NAV
 */

import { html } from "lit-html";

export default (content) => {
	console.log('content: ', content);
	const {brand} = content;
	return html`
		<nav>
			<h3>${brand}</h3>
		</nav>
`}