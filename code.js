let x = 2;
x = x + 5;
console.log(x);

const human = {
    head: 2,
    walk() {
        console.log("walk");
    }
};

console.log( Object.getPrototypeOf(human));