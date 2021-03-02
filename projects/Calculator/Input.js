class Input {
    constructor(node) {
        this.node = node;
        this.node.focus();
        this.node.onblur = this.focus.bind(this);
    }

    get value() {
        return this.node.innerHTML;
    }

    set value(value) {
        this.node.innerHTML = value;
    }

    append(char) {
        this.value += char;
    }

    slice() {
        this.value = this.value.slice(0, -1);
    }

    clear() {
        this.value = null;
    }

    focus() {
        this.node.focus();
    }
}

export default Input;
