import React from "react"

export default function CardInput(props) {

	return <div className="form__block" style={props.style}>
		<div className="form__text">
			{props.text}
		</div>
		<div className="input">
			<input  id={props.id} type={props.type}/>
			<label for={props.id}>{props.label}</label>
		</div>
		<div className="card__placeholder">{props.place}</div>


	</div>

}