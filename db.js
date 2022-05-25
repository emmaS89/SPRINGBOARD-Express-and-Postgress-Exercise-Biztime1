const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://emma:1234@localhost:5432/biztime"
});

client.connect();


module.exports = client;