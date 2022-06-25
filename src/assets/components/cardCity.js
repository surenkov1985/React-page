import React from "react"
import FormSelect from "./formSelect"

export default function CardCity(props) {

	return (
		<div className="form__item">
			<div className="form__block">
				<div className="form__text">
					{props.text}
				</div>
				<FormSelect/>
			</div>
		</div>
	)
}