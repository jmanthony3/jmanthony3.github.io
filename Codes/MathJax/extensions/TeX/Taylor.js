MathJax.Hub.Config({
	TeX: {
		Macros: {
			expexpansion: "{\\sum_{n=0}^{+\\infty} \\frac{x^{n}}{n!}}",
			taylor: ["{\\sum_{n=0}^{+\\infty} \\frac{{#1}^{(n)} \\left({#2}\\right)}{n!} {\\left( {#3} - {#2} \\right)}^{n}}", 3],
			taylorlog: ["{\\sum_{n=1}^{+\\infty} {(-1)}^{n+1} \\frac{{#1}^{n}}{n}}", 1],
			taylorsin: ["{\\sum_{n=0}^{+\\infty} \\frac{{(-1)}^{n}}{(2n+1)!} {#1}^{2n+1}}", 1]
		}
	}
});

MathJax.Ajax.loadComplete("https://jmanthony3.github.io/Codes/MathJax/extensions/TeX/Taylor.js");