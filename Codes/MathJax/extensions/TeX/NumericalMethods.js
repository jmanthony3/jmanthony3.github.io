MathJax.Hub.Config({
	TeX: {
		Macros: {
			angstrom: "{\\text{\\AA}}",
			burgers: "{\\vec{b}}",
			converge: ["{\\mathcal{O}( {#1} )}", 1],
			degreeC: "{^{\circ}C}",
			degreeF: "{^{\circ}F}",
		}
	}
});

MathJax.Ajax.loadComplete("https://jmanthony3.github.io/Codes/MathJax/extensions/TeX/NumericalMethods.js");