var kafka = require("kafka-node");
var Producer = kafka.Producer;
var client = new kafka.KafkaClient({kafkaHost: "172.16.4.115:9092"});
var producer = new Producer(client);


producer.on("ready", function(){
    console.log("ready");
    setInterval(function(){
        var payloads = [
            {topic: "hail", messages: "Hail to the Chief!", partition: 0},
            {topic: "new-message", messages: JSON.stringify({"body": "Hola!", "email":"rommel.loayza@dharbor.com"}), partition: 0},
            {topic: "list", messages: [1, 2, 3, 4], partition: 0}
        ];

        console.log("Producing");
        producer.send(payloads, function(err, data){
            console.log(data);
        });
    }, 5000);
});

