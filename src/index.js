
import './style.scss';
import { render, html } from 'lit-html';
import { content, header, footer } from './components'
import ops from './functions'
// UIkit.use(Icons);

const main = html`
	<nav>
		<h3>Demo: Auto-Merge</h3>
	</nav>
	<header class="text-center m-5">
		${header}
	</header>
	<main class="app-element container">
		${content()}
	</main>
	<footer class="container w-100 text-center">
		${footer}
	</footer>
`
render(main, document.body)
document.body.classList.add(
	'd-flex',
	'flex-column',
)

const mh = document.querySelector('main').clientHeight
const swContainer = document.getElementById('sw-container');
swContainer.style.height = `${mh}px`;

ops();