import LinkedList from '../LinkedList/LinkedList';

export default class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return !this.linkedList.head;
    }

    /**
     * 返回队列第一个元素
     * @return {*}
     */
    peek() {
        if (!this.linkedList.head) {
            return null;
        }
        return this.linkedList.head.value;
    }

    /**
     * 队列尾部插入元素
     * @param {*}
     */
    enqueue(value) {
        this.linkedList.append(value);
        return this;
    }

    /**
     * 队列头部删除元素
     * @return {*}
     */
    dequeue() {
        const removeHead = this.linkedList.deleteHead();
        return removeHead ? removeHead.value : null;
    }

    /**
     * @param [callback]
     * @return {string}
     */
    toString(callback) {
        return this.linkedList.toString(callback);
    }
}