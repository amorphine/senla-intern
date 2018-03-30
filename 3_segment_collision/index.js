const { rl } = require('../core/libs');

/**
 * Check if two segments collide
 *
 * @param x1 {number}
 * @param y1 {number}
 * @param x2 {number}
 * @param y2 {number}
 * @param x3 {number}
 * @param y3 {number}
 * @param x4 {number}
 * @param y4 {number}
 * @returns {boolean}
 */

function checkCollision(x1, y1, x2, y2, x3, y3, x4, y4) {
    const a_dx = x2 - x1;
    const a_dy = y2 - y1;
    const b_dx = x4 - x3;
    const b_dy = y4 - y3;
    const s = (-a_dy * (x1 - x3) + a_dx * (y1 - y3)) / (-b_dx * a_dy + a_dx * b_dy);
    const t = (+b_dx * (y1 - y3) - b_dy * (x1 - x3)) / (-b_dx * a_dy + a_dx * b_dy);
    return (s >= 0 && s <= 1 && t >= 0 && t <= 1);
}

function ask(question) {
    rl.question(question || 'Enter segment coordinates. f.e "(0,0)(1,1),(1,0)(0,1)" : ', (answer) => {
        const r = /(\(([+-]?[0-9]*[.]?[0-9]+),?([+-]?[0-9]*[.]?[0-9]+)\))/g;
        const partsInAnswer = answer.match(r);
        if (!partsInAnswer || !partsInAnswer.length === 4) {
            ask('Be careful while typing please. Example: "(0,0)(1,1),(1,0)(0,1)". Try again: ');
        } else {
            const numbers = answer.match(/[+-]?[0-9]*[.]?[0-9]+/g);
            const result = checkCollision.apply(this, numbers);
            console.log(result ? 'Collision detected' : 'No collision detected');

            rl.close();
            process.exit();
        }
    });
}

ask();
