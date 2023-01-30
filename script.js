const form = document.querySelector("form");
const fromSelect = document.querySelector("#from");
const toSelect = document.querySelector("#to");
const dateInput = document.querySelector("#date");
const seatsInput = document.querySelector("#seats");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedFrom = fromSelect.value;
  const selectedTo = toSelect.value;
  const selectedDate = dateInput.value;
  const selectedSeats = seatsInput.value;

  console.log(`Selected From: ${selectedFrom}`);
  console.log(`Selected To: ${selectedTo}`);
  console.log(`Selected Date: ${selectedDate}`);
  console.log(`Selected Seats: ${selectedSeats}`);

  fetch("https://example.com/api/buses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: selectedFrom,
      to: selectedTo,
      date: selectedDate,
      seats: selectedSeats,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

});

