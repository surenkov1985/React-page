import React, {useState} from "react";
import CardInput from "./cardInput";

export default function CardEmail(props) {

	return (
		<div className="form__item" style={{borderBottom: "none"}}>
			<CardInput text="Электронная почта"
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
