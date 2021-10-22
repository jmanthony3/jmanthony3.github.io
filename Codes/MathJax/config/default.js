// MathJax.Ajax.config.path['Extra'] = 'https://jmanthony3.github.io/Codes/MathJax/extensions/TeX';
MathJax.Hub.Config({
	TeX: {
		equationNumbers: {
			autoNumber: 'AMS'
		},
		extensions: [
			'https://jmanthony3.github.io/Codes/MathJax/extensions/TeX/NumericalMethods.js',
			'https://jmanthony3.github.io/Codes/MathJax/extensions/TeX/Taylor.js',
		]
	},
	tex2jax: {
		inlineMath: [['$', '$'], ['\\(', '\\)']],
		blockMath: [['$$', '$$'], ['\\[', '\\]']]
	},
});

MathJax.Ajax.loadComplete("https://jmanthony3.github.io/Codes/MathJax/config/default.js");