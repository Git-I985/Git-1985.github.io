import CalculatorInput from './CalculatorInput.js';
import CalculatorButton from './CalculatorButton.js';

class Calculator {
    constructor() {
        this.input = new CalculatorInput(document.querySelector('.input'));
        this.buttons = document.querySelectorAll('.btn');
        this.initButtons();
    }

    evaluate(expression) {
        return math.evaluate(expression);
    }

    initButtons() {
        this.buttons.forEach((node) => {
            const btn = new CalculatorButton(node);
            const actions = {
                clearInput: () => this.input.clear(),
                removeLast: () => this.input.slice(),
                default: () => this.input.append(btn.caption),
                getResult: () =>
                    (this.input.value = this.evaluate(this.input.value)),
            };
            node.onclick = actions[btn.action] || actions.default;
        });
    }
}

new Calculator();

// document.querySelectorAll('.tool').forEach(
//     (btn) =>
//         (btn.onclick = {
//             copy: () => {
//                 if (!input.value) return;
//                 input.node.select();
//                 document.execCommand('copy');
//             },
//         }[btn.dataset.action])
// );
