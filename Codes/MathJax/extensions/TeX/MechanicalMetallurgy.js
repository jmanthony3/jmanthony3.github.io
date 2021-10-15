MathJax.Hub.Config({
	TeX: {
		Macros: {
			angstrom: "{\\mathring{A}}",
			burgers: "{\\vec{b}}",
			degree: "{^{\\circ}}",
			degreeC: "{^{\\circ}C}",
			degreeF: "{^{\\circ}F}",
			ludwikHollomann: ["{{#1} + {#2}{#3}^{{#4}}}", 4],
			millerCoords: ["{{#1}{#2}{#3}}", 3],
			millerCoordsHCP: ["{{#1}{#2}{#3}{#4}}", 4],
			millerVector: ["{[{#1}{#2}{#3}]}", 3],
			millerVectorHCP: ["{[{#1}{#2}{#3}{#4}]}", 4],
			millerVectorFamily: ["{<{#1}{#2}{#3}>}", 3],
			millerVectorFamilyHCP: ["{<{#1}{#2}{#3}{#4}>}", 4],
			millerPlane: ["{({#1}{#2}{#3})}", 3],
			millerPlaneHCP: ["{({#1}{#2}{#3}{#4})}", 4],
			millerPlaneFamily: ["{\\\\\\{{#1}{#2}{#3}\\\\\\}}", 3],
			millerPlaneFamilyHCP: ["{\\\\\\{{#1}{#2}{#3}{#4}\\\\\\}}", 4],
			strainTensor: ["{\\begin{bmatrix}\\frac{1}{2{#7}}[{#1} - {#8}({#2} + {#3}), \\frac{{#4}}{2{#9}}, \\frac{{#5}}{2{#9}} \\\\ \\frac{{#4}}{2{#9}}, \\frac{1}{2{#7}}[{#2} - {#8}({#2} + {#3}), \\frac{{#6}}{2{#9}} \\\\ \\frac{{#5}}{2{#9}}, \\frac{{#6}}{2{#9}}, \\frac{1}{2{#7}}[{#3} - {#8}({#1} + {#2})\\end{bmatrix}}", 9],
			stressTensor: ["{\\begin{bmatrix}{#1}, {#4}, {#5} \\\\ {#4}, {#2}, {#6} \\\\ {#5}, {#6}, {#3}\\end{bmatrix}}", 6],
			trueStrain: ["{\ln(1 + {#1})}", 1],
			trueStress: ["{{#1}(1 + {#2})}", 2],
		}
	}
});

MathJax.Ajax.loadComplete("https://jmanthony3.github.io/Codes/MathJax/extensions/TeX/MechanicalMetallurgy.js");