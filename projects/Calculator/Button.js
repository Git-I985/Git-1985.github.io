class CalculatorButton {
    constructor(node) {
        this.node = node;
        this.action = this.node.dataset.action || null;
        this.caption = this.action ?? this.node.innerHTML;
    }
}

export default CalculatorButton;
