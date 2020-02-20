/**
 * Component index
 */
import { render, html } from 'lit-html';
import header from './_header'
import swimLanes from './swimlanes/_swim-lanes';
import footer from './footer';

const sw = swimLanes();

const content = () => html`
	<div
		id="sw-container"
		class="d-flex border-right"
		style="flex: 1;" >
		${sw }
	</div>
`
export { content, header, footer }