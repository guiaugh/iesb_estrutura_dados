class Set {
    constructor() {
        this.items = {};
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    has(element) {
        return element in this.items;
    }

    clear(element) {
        this.items = {};
    }

    size(element) {
        return Object.keys(this.items).length;
    }

    sizeLegacy() {
        let count = 0;
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }

    values(element) {
        return Object.values(this.items);
    }

    valuesLegacy() {
        let values = [];
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                values.push(key);
            }
        }
        return values;
    }

    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach((value) => unionSet.add(value));
        otherSet.values().forEach((value) => unionSet.add(value));
        return unionSet;
    }

    intersection(otherSet) {
        const IntersectionSet = new Set();
        const values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                IntersectionSet.add(values[i])
            }

        }
        return IntersectionSet;
    }

    otherIntersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallSet = otherValues;

        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallSet = values;
        }

        smallSet.forEach((value) => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        })
        return intersectionSet;
    }
}

/*const set = new Set();
set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());
console.log(set.sizeLegacy());
set.add(2);
console.log(set);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());
console.log(set.sizeLegacy());
console.log(set.delete(1));
console.log(set.values());
console.log(set.delete(2));
console.log(set.values());*/


/*const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
console.log(setA.values())

const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);
console.log(setB.values())

const unionAB = setA.union(setB)
console.log(unionAB.values())*/

/*const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
console.log(setA.values())

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
setB.add(1);
console.log(setB.values())

const IntersectionAB = setA.intersection(setB);
console.log(IntersectionAB.values())*/

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);
setA.add(5);
setA.add(6);
console.log(setA.values())

const setB = new Set();
setB.add(4);
setB.add(6);
console.log(setB.values())

const IntersectionAB = setA.otherIntersection(setB);
console.log(IntersectionAB.values());