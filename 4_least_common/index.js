const { rl } = require('../core/libs');

/**
 * Greatest common divisor
 *
 * @param n1
 * @param n2
 * @returns {*}
 */
function gcd(n1, n2) {
    return n1 % n2 === 0 ? n2 : gcd(n2 % n1, n1);
}

/**
 * Least common multiple
 *
 * @param n1
 * @param n2
 * @returns {number}
 */
function lcm(n1, n2) {
    return (n1 * n2) / gcd(n1, n2);
}

function ask(q, callback) {
    rl.question(q || 'Enter number 1: ', (answer) => {
        const r = parseInt(answer, 10);
        if (r > 0) {
            callback(r);
        } else {
            ask('Try again: ', callback);
        }
    });
}

ask('', (n1) => {
    ask('Enter number 2: ', (n2) => {
        console.log(`LCM is: ${lcm(n1, n2)}`);
        console.log(`GCD is: ${gcd(n1, n2)}`);

        // shutdown
        rl.close();
        process.exit();
    });
});

