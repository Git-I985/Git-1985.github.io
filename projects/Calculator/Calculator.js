import Input from './Input.js';
import Button from './Button.js';
import Validator from './Validator.js';

class Calculator {
    constructor() {
        this.input = new Input(document.querySelector('.input'));
        this.validator = new Validator();
        this.ButtonNodes = document.querySelectorAll('.btn');

        // this.input.node.onkeypress = this.inputHandler.bind(this);
        this.input.node.onkeydown = this.inputHandler.bind(this);
        this.input.node.oncopy = () => false;
        this.input.node.onpaste = () => false;

        this.initButtons();
    }

    evaluate(expression) {
        return math.evaluate(expression);
    }

    getResult() {
        try {
            this.input.value = this.evaluate(this.input.value);
        } catch {
            this.input.clear();
        }
    }

    initButtons() {
        this.ButtonNodes.forEach((node) => {
            const btn = new Button(node);
            const actions = {
                clearInput: () => this.input.clear(),
                removeLast: () => this.input.slice(),
                default: () => this.input.append(btn.caption),
                getResult: () => this.getResult(),
            };
            node.onclick = actions[btn.action] || actions.default;
        });
    }

    inputHandler(action) {
        if (action.altKey || action.shiftKey || action.ctrlKey) {
            console.log('here');
            return true;
        }

        action.preventDefault();

        if (action.key === 'Enter') {
            this.getResult();
            return true;
        }

        if (action.key === 'Backspace') {
            this.input.slice();
            return true;
        }

        const char = action.key;
        console.log(char);
        if (this.validator.validate(char)) this.input.append(char);
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
