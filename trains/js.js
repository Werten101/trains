
var db = firebase.database();

var trainName = $("#nameInput").val();

var destination = $("#destinationInput").val().trim();

var firstTrain = $("#firstTimeInput").val().trim();

var frequency = $("#frequencyInput").val().trim();

$("#submitBtn").on("click", function(){
	var newTrain = {
	name: trainName,
	destination: destination,
	firstTrain: firstTrain,
	frequency: frequency
}


	console.log(newTrain.name)
	console.log(newTrain.destination)
	console.log(newTrain.firstTrain)
	console.log(newTrain.frequency)


	db.ref().push(newTrain);



alert("train added");

  $("#nameInput").val("");
  $("#destinationInput").val("");
  $("#firstTimeInput").val("");
  $("#frequencyInput").val("");



	});
