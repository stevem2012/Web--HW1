class FormulaCalculator {
    constructor() {
        this.inputs = {};
        this.formulaElements = document.querySelectorAll('formula');
        this.initInputs();
        this.initFormulas();
        this.setupEventListeners();
    }

    initInputs() {
        document.querySelectorAll('input[type="number"]').forEach(input => {
            this.inputs[input.id] = 0;
            input.addEventListener('input', () => this.updateInput(input));
        });
    }
    
    initFormulas() {
        this.formulaElements.forEach(formula => {
            formula.setAttribute('readonly', 'true');
            this.evaluateFormula(formula);
        });
    }

    updateInput(input) {
        this.inputs[input.id] = parseFloat(input.value) || 0;
        this.updateAllFormulas();
    }

    evaluateFormula(formula) {
        const expression = formula.getAttribute('evaluator');
        try {
            const result = this.calculateExpression(expression);
            formula.textContent = result;
        } catch (e) {
            formula.textContent = 'Invalid Formula';
        }
    }
    

                                    
    calculateExpression(expression) {
        const vars = Object.keys(this.inputs);
        const values = vars.map(varName => this.inputs[varName]);
        const func = new Function(...vars, `return ${expression};`);
        return func(...values);
    }

    updateAllFormulas() {
        this.formulaElements.forEach(formula => this.evaluateFormula(formula));
    }
}

new FormulaCalculator();