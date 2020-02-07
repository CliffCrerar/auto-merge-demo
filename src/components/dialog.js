/**
 * CARD NAME Dialog
 */
// @ts-nocheck
import { html } from 'lit-html';

let val = ''

export default html`
	<style>
		dialog{
			top: 30%;
			left: 30%;
		}
	</style>
	<div class="dialog text-center">
		<label for="#cardnameinput">Enter Name for Card</label>	
		<input type="text" id="cardnameinput" name="card-name-input" class="input" .value=${val}>
			<button @click=${onOkBtnClick} type="button" class="w-100">Ok</button>
			<button @click=${onCancelBtnClick} type="reset" class="w-100">cancel</button>
	</div>
`

val = function(v){
	console.log(v);
}


function onOkBtnClick(){
	console.log('Click ok');
	const inputValue = getValue();
}

function onCancelBtnClick(){
	console.log('Click Cancel');
	
}

function getValue(){return byName('card-name-input')[0].value;}

function inputValid() {
	return getValue()!==''
}
