var mqtt = require('mqtt');

var client = mqtt.connect({
  host : '188.166.184.34',
  port : 6969,
  username : 'pipeeroac05c207b',
  password : '5738921e589fcb114312db62'
});

client.subscribe('v1/messages/#');

client.on('connect', function () {
    console.log('connect');
})
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString())
})