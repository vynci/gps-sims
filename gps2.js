var mqtt = require('mqtt');

var client = mqtt.connect({
  host : '128.199.158.11',
  port : 8883,
  username : 'sensor-service',
  password : '12345'
});
 
var route = [
    {lat : 10.309367074686152, lng: 123.89368057250977},
    {lat : 10.306453708021525, lng: 123.89434576034546},
    {lat : 10.30482812215862, lng: 123.89492511749268},
    {lat : 10.303624760988544, lng: 123.89537572860718},
    {lat : 10.299782419129475, lng: 123.89672756195068},
    {lat : 10.30096468315128, lng: 123.89930248260498},
    {lat : 10.301703595913393, lng: 123.90181303024292},
    {lat : 10.308839292868486, lng: 123.90674829483032},
    {lat : 10.310908192532356, lng: 123.89801502227783},
    {lat : 10.309915966838412, lng: 123.89471054077148},
]

var i = 0;

client.on('connect', function () {
    console.log('connect');
  
    setInterval(function() {
        if(i >= 10){
            i = 0;
        } else{
            client.publish('v1/messages/1002', JSON.stringify(route[i]));  
            console.log(route[i]);
            i++;
        }
    }, 1000);  
})
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString())
//   client.end()
})