import React, {useState} from "react";
import AsyncAwait from "./asyncAwait";

export default function CardCity(props) {

	return (
		<div className="form__item">
			<div className="form__block">
				<div className="form__text">
					{props.text}
				</div>
				<AsyncAwait  onChange={props.onChangeVal} error={props.error} color={props.color}/>
			</div>
		</div>
	);
};