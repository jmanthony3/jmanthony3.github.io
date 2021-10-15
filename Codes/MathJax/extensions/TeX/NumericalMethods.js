MathJax.Hub.Config({
	TeX: {
		Macros: {
			angstrom: "{\\mathring{A}}",
			burgers: "{\\vec{b}}",
			degree: "{^{\\circ}}",
			degreeC: "{^{\\circ}C}",
			degreeF: "{^{\\circ}F}",
			converge: ["{\\mathcal{O}({#1})}", 1],
		}
	}
});

MathJax.Ajax.loadComplete("https://jmanthony3.github.io/Codes/MathJax/extensions/TeX/NumericalMethods.js");