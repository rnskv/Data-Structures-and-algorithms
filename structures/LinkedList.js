console.log('LinkedList connect');
class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null
        this.length = 0;
    }

    print() {
        let currentNode = this.root;
        let result = `${currentNode.value} -> `;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
            result += `${currentNode.value} -> `
        }
        console.log(result + 'null');
    }

    size() {
        return this.length;
    }

    findLast() {
        let currentNode = this.root;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    indexOf(value) {
        let currentNode = this.root;
        let index = 0;
        while (currentNode) {
            index++;
            if (currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.nextNode;
        }
        return -1;
    }

    get(index) {
        let currentNode = this.root;
        while (index--) {
            console.log('Get on index', index);
            if (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            } else {
                return null
            }
        }
        return currentNode;
    }

    find(value) {
        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.value === value) {
                console.log('Find node with value ' + value);
                return currentNode;
            }
            currentNode = currentNode.nextNode;
        }
        return null;
    }

    add(value) {
        if (this.size() === 0) {
            this.root = new Node(value);
        } else {
            this.findLast().nextNode = new Node(value);
        }

        return ++this.length;
    }

    remove(index) {
        list.get(index - 1).nextNode = list.get(index + 1);

        return --this.length;
    }

}

const list = new LinkedList();

list.add(3);
list.add(7);
list.add(5);
list.add(8);

list.print();

console.log('Node with value 5 is ', list.find(5));

console.log('Node with value 5 at position', list.indexOf(5));

console.log('Get node with index 4', list.get(3));

console.log('Remove node with index 1', list.remove(1));

console.log('Linked list size', list.size());

list.print();
