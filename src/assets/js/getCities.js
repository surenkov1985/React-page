import Raect, {useState, useEffect} from "react";
// require('es6-promise').polyfill();
// require('isomorphic-fetch');
import 'whatwg-fetch'

export default function getCities() {

	const [cities, setCities] = useState([]);
	const citiesArr = [];
	let firstCity = {city: "", population: "0"};

	function getData() {

		fetch("cities.json").then((response) => {return response.json()}).then((data) => setCities(data)).catch(error => console.log(error));

	}

	useEffect(() => {getData()}, []);

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