const { rl } = require('../core/libs');
const util = require('util'); // to get console available to show more that 100 items of array

function ask(question) {
    rl.question(question || 'Enter the max number we count primes to: ', (answer) => {
        const cast = parseInt(answer, 10);

        if (Number.isNaN(cast) || cast <= 1) {
            ask('The minimum number is 2. Try again: ');
        } else {
            // sieve of Eratosthenes
            const arr = [];
            let i;

            // init a range 1 ... cast
            for (i = 2; i <= cast; i++) {
                arr[i] = true;
            }

            let p = 2;
            do {
                for (i = 2 * p; i <= cast; i += p) {
                    arr[i] = false;
                }

                for (i = p + 1; i <= cast; i++) {
                    if (arr[i]) break;
                }

                p = i;
            } while (p * p <= cast);

            const result = [];
            for (i = 0; i < arr.length; i++) {
                if (arr[i]) {
                    result.push(i);
                }
            }

            console.log(util.inspect(result, { maxArrayLength: null }));

            // shutdown
            rl.close();
            process.exit();
        }
    });
}

ask();

console.log('test');

