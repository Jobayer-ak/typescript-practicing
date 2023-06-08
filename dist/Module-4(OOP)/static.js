"use strict";
// static
class Counter {
    static increment() {
        return (Counter.counter = Counter.counter + 1);
    }
    static decrement() {
        return (Counter.counter = Counter.counter - 1);
    }
}
Counter.counter = 0;
console.log(Counter.increment()); // 0-1
console.log(Counter.increment()); // 1-2
