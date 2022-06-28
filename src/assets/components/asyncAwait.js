import React, {useState} from "react";
import getCities from "../js/getCities"

export default function AsyncAwait(props) {

	const citiesData = getCities();
	// const [err, setValue] = useState("");

	// function onSelect() {
	// 	setValue(event.target.value);
	// 	console.log(value)
	// }

	return (
		<div className="form__select input">
			<label className="form__city">
				<select id="city" className="form__cities input-card" required="required" onChange={event => props.onChange(event.target.value, event.target.id)} style={{borderColor: props.color}}>
					<option value="selectCity">Выберите город</option>
					{citiesData.map((item, index) => (
						<option key={index} value={item.city}>{item.city}</option>
					))}
				</select>
				<span className="err active">{props.error}</span>
			</label>
			<div className="arrow">
				<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<line x1="0.707107" y1="1.29289" x2="7.70711" y2="8.29289" stroke="#037BB8" strokeWidth="2"/>
					<line y1="-1" x2="9.8995" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 14 2)" stroke="#037BB8" strokeWidth="2"/>
				</svg>
			</div>
			<div className="card__placeholder"/>
		</div>
	);
};