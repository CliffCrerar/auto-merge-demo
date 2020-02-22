/**
 * Swim lanes
 */

import './_swim-lanes.scss';
import { html } from 'lit-html';

function addBtnClick(ev) {
	const
		swimLaneNo = ev.target.id.split('-')[ 1 ],
		cardNo = ev.target.nextElementSibling.children.length,
		cardId = `card-${ swimLaneNo }-${ cardNo }`,
		card = html`
		
			<div 
				class="card" 
				id="${cardId }">
				<input 
					name=${cardId } 
					focus
					value="new card"/>
				<small></small>
			</div>
			`
	console.log('card: ', card);
	console.log('ev.target.nextElementSibling: ', ev.target.nextElementSibling.children);
	Promise.resolve(
		(() => ev.target.nextElementSibling.innerHTML += card.getHTML())()
	)
		.then(() => {
		})
}

const SwimLanes = () => {
	const lanes = [
		'sw-1', 'sw-2', 'sw-3', 'sw-4',
	]
	return lanes.map(
		(sw, idx) => (
			(s) => html`
			<div id="sw-${idx }" 
				class="border-left h-100 position-relative pl-5 pr-5" 
				style="flex:1">
				<h5 class="text-center m-0">${ idx }</h5>
				<button 
					@click=${addBtnClick } 
					id="addbtn-${ idx }" 
					class="w-100 add-btn">+</button>
				<div id="card-container-sw-${idx }">
				</div>
			</div>
			`
		)(sw)
	)
}



export default SwimLanes;