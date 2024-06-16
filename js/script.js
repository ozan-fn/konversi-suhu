let isCelcius = true;

function convert() {
	let celcius = document.querySelector("#celcius");
	let fahrenheit = document.querySelector("#fahrenheit");
	let hasil = document.querySelector("#hasil");

	if (isCelcius) {
		fahrenheit.value = +celcius.value * (9 / 5) + 32;
		hasil.value = `${celcius.value}°C * (9 / 5) + 32 = ${fahrenheit.value}°F`;
	} else {
		fahrenheit.value = ((+celcius.value - 32) * (5 / 9)).toFixed(2);
		hasil.value = `${celcius.value}°${isCelcius ? "C" : "F"} - 32 * (5 / 9) = ${fahrenheit.value}°${isCelcius ? "F" : "C"}`;
	}
}

function reset() {
	let celcius = document.querySelector("#celcius");
	let fahrenheit = document.querySelector("#fahrenheit");
	let hasil = document.querySelector("#hasil");

	celcius.value = "";
	fahrenheit.value = "";
	hasil.value = "";
}

function reverse() {
	reset();
	reset();

	let celcius = document.querySelector("#c");
	let fahrenheit = document.querySelector("#f");
	let celciusInput = document.querySelector("#celcius");
	let fahrenheitInput = document.querySelector("#fahrenheit");

	if (isCelcius) {
		celcius.textContent = "Fahrenheit (°F)";
		fahrenheit.textContent = "Celcius (°C)";

		fahrenheitInput.value = +celciusInput.value * (9 / 5) + 32;
	} else {
		celcius.textContent = "Celcius (°C)";
		fahrenheit.textContent = "Fahrenheit (°F)";

		celciusInput.value = (+fahrenheitInput.value - 32) * (5 / 9);
	}

	isCelcius = !isCelcius;
}
