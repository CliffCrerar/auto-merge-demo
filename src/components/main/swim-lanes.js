import { html } from 'lit-html'

const swimLanes = () => {
	const lanes = [
		'sw-1','sw-2','sw-3','sw-4',
	]
	return lanes.map(
		(sw,idx) => (
			(s) => html`
			<div id="sw-${idx}" 
				class="border-left h-100 position-relative pl-5 pr-5" 
				style="flex:1">
				<h5 class="text-center m-0">${ idx }</h5>
				<button id="addbtn-${idx}" class="w-100 add-btn">+</button>
			</div>
			`
		)(sw)
	)
}



export default swimLanes;