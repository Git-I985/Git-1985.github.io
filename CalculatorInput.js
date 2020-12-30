class CalculatorInput {
    constructor(node) {
        this.node = node;
    }

    get value() {
        return this.node.innerHTML;
    }

    set value(value) {
        this.node.innerHTML = value;
    }

    append(char) {
        this.node.append(char);
    }

    slice() {
        this.value = this.value.slice(0, -1);
    }

    clear() {
        this.value = null;
    }
}

export default CalculatorInput;
