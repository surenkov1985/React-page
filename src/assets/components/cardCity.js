import React, {useState} from "react";
import AsyncAwait from "./asyncAwait";

export default function CardCity(props) {

	return (
		<div className="form__item">
			<AsyncAwait text={props.text} onChange={props.onChangeVal} error={props.error} color={props.color} onKeyPress={props.onKeyPress}/>
		</div>
	);
};