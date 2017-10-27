const bs = require('./backspace');

let testString = `
    <div>
        <h1>Hello, World!</h1>
        <p>
            How are you? I'm pretty good.
            Just need to have all of this backspaced though.
        </p>

        <h1>Enter Backspace.js</h1>
        <p>
            I can do that for you!
        </p>
    </div>
`;

console.log(testString);

bsString = bs(testString);

console.log(bsString);
