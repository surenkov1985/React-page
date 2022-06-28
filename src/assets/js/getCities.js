import Raect, {useState, useEffect} from "react"

export default function getCities() {

	const [cities, setCities] = useState([]);
	const citiesArr = [];
	let firstCity = {city: "", population: "0"};

	async function getData() {

		let response = await fetch("cities.json");
		let data = await response.json();
		setCities(data);
	};

	useEffect(() => {getData()}, [])


	cities.map((city) => {
		if (parseInt(city.population) >= 50000) {
			citiesArr.push(city);
			if (parseInt(city.population) > parseInt(firstCity.population)){
				firstCity = city;
			}
		}
	});

	const index = citiesArr.findIndex((item) => item.city === firstCity.city);

	if (index !== -1) citiesArr.splice(index, 1);

	citiesArr.sort((a, b) => {a.city > b.city ? 1 : -1}).unshift(firstCity);

	return citiesArr;

}

// export default getCities()