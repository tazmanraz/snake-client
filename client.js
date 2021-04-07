const net = require('net');
const host = '135.23.222.131';
const port = 50542

const connect = function() {
  const conn = net.createConnection({ 
    host,
    port
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log(`Server: ${data}`);
  });

  return conn;
}

module.exports = { connect };
