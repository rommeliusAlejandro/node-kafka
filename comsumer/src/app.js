var kafka = require("kafka-node");

var Consumer = kafka.Consumer;
var client = new kafka.KafkaClient({kafkaHost: "172.16.4.115:9092"});
var consumer = new Consumer(client, [
    {topic: "hail", partition: 0}, {topic: "new-message", partition: 0}, {topic: "list", partition: 0}]
    , {autoCommit: false});

consumer.on("message", function(message){
  

    console.log(message);
});