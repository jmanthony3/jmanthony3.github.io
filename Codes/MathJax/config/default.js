MathJax.Ajax.config.path['Extra'] = 'https://jmanthony3.github.io/Codes/MathJax/extensions/TeX',
MathJax.Hub.Config({
	TeX: {
		equationNumbers: {
			autoNumber: 'AMS'
		},
		extensions: [
			'[Extra]/NumericalMethods.js',
			'[Extra]/Taylor.js',
		]
	},
	tex2jax: {
		inlineMath: [['$', '$'], ['\\(', '\\)']],
		blockMath: [['$$', '$$'], ['\\[', '\\]']]
	},
});

MathJax.Ajax.loadComplete("https://jmanthony3.github.io/Codes/MathJax/config/default.js");