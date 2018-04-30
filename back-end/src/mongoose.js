const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mcs-test');

const { connection } = mongoose;
//connection.on('error', ( msg ) => console.error.bind(msg, 'connection error:'));
connection.once('open', ( msg ) => console.log('mongoose connection running '));

module.exports = connection;