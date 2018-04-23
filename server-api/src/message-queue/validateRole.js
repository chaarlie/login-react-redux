const faker = require('faker');
const amqp = require('amqplib');

const { QUEUE_NAME } = require('../config');

module.exports = function (role) {
    try {
      amqp.connect('amqp://localhost', (err, conn) => {
        if(err) {
          throw err;
        }
        conn.createChannel((err, ch) => {
          if(err) {
            throw err;
          }
          ch.assertQueue('', { exclusive: true }, (err, q) => {
            if(err) {
              throw err;
            }
            
            let envelope = { 
              correlationId: faker.random.uuid(), 
              replyTo: q.queue 
            }
            ch.sendToQueue(QUEUE_NAME, new Buffer(role.toString()), envelope);
  
            ch.consume(envelope.replyTo, (msg) => {
              if (msg.properties.correlationId === envelope.correlationId) {
                return msg.content.toString();
              }
            }, {noAck: true});
          });
        });
      });
    } catch(err) {
      console.log(err.message);
    }
  }