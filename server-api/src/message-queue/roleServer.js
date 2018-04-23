const amqp = require('amqplib/callback_api');

const Role = require( '../models/Role');

const { QUEUE_NAME } = require('../config');

try {
    amqp.connect('amqp://localhost', (err, conn) => {
      if(err) {
        throw err;
      }
      conn.createChannel((err, ch) => {
        if(err) {
          throw err;
        }
      
        ch.assertQueue(QUEUE_NAME, { durable: false });
        ch.prefetch(1);
        console.log(' [x] Awaiting RPC requests');
        ch.consume(QUEUE_NAME, async (data) => {
          let role = parseInt(data.content.toString());
          let userRole = await Role.where({ id_role: role }).fetch({ require: true }).tap();
          let roleCode = userRole.get('role_code') > 0 ? userRole.get('role_code') : -1;
          let { replyTo, correlationId } = data.properties; 
          console.log(roleCode);
      
          ch.sendToQueue(replyTo, new Buffer(roleCode.toString()), { correlationId });
          ch.ack(data);
        });
      });  
    });
  }
  catch(err) {
    console.log(err.message);
  }
  