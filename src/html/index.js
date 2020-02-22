module.exports = (mode) => ({
	base: {
		href: '/', target: '_blank',
	},
	minify: {
		collapseWhitespace: true,
		removeComments: true,
		removeRedundantAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true,
		useShortDoctype: true
	},
	meta : require('./index')
})