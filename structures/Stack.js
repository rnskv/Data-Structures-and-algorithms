class Stack {
    constructor() {
        this.list = [];
        this.length = 0;
    }

    push(value) {
        this.list.push(value);
        return ++this.length;
    }

    pop() {
        if (this.length === 0) return;
        this.list.pop();
        return --this.length;
    }

    peek() {
        return this.list[this.length - 1];
    }
}

const stack = new Stack();

stack.push(1);
stack.push(3);
stack.push(3);
stack.push(7);

stack.pop();

console.log('Peek stack:', stack.peek());