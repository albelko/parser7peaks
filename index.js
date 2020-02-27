const express = require('express');
const mercury = require('@postlight/mercury-parser');

const app = express();
const port = 4201;

// Method 'parse' takes query string parameter 'url'.
// Call Mercury library method '.parse' and get parsed article in JSON.
app.get('/parse', (req, res) => {
    const url = req.query.url;

    if (url) {
        mercury.parse(url).then(result => {
            console.log(`🔗 Requested article URL: ${ url }`);
            res.send(result);
        });
    }
});

app.listen(port, () => console.log(`🚀 Parsing server running on port ${ port }!`));
