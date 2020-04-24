class Comparator {
    constructor(compareFunction) {
        this.compare = compareFunction || Comparator.defaultCompareFunction;
    }

    /**
     * 默认比较函数，只接收字符串和数字作为参数
     * @param {(string|number)} a
     * @param {(string|number)} b
     * @returns {number}
    */
    static defaultCompareFunction(a, b) {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    }

    /**
     * 比较两个参数是否相等
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */

    equal(a, b) {
        return this.compare(a, b) === 0;
    }

    /**
     * 小于比较
     */
    lessThan(a, b) {
        return this.compare(a, b) < 0;
    }

    /**
     * 大于比较
     */

    greaterThan(a, b) {
        return this.compare(a, b) > 0;
    }

    /**
     * 小于等于比较
     */
    lessThanOrEqual(a, b) {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    /**
     * 大于等于比较
     */
    greaterThanOrEqual(a, b) {
        return this.greaterThan(a, b) || this.equal(a, b);
    }

    /**
     * 反转比较顺序
     */
    reverse() {
        const originCompare = this.compare;
        this.compare = (a, b) => originCompare(b, a);
        return this;
    }
}