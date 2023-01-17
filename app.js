const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.post("/", (req, res) => res.json(req.body));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
