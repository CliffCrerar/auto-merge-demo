import {html, render} from 'lit-html';
const byID = (elementId) => document.getElementById(elementId);
const byClass = (className) => document.querySelectorAll(className);


export default () => {
	console.log('byClass(addBtn):', byClass('.add-btn'));

	byClass('.add-btn').forEach(btn=>btn.addEventListener('click',addBtnClick))

	function addBtnClick(ev){
		console.log(ev);
		
		console.log('ev.target.id: ', ev.target.id);

		
	}

}
