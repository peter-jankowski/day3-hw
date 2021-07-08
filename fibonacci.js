
function fib(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return (fib(num-1) + fib(num-2));
    }
}

class Fibonacci {

    fibprint() {
        for(let i = 0; i < 10; i++) {
            console.log(fib(i));
        }
    }
}

let instance1 = new Fibonacci();
instance1.fibprint();