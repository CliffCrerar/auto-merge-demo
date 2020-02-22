/*
 * Main Application
 */
import nav from './_nav';
import header from './_header';
import main from './_main';
import footer from './_footer';
import { html } from 'lit-html';

const app = (content) => html`
	${nav(content.nav) }
	${header(content.header) }
	${main(content.main) }
	${footer(content.footer) }	
`
export default app;