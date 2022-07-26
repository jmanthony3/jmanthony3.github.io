<script type='text/javascript'
	src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS_CHTML'>
</script>
<script type='text/x-mathjax-config'>
	MathJax.Ajax.config.path['Extra'] = 'https://jmanthony3.github.io/Codes/MathJax/extensions/TeX',
	MathJax.Hub.Config({
		TeX: {
			equationNumbers: {
				autoNumber: 'AMS',
			},
			extensions: [
				'[Extra]/MechanicalMetallurgy.js',
				'[Extra]/NumericalMethods.js',
			],
		},
		tex2jax: {
			inlineMath: [['$', '$'], ['\\(', '\\)']],
			blockMath: [['$$', '$$'], ['\\[', '\\]']],
		},
	});
</script>

# Joby M. Anthony III
To view a formal summary of my work and capabilities, please look at my [resume](Documents/Joby_M_Anthony_III.pdf).
If you wish to speak with me or inquire about some of my work, please [email](mailto:jmanthony1@liberty.edu) me at: jmanthony1@liberty.edu

## Papers
1. A. Eisenman, J. Anthony, and D. Satagaj, “A Study in the Use of Elastic Materials in Expandable Containment Units,” Montview Liberty University Journal of Undergraduate Research, vol. 3, no. 1, Jun. 2017, [Online]. Available: https://digitalcommons.liberty.edu/montview/vol3/iss1/1

## Codes
Much of the work I do is automated by scripts and codes for consistency and flexibility with respect to varying input parameters.
The Python packages were primarily written from *Numerical Methods* and *Ordinary/Partial Differential Equations* courses and are used extensively throughout much of other works.
The Integrated Computational Materials Engineering (ICME) repository is a by-product of taking an ICME course while access to the well-standing website () has been denied for future users.
Much of the content in my ICME repository references and collects information, processes, methodologies, and scripts from the original ICME website; however, my repository differs with an as-written "installable" environment that future users might quickly quickly begin calculations without as much manual setup.

### Python Packages
So far, only the `numerical_methods` module is included to the `joby_m_anthony_iii` package, but there exists a thought to later add modules for other subject areas such as: mechanics of materials, mechatronics, or physics.

* [`joby_m_anthony_iii`](https://jmanthony3.github.io/joby_m_anthony_iii/): `pip install joby_m_anthony_iii`

### Various Software
Much of content in the ICME repository (below) borrows methodologies and information from the original ICME website (), but features an ability to setup the Linux environment necessary for bridging calculations between length scales.

* Integrated Computational Materials Engineering ([`ICME`](https://jmanthony3.github.io/ICME/)) *Site under development...*

### iPhone Shortcut Calculators
* [LinearInterpolation](https://www.icloud.com/shortcuts/cb347f070cca4c57b34cc04d12459312): Law of Similar Triangles to find some third data point certain information and two known data points.
* [NewtonRaphson](https://www.icloud.com/shortcuts/438fc8e2e2ae4c37b3e2164491243ebb): Numerical, iterative technique for root-finding problems of single-variable equations.

Each of the shortcuts above depend on [SimpleCalculator](https://www.icloud.com/shortcuts/4009902408694f098318e814cf797826) and [SciCal](https://www.icloud.com/shortcuts/a0cf04611dc74faea74a700687af3ecd) for variable substitution in equations.

<!-- ### MathJax Extensions
- [Mechanical Metallurgy](./Codes/MathJax/extensions/TeX/MechanicalMetallurgy.js)
  - `\angstrom`: $\angstrom$
  - `\burgers`: $\burgers$
  - `\degree`: $\degree$
  - `\degreeC`: $\degreeC$
  - `\degreeF`: $\degreeF$
  - `\ludwikHollomann{\sigma_{0}}{K}{\epsilon}{n}`: $\ludwikHollomann{\sigma_{0}}{K}{\epsilon}{n}$
  - `\millerCoords{\bar{1}}{0}{\frac{1}{2}}`: $\millerCoords{\bar{1}}{0}{\frac{1}{2}}$
  - `\millerCoordsHCP{\bar{1}}{0}{\frac{1}{2}}{z_{1}}`: $\millerCoordsHCP{\bar{1}}{0}{\frac{1}{2}}{z_{1}}$
  - `\millerVector{\bar{1}}{0}{\frac{1}{2}}`: $\millerVector{\bar{1}}{0}{\frac{1}{2}}$
  - `\millerVectorFamily{\bar{1}}{0}{\frac{1}{2}}`: $\millerVectorFamily{\bar{1}}{0}{\frac{1}{2}}$
  - `\millerVectorHCP{\bar{1}}{0}{\frac{1}{2}}{z_{1}}`: $\millerVectorHCP{\bar{1}}{0}{\frac{1}{2}}{z_{1}}$
  - `$\millerVectorFamilyHCP{\bar{1}}{0}{\frac{1}{2}}{z_{1}}$`: $\millerVectorFamilyHCP{\bar{1}}{0}{\frac{1}{2}}{z_{1}}$
  - `\millerPlane{\bar{1}}{0}{\frac{1}{2}}`: $\millerPlane{\bar{1}}{0}{\frac{1}{2}}$
  - `\millerPlaneFamily{\bar{1}}{0}{\frac{1}{2}}`: $\millerPlaneFamily{\bar{1}}{0}{\frac{1}{2}}$
  - `\millerPlaneHCP{\bar{1}}{0}{\frac{1}{2}}{z_{1}}`: $\millerPlaneHCP{\bar{1}}{0}{\frac{1}{2}}{z_{1}}$
  - `\millerPlaneFamilyHCP{\bar{1}}{0}{\frac{1}{2}}{z_{1}}`: $\millerPlaneFamilyHCP{\bar{1}}{0}{\frac{1}{2}}{z_{1}}$
  - `\strainTensor{\sigma_{11}}{\sigma_{22}}{\sigma_{33}}{\tau_{12}}{\tau_{13}}{\tau_{23}}{E}{\nu}{G}`: $\strainTensor{\sigma_{11}}{\sigma_{22}}{\sigma_{33}}{\tau_{12}}{\tau_{13}}{\tau_{23}}{E}{\nu}{G}$
  - `\stressTensor{\sigma_{11}}{\sigma_{22}}{\sigma_{33}}{\tau_{12}}{\tau_{13}}{\tau_{23}}`: $\stressTensor{\sigma_{11}}{\sigma_{22}}{\sigma_{33}}{\tau_{12}}{\tau_{13}}{\tau_{23}}$
  - `\trueStrain{\epsilon}`: $\trueStrain{\epsilon}$
  - `\trueStress{\sigma_{0}}{\epsilon}`: $\trueStress{\sigma_{0}}{\epsilon}$
- [Numerical Methods](./Codes/MathJax/extensions/TeX/NumericalMethods.js)
  - `\converge`: $\converge{h}$
  - `\degree`: $\degree$
  - `\degreeC`: $\degreeC$
  - `\degreeF`: $\degreeF$
  - `\expexpansion`: $\expexpansion$
  - `\rkTwo{t_{k}}{u_{k}}{h}{a}{b}{\lambda}`: $\rkTwo{t_{k}}{u_{k}}{h}{a}{b}{\lambda}$
  - `\rkFour{t_{k}}{u_{k}}{h}`: $\rkFour{t_{k}}{u_{k}}{h}$
  - `\taylor{f}{x}{n}`: $\taylor{f}{x}{n}$
  - `\taylorlog{f}`: $\taylorlog{f}$
  - `\taylorsin{f}`: $\taylorsin{f}$ -->