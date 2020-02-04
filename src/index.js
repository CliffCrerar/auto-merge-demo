
import './style.scss';
import { render, html } from 'lit-html';

// UIkit.use(Icons);

const main = html`
	<nav>
		<h3>Auto merge demo	</h3>
	</nav>
	<main class="app-element container">
		main
	</main>`

render(main,document.body)