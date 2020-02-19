/**
 * Component index
 */
import { render, html } from 'lit-html';
import header from './header/header'
import swimLanes from './main/swim-lanes';
import footer from './footer/footer';

const sw = swimLanes();

const content = () => html`
<div 
	id="sw-container"
	class="d-flex border-right" style="flex: 1;" >
	${sw }
</div>
`
export { content, swimLanes, header, footer } 