import LinkedList from '../LinkedList/LinkedList'

export default class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }

    /**
     * 判断是否为空
     * @return {boolean}
     */
    isEmpty() {
        return !this.linkedList.head;
    }

    /**
     * @return {*}
     */
    peek() {
        return this.linkedList.head ? this.linkedList.head.value : null;
    }

    /**
     * @param {*} value
     */
    push(value) {
        this.linkedList.prepend(value);
    }

    /**
     * @return {*}
     */
    pop() {
        const removeHead = this.linkedList.deleteHead();
        return removeHead ? removeHead.value : null;
    }

    /**
     * @return {*[]}
     */
    toArray() {
        return this.linkedList
            .toArray()
            .map(node => node.value);
    }

    /**
     * @param [callback]
     * @retrun {string}
     */
    toString(callback) {
        return this.linkedList.toString(callback).toString();
    }
}