class LogicGate {
    constructor(n) {
        this.name = n;
        this.output = null;
    }
    getLabel() {
        return this.name;
    }
    getOutput() {
        this.output = this.performGateLogic();
        return this.output;
    }
}

class BinaryGate extends LogicGate {
    constructor(n) {
        super(n);
        this.pinA = null;
        this.pinB = null;
    }
    getPinA() {
        if (this.pinA == null) {
            return parseInt(prompt(`Enter Pin A input for gate ${this.getLabel()}-->`));
        } else {
            return this.pinA.getFrom().getOutput();
        }
    }
    getPinB() {
        if (this.pinB == null) {
            return parseInt(prompt(`Enter Pin A input for gate ${this.getLabel()}-->`));
        } else {
            return this.pinB.getFrom().getOutput();
        }
    }
    setNextPin(source) {
        if (this.pinA == null) {
            this.pinA = source;
        } else {
            if (this.pinB == null) {
                this.pinB = source;
            } else {
                throw new Error("Cannot Connect: NO EMPTY PINS on this gate");
            }
        }
    }
}

class AndGate extends BinaryGate {
    constructor(n) {
        super(n);
    }
    performGateLogic() {
        var a = this.getPinA();
        var b = this.getPinB();
        if (a == 1 && b == 1) {
            return 1;
        } else {
            return 0;
        }
    }
}
class OrGate extends BinaryGate {
    constructor(n) {
        super(n);
    }
    performGateLogic() {
        var a = this.getPinA();
        var b = this.getPinB();
        if (a == 1 || b == 1) {
            return 1;
        } else {
            return 0;
        }
    }
}

class UnaryGate extends LogicGate {
    constructor(n) {
        super(n);
        this.pin = null;
    }
    getPin() {
        if (this.pin == null) {
            return parseInt(prompt(`Enter Pin input for gate ${this.getLabel()}-->`));
        } else {
            return this.pin.getFrom().getOutput();
        }
    }
    setNextPin(source) {
        if (this.pin == null) {
            this.pin = source;
        } else {
            throw new Error("Cannot Connect: NO EMPTY PINS on this gate");
        }
    }
}

class NotGate extends UnaryGate {
    constructor(n) {
        super(n);
    }
    performGateLogic() {
        if (this.getPin()) {
            return 0;
        } else {
            return 1;
        }
    }
}

class Connector {
    constructor(fGate, tGate) {
        this.fromGate = fGate;
        this.toGate = tGate;
        tGate.setNextPin(this);
    }
    getFrom() {
        return this.fromGate;
    }
    getTo() {
        return this.toGate;
    }
}

function main() {
    g1 = new AndGate("G1");
    g2 = new AndGate("G2");
    g3 = new OrGate("G3");
    g4 = new NotGate("G4");
    c1 = new Connector(g1, g3);
    c2 = new Connector(g2, g3);
    c3 = new Connector(g3, g4);
    console.log(g4.getOutput());
}

main();