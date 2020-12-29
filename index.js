class Input {
    constructor(node) {
        this.node = node;
    }
    get value() {
        return this.node.value;
    }
    set value(value) {
        this.node.value = value;
    }
    append(char) {
        this.value = this.value + char;
    }
    slice() {
        this.value = this.value.slice(0, -1);
    }
    clear() {
        this.value = null;
    }
}

class Button {
    constructor(node) {
        this.node = node;
        this.action = this.node.dataset.action || null;
        this.caption = this.action ?? this.node.innerHTML;
    }
}

const evalExpr = (expr) => math.evaluate(expr);

const input = new Input(document.querySelector('.input'));

document.querySelectorAll('.btn').forEach((node) => {
    const btn = new Button(node);

    const actions = {
        clearInput: () => input.clear(),
        removeLast: () => input.slice(),
        default: () => input.append(btn.caption),
        getResult: () => (input.value = evalExpr(input.value)),
    };

    node.onclick = actions[btn.action] || actions.default;
});

document.querySelectorAll('.tool').forEach(
    (btn) =>
        (btn.onclick = {
            copy: () => {
                if (!input.value) return;
                input.node.select();
                document.execCommand('copy');
            },
        }[btn.dataset.action])
);
