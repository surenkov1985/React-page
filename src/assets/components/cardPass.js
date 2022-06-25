import React from "react"
import CardInput from "./cardInput"

export default function CardPass(props) {

	return (
		<div className="form__item">
		<CardInput text="Пароль" id="password" type="password" place="Ваш новый пароль должен содержать не менее 5 символов." label="Укажите пароль"/>
		<CardInput
			style={{alignItems:'baseline'}}
			text="Пароль еще раз" id="repassword"
			type="password"
			place="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки."
			label="Укажите пароль"
		/>
	</div>
	)
}