MathJax.Hub.Config({
	TeX: {
		Macros: {
			angstrom: "{\\text{\\AA}}",
			burgers: "{\\vec{b}}",
			degreeC: "{^{\\circ}C}",
			degreeF: "{^{\\circ}F}",
			converge: ["{\\mathcal{O}( {#1} )}", 1],
		}
	}
});

MathJax.Ajax.loadComplete("https://jmanthony3.github.io/Codes/MathJax/extensions/TeX/NumericalMethods.js");