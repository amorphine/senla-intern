const { rl } = require('../core/libs');

function ask(question) {
    rl.question(question || 'Enter the text: ', (s) => {
        console.log(s.replace(/[+-]?[0-9]+\.?[0-9]?\s?/g, ''));

        // shutdown
        rl.close();
        process.exit();
    });
}

ask();
