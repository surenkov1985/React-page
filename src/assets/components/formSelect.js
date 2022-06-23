import React from "react"

export default function FormSelect() {

	return <div className="form__select input">
		<select required="required">
			<option disabled="disabled" selected="selected">Выберите город</option>
			<option>Красноярск</option>
			<option>Красноярск</option>
		</select>
		<div className="arrow">
			<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
				<line x1="0.707107" y1="1.29289" x2="7.70711" y2="8.29289" stroke="#037BB8" stroke-width="2"/>
				<line y1="-1" x2="9.8995" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 14 2)" stroke="#037BB8" stroke-width="2"/>
			</svg>
		</div>
	</div>
}