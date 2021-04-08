const net = require('net');
const { IP, PORT } = require('./constants');

const host = IP;
const port = PORT;

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

  conn.on('connect', (data) => {
    console.log(`Successfully connected to game server`);
    conn.write('Name: MTS');
  });

  // conn.on('connect', (data) => {
  //   console.log(`moving up`);
  //   conn.write('Move: down');
  //   conn.write('Move: left');

  // });

  // conn.on('connect', () => {
  //   for (let i = 0; i < 5; i++) {
  //     setTimeout(() => {
  //       conn.write('Move: up');
  //     }, i * 50);
  //   }
  // });

  // conn.on('connect', () => {
  //   let moving = setInterval( ()=> { conn.write('Move: up'); }, 100);
  //   setTimeout( () => { clearInterval(moving) }, 1000);
  // })

  return conn;
}

module.exports = { connect };
