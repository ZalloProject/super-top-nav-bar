const app = require('./index')
const port = process.env.port || 8081

app.listen(port, ()=> {console.log(`Listening on port ${port}! :D`)})