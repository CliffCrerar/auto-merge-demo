/**
 * CARD NAME Dialog
 */

import { html } from 'lit-html';
export default html`
	<style>
		dialog{
			top: 30%;
			left: 30%;
		}
	</style>
	<div class="dialog text-center">
		<label for="#cardnameinput">Enter Name for Card</label>
		<input type="text" id="cardnameinput" name="card-name-input" class="input">
			<button type="button" class="w-100">Ok</button>
			<button type="reset" class="w-100">cancel</button>
	</div>
`
const dialogContainer = byID('#dialog');
