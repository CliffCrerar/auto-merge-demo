/**
 * App Assembly
 */

const nodePath = [ './' ].join(require('os').platform() === 'win32' ? ';' : ':');

process.env.NODE_PATH = nodePath;

// import 'src/app/lib/dom.js';