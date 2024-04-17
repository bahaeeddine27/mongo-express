require('dotenv').config()
const app = require("./app.js");
const port = process.env.PORT
const routes = require('./routes');

app.use('/', routes);

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})