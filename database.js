const { Client } = require('pg')
const client = new Client()
client.connect()
client.query('SELECT version()', (err, res) => {
  if (err) throw err
  console.log(res.rows[0].version)
  client.end()
})
