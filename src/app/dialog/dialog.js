/**
 * App dialog
 */

// @ts-nocheck

import { html } from 'lit-html';

let val = ''

export default html`
	<style>
		dialog {
			width: 500px;
			top: 30%;
			left: 30%;
		}
	</style>
	<div class="dialog text-center w-100" style="display: none">
		<label for="#cardnameinput">Enter Name for Card</label>	
		<input 
			type="text" 
			id="cardnameinput" 
			name="card-name-input" 
			class="input" 
			.value=${val }>
		<label 
			for="#carddescinput">Card Description</label>
		<textarea 
			id="carddescinput" 
			name="description">
		</textarea>
			<button 
				@click=${onOkBtnClick } 
				type="button" 
				class="w-100">Ok</button>
			<button 
				@click=${onCancelBtnClick } 
				type="reset" 
				class="w-100">cancel</button>
	</div>
`

val = function (v) {
	let value
	console.log('v', v);
}

function onOkBtnClick() {
	console.log('Click ok');
	const inputValue = getValue();
}

function onCancelBtnClick() {
	console.log('Click Cancel');
}

function getValue() { return byName('card-name-input')[ 0 ].value; }

function inputValid() {
	return getValue() !== '';
}
