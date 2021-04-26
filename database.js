const { Client } = require('pg')
const client = new Client()
client.connect()
client.query('SELECT version()', (err, res) => {
  console.log(err ? err.stack : res.rows[0].version)
  client.end()
})
