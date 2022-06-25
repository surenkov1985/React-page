
async function getData() {

	let response = await fetch("cities.json");
	let data = await response.json();
	let cities = [];
	let firstCity = {city: "", population: "0"};

	data.map((city) => {
		if (parseInt(city.population) >= 50000) {
			cities.push(city);
			if (parseInt(city.population) > parseInt(firstCity.population)){
				firstCity = city;
			}
		}
	});

	const index = cities.findIndex((item) => item.city === firstCity.city);

	if (index !== -1) cities.splice(index, 1);

	cities.sort((a, b) => {a.city > b.city ? 1 : -1}).unshift(firstCity);

	cities.map((item) => {

		const option = document.createElement("option");
		const optionText = document.createTextNode(item.city);

		option.appendChild(optionText);

		document.querySelector(".form__cities").appendChild(option)

	});
};

getData();

