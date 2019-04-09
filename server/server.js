const app = require ('./index.js');
const port = process.env.port || 3001;

app.listen(port, ()=> console.log(`Now listening on port ${port}! :D`))