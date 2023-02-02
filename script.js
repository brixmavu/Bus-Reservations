var busList = [{ from: "Cape Town", to: "johannesburg", fare: 200, departure: "12:00 PM" }, { from: "Cape Town", to: "Pretoria", fare: 150, departure: "1:00 PM" }, { from: "johannesburg", to: "Pretoria", fare: 180, departure: "2:00 PM" }, { from: "Pretoria", to: "johannesburg", fare: 220, departure: "3:00 PM" }, { from: "Pretoria", to: "Cape Town", fare: 170, departure: "4:00 PM" }];

var busReservationForm = document.getElementById("bus-reservation-form");
var busListDiv = document.getElementById("bus-list");

busReservationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var fromPlace = document.getElementById("from-place").value;
    var toPlace = document.getElementById("to-place").value;

    var filteredBusList = busList.filter(function (bus) {
        return bus.from === fromPlace && bus.to === toPlace;
    });

    if (filteredBusList.length === 0) {
        busListDiv.innerHTML = "No buses available for selected departure place and destination.";
        return;
    }

    var busListTable = "<table><tr><th>From</th><th>To</th><th>Fare</th><th>Departure</th><th>Choose</th></tr>";

    filteredBusList.forEach(function (bus) {
        busListTable += "<tr><td>" + bus.from + "</td><td>" + bus.to + "</td><td>" + bus.fare + "</td><td>" + bus.departure + "</td><td><button>Choose</button></td></tr>";
    });

    busListTable += "</table>";

    busListDiv.innerHTML = busListTable;
});
