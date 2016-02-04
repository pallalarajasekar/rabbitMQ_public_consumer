/**
 * Created by harinaths on 4/2/16.
 */


var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
    conn.createChannel(function(err, ch) {
        var q = 'hello';

        ch.assertQueue(q, {durable: false});
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
        ch.consume(q, function(msg) {
            console.log(" [x] Received ", msg.content.toString());
        })
        /*{noAck: true});*/
    });

});

/*
console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
ch.consume(q, function(msg) {
    console.log(" [x] Received %s", msg.content.toString());
}, {noAck: true});*/
