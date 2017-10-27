let backspace = (text) => {
    if (typeof text !== 'string') {
        console.error('Backspace.js only works with strings.');
        return;
    } else {
        text = text.replace(/(\r\n|\n|\r)/gm, " ");

        return text;
    }
}

module.exports = backspace;