import React, {useState, useRef} from "react";
import CardInput from "./cardInput";

export default function CardEmail(props) {

	const emailRef = useRef();

	return (
		<div className="form__item" style={{borderBottom: "none"}}>
			<CardInput text="Электронная почта"
			           ref={emailRef}
			           id="email"
			           type="email"
			           place="Можно изменить адрес, указанный при регистрации."
			           label={props.error}
			           style={{alignItems:'baseline'}}
			           press={props.fn}
			           onChangeValue={props.onChangeVal}
			           err={props.err}
			           val={props.val}
			           color={props.color}
			           onBlurChange={props.onBlurChange}/>
		</div>
	);
};
