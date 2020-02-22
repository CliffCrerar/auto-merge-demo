/**
 * App Assembly
 */

import './lib/dom';
import './lib/rad/rad-utils.css';
import './lib/sk/skeleton.css';
import './lib/sk/skeleton.css';
import app from './app';
import {render} from 'lit-html';
process.env.NODE_PATH = [ './' ].join(require('os').platform() === 'win32' ? ';' : ':');

const content = {
	nav:{
		brand: 'Demo: Auto-Merge'
	},
	header:{
		title: "Header Title"
	},
	main:{
		
	},
	footer:{
		title: "Footer title"
	}
	
}


render(app(content),document.body);
