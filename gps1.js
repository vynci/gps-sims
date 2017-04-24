var mqtt = require('mqtt');

var client = mqtt.connect({
  host : '128.199.158.11',
  port : 8883,
  username : 'sensor-service',
  password : '12345'
});
 
var route = [
    {lat : 10.31605927142001, lng: 123.89084815979004},
    {lat : 10.314982618455181, lng: 123.89119148254395},
    {lat : 10.314475956962308, lng: 123.8914704322815},
    {lat : 10.312955967591474, lng: 123.89202833175659},
    {lat : 10.311541526447186, lng: 123.89245748519897},
    {lat : 10.309008183146355, lng: 123.89211416244507},
    {lat : 10.307910394721645, lng: 123.88859510421753},
    {lat : 10.311161526251123, lng: 123.88634204864502},
    {lat : 10.315890384923934, lng: 123.88602018356323},
    {lat : 10.316523708816991, lng: 123.88996839523315},
]

var i = 0;

client.on('connect', function () {
    console.log('connect');
  
    setInterval(function() {
        if(i >= 10){
            i = 0;
        } else{
            client.publish('v1/messages/1001', JSON.stringify(route[i]));  
            console.log(route[i]);
            i++;
        }
    }, 3000);  
})
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString())
//   client.end()
})