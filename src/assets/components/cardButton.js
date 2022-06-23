import React from "react"

export default function CardButton(props) {

	return <div className="form__item" style={{borderBottom: "none", padding: "10px", marginTop: "20px"}}>
		<div className="form__block" style={{alignItems: "center"}}>
			<div className="form__text">
				{props.text}
			</div>
			<button  className="form__btn">{props.buttonText}</button>
			<div className="card__placeholder" style={{marginLeft: "13px"}}>
				{props.place}
			</div>
		</div>
	</div>
}