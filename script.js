const form = document.getElementById("form");
const fromSelect = document.getElementById("fromSelect");
const toSelect = document.getElementById("toSelect");
const dateInput = document.getElementById("dateInput");
const busList = document.getElementById("busList");
const buses = document.getElementById("buses");

const busesData = [
  {
    id: 1,
    from: "A",
    to: "C",
    departureTime: "10:00",
    availableSeats: 20,
    price: 50,
  },
  {
    id: 2,
    from: "A",
    to: "D",
    departureTime: "12:00",
    availableSeats: 15,
    price: 60,
  },
  {
    id: 3,
    from: "B",
    to: "C",
    departureTime: "14:00",
    availableSeats: 25,
    price: 70,
  },
  {
    id: 4,
    from: "B",
    to: "D",
    departureTime: "16:00",
    availableSeats: 30,
    price: 80,
  },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedFrom = fromSelect.value;
  const selectedTo = toSelect.value;
  const selectedDate = dateInput.value;

  buses.innerHTML = "";

  // const availableBuses = busesData.filter(
  //   (bus) => bus.from === selectedFrom && bus.to === selectedTo
  // );

//   const availableBuses = busesData.filter(
//     (bus) => bus.from === selectedFrom && bus.to === selectedTo && bus.departureTime.includes(selectedDate)
// );

const availableBuses = busesData.filter(
  (bus) => bus.from === selectedFrom && bus.to === selectedTo && bus.departureTime.includes(selectedDate)
);

  if (availableBuses.length === 0) {
    alert("No buses available");
    return;
  }

  busList.style.display = "block";

  // availableBuses.forEach((bus) => {
  //   const li = document.createElement("li");
  //   li.innerHTML = `Bus ${bus.id}: Departs at ${bus.departureTime} with ${bus.availableSeats} available seats. Price: $${bus.price}.`;
  //   const chooseButton = document.createElement("button");
  //   chooseButton.innerHTML = "Choose";
  //   chooseButton.addEventListener("click", () => {
  //     alert(`You have chosen Bus ${bus.id}. Departs at ${bus.departureTime}. Total price: $${bus.price}.`);
  //   });
  //   li.appendChild(chooseButton);
  //   buses.appendChild(li);
  // });

  availableBuses.forEach((bus) => {
    const li = document.createElement("li");
    li.innerHTML = `Bus ${bus.id} - Departs at ${bus.departureTime} - Seats available: ${bus.seatsAvailable}`;
  
    const seatSelector = document.createElement("select");
for (let i = 1; i <= bus.seatsAvailable; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.text = i;
  seatSelector.appendChild(option);
}
seatSelector.value = 1;
li.appendChild(seatSelector);

  
    const price = document.createElement("p");
    price.innerHTML = `Price per seat: $${bus.price}`;
    li.appendChild(price);
  
    const totalPrice = document.createElement("p");
    totalPrice.innerHTML = `Total price: $0`;
    li.appendChild(totalPrice);
  
    seatSelector.addEventListener("change", () => {
      totalPrice.innerHTML = `Total price: $${seatSelector.value * bus.price}`;
    });
  
    const chooseButton = document.createElement("button");
    chooseButton.innerHTML = "Choose this bus";
    // chooseButton.addEventListener("click", () => {
    //   alert(`You have chosen Bus ${bus.id} with ${seatSelector.value} seats. Departs at ${bus.departureTime}. Total price: $${seatSelector.value * bus.price}.`);
    // });
    chooseButton.addEventListener("click", () => {
      alert(`You have chosen Bus ${bus.id} with ${seatSelector.value} seats. Departs at ${bus.departureTime}. Total price: $${seatSelector.value * bus.price}.`);
      const selectedBus = busesData.find((b) => b.id === bus.id);
      selectedBus.seatsAvailable -= seatSelector.value;
    });
    li.appendChild(chooseButton);
    buses.appendChild(li);
  });


});
