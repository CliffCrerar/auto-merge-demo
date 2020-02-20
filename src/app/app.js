/*
 * Main Application
 */
import { html } from 'lit-html';

const app = (content)= html`

	
	<main class="app-element container">
		${content() }
	</main>
	<footer class="container w-100 text-center">
		${footer }
	</footer>
	<!-- <div id="dialog" class="dialog-container position-absolute"></div> -->
`
export {main};