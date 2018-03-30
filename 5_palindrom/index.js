const { rl } = require('../core/libs');

function ask(question) {
    rl.question(question || 'Enter a sequence of symbols: ', (s) => {
        let r = '';

        let i = s.length - 1;
        let k = 0;
        while (i > k) {
            if (s.charAt(k++) !== s.charAt(i--)) {
                r = ' not';
                break;
            }
        }

        console.log(`"${s}" is${r} a palindrome`);

        // shutdown
        rl.close();
        process.exit();
    });
}

ask();
