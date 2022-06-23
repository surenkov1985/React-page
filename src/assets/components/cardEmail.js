import React from "react"
import CardInput from "./cardInput"

export default function CardEmail(props) {

	return <div className="form__item" style={{borderBottom: "none"}}>
		<CardInput text="Электронная почта" id="email" type="email" place="Можно изменить адрес, указанный при регистрации." label="Укажите E-mail" style={{alignItems:'baseline'}} />



	</div>
}