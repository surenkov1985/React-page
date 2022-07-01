import React, {useState, useRef} from "react";
import CardInput from "./cardInput";


export default function CardPass(props) {

	const passRef = useRef();
	const repassRef = useRef();

	return (
		<div className="form__item">
			<CardInput text="Пароль"
			           ref={passRef}
			           id="password"
			           type="password"
			           place="Ваш новый пароль должен содержать не менее 5 символов."
			           label={props.error}
			           onChangeValue={props.onChangePass}
			           onBlurChange={props.onPassBlurChange}
			           color={props.passColor}
			           err={props.passErr}/>
			<CardInput text="Пароль еще раз"
			           ref={repassRef}
			           id="repassword"
			           type="password"
			           place="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки."
			           label={props.error}
			           onChangeValue={props.onChangeRepass}
			           onBlurChange={props.onRepassBlurChange}
			           color={props.repassColor}
			           err={props.repassErr}/>
		</div>
	);
};