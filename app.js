const express = require("express");
var cors = require('cors')
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json(), cors());

app.post("/", async function(req, res) {
    let number = getRandom(1, 11);
    if (number <= 6) {
        number = getRandom(1, 4);
        await sleep(number * 1000);
        return res.json(req.body);
    }
    return res.status(500).send('Something broke!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandom(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}