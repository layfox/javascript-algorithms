import LinkedListNode from './LinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

export default class LinkedList {
    /**
     * @param {Function} compareFunction
     */
    constructor(compareFunction) {
        this.head = null;
        this.tail = null;
        this.compare = new Comparator(compareFunction);
    }

    /**
     * 
     * @param {*} value 
     */
    append(value) {
        const node = new LinkedListNode(value)
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        return this;
    }
    
    /**
     * 
     * @param {*} value 
     */
    prepend(value) {
        const node = new LinkedListNode(value, this.head);
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        return this;
    }

    contains(value) {
        let node = this.head;
        while(node&&node.value!==value) {
            node = node.next;
        }
        if (node){
            return true;
        }
        return false;
    }

    /**
     * 
     * @param {*} value
     * @return {LinkedListNode}
     */
    delete(value) {
        if (!this.head) {
            return null;
        }

        let deleteNode = null;

        while(this.head&&this.compare.equal(this.head.value, value)) {
            deleteNode = this.head;
            this.head = this.head.next;
        }
        let currentNode = this.head;

        if (currentNode !== null) {
            while(currentNode.next) {
                if (this.compare.equal(current.next.value, value)) {
                    deleteNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }
        if (this.compare(this.tail.value, value)) {
            this.tail = currentNode;
        }
        return deleteNode;
    }

    /**
     * @param {Object} findParams
     * @param {*} findParams.value
     * @param {function} findParams.callback
     * @return {LinkedListNode}
     */
    find({value = undefined, callback = undefined}) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while(currentNode) {
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }

            if (value !== undefined && this.compare.equal(currentNode.value, value)) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    /**
     * @return {LinkedListNode}
     */
    deleteTail() {
        const deleteTail = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return deleteTail;
        }

        let currentNode = this.head;
        while(currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }
        this.tail = currentNode;

        return deleteTail;
    }

    /**
     * @return {LinkedListNode}
     */
    deleteHead() {
        if (!this.head) {
            return null;
        }
        const head = this.head;
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }
        
        return head;
    }

    /**
     * 
     * @param {*[]} values
     * @return  {linkedList}
     */
    fromArray(values) {
        values.forEach(value => this.append(value));

        return this;
    }

    /**
     * @return {LinkedListNode[]}
     */
    toArray() {
        const nodes = [];
        let currentNode = this.head;

        while(currentNode) {
            node.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    /**
     * @param {function} callback
     * @return {string}
     */
    toString(callback) {
        return this.toArray().map(node => node.toString(callback)).toString();
    }

    traverse(fn) {
        let node = this.head;
        while(node) {
            fn && fn(node.value);
            node = node.next;
        }
    }

    reverseTraverse(fn) {
        if (this.tail) {
            let curr = this.tail;
            let prev;
            while(curr!=this.head) {
                prev = this.head;
                while(prev.next!==curr) {
                    prev = prev.next;
                }
                fn && fn(curr.value)
                curr = prev;
            }
            fn&&fn(curr.value)
        }
    }

    /**
     * @return {LinkedList}
     */
    reverse() {
        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while(currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }

        this.tail = this.head;
        this.head = prevNode;

        return this;
    }
}

const linkedList = new LinkedList();