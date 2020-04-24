class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    prepend(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
}

const dobuleLinkedList = new DoubleLinkedList();

dobuleLinkedList.add(1)
dobuleLinkedList.add(2)
dobuleLinkedList.add(3)
dobuleLinkedList.add(4)
dobuleLinkedList.prepend(5)

