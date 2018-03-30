const { rl } = require('../core/libs');
const util = require('util'); // to get console available to show more that 100 items of array

/**
 * Returns Fibonacci row
 *
 * @param {int} max - Max value
 * @param {Array} [cache]
 * @returns {*|number[]}
 */
function fibMax(max, cache) {
    const c = cache || [0, 1, 1];
    const next = c[c.length - 1] + c[c.length - 2];

    if (next > max) {
        return c;
    }

    c.push(next);
    return fibMax(max, c);
}


function ask(question) {
    rl.question(question || 'Enter the max number we count Fibonacci row for: ', (answer) => {
        const input = parseInt(answer, 10);

        if (Number.isNaN(input)) {
            ask('Can not get a number, try again: ');
        } else {
            console.log(util.inspect(fibMax(input), { maxArrayLength: null }));

            // shutdown
            rl.close();
            process.exit();
        }
    });
}

ask();

