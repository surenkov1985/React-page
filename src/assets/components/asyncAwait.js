import React, {useEffect, useState} from "react";

export default function AsyncAwait() {

	const [cities, setCities] = useState([]);

	async function getData() {

		let response = await fetch("cities.json");
		let data = await response.json();
		setCities(data);
	}

	useEffect(() => {
		getData()
	}, []);

	let citiesArr = [];
	let firstCity = {city: "", population: "0"};

	cities.map((city) => {
		if (parseInt(city.population) >= 50000) {
			citiesArr.push(city);
			if (parseInt(city.population) > parseInt(firstCity.population)){
				firstCity = city;
			}
		}
	});

	const index = cities.findIndex((item) => item.city === firstCity.city);

	if (index !== -1) cities.splice(index, 1);

	citiesArr.sort((a, b) => {a.city > b.city ? 1 : -1}).unshift(firstCity);

	return (
		<select className="form__cities input-card" required="required" defaultValue="selectCity">
			<option disabled="disabled=" value="selectCity">Выберите город</option>
			{citiesArr.map((item, index) => (
				<option key={index} value={item.city}>{item.city}</option>
			))}
		</select>
	);
};