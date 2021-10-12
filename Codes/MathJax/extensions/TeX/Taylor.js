MathJax.Hub.Config({
	TeX: {
		Macros: {
			expexpansion: ["Macro", "\\sum_{n=0}^{+\\infty} \\frac{x^n}{n!}"],
			taylor: ["Macro","\\sum_{n=0}^{+\\infty} \\frac{{#1}^{(n)} \\left({#2}\\right)}{n!} {\\left( {#3} - {#2} \\right)}^n", 3],
			taylorlog: ["Macro","\\sum_{n=1}^{+\\infty} {(-1)}^{n+1} \\frac{#1^n}{n}", 1],
			taylorsin: ["Macro","\\sum_{n=0}^{+\\infty} \\frac{{(-1)}^n}{(2n+1)!} {#1}^{2n+1}", 1]
		}
	}
});

MathJax.Ajax.loadComplete("https://github.com/jmanthony3/jmanthony3.github.io/tree/master/Codes/MathJax/extensions/TeX/Taylor.js");