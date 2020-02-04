import {html} from 'lit-html'


const swimLanes = () =>{
	const swimLanes = [
		'sw1',
		'sw2',
		'sw2',
	]
	return swimLanes.map(sw=>{
		<div>
			${sw}
		</div>
	})
}

export default swimLanes;