MathJax.Hub.Register.StartupHook("TeX Jax Ready", function () {
	MathJax.InputJax.TeX.Definitions.Add({
		Macros: {
			converge: ["{\\mathcal{O}({#1})}", 1],
			degree: "^{\\circ}",
			degreeC: "{^{\\circ}C}",
			degreeF: "{^{\\circ}F}",
			expexpansion: "{\\sum_{n=0}^{+\\infty} \\frac{x^{n}}{n!}}",
			rkTwo: ["{u_{k+1} = {#2} + {#3}[{#4}f'({#1}, {#2}) + {#5}f'({#1} + {#6}{#3}, {#2} + {#6}{#3}f'({#1}, {#2}))]}", 6],
			rkFour: ["{\\begin{split}k_{1} &= {#3}f'({#1}, {#2}) \\\\\\ k_{2} &= {#3}f'({#1} + \\frac{{#3}}{2}, {#2} + \\frac{k_{1}}{2}) \\\\\\ k_{3} &= {#3}f'({#1} + \\frac{{#3}}{2}, {#2} + \\frac{k_{2}}{2}) \\\\\\ k_{4} &= {#3}f'({#1} + {#3}, {#2} + k_{3}) \\\\\\ u_{k+1} &= {#2} + \\frac{1}{6}(k_{1} + 2k_{2} + 2k_{3} + k_{4})\\end{split}}", 3],
			taylor: ["{\\sum_{n=0}^{+\\infty} \\frac{{#1}^{(n)} \\left({#2}\\right)}{n!} {\\left( {#3} - {#2} \\right)}^{n}}", 3],
			taylorlog: ["{\\sum_{n=1}^{+\\infty} {(-1)}^{n+1} \\frac{{#1}^{n}}{n}}", 1],
			taylorsin: ["{\\sum_{n=0}^{+\\infty} \\frac{{(-1)}^{n}}{(2n+1)!} {#1}^{2n+1}}", 1],
		}
	});
});

MathJax.Ajax.loadComplete("https://jmanthony3.github.io/Codes/MathJax/extensions/TeX/NumericalMethods.js");