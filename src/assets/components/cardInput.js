import React, {useState} from "react";

export default function CardInput(props) {

	const [oninput, setOninput] = useState("")

	function errorInput(e) {
		if (e.code === "Enter") {
			e.preventDefault();
			e.target.blur();
		}
	}

	return (
		<div className="form__block" style={props.style}>
			<div className="form__text">
				{props.text}
			</div>
			<div className="form__input-container">
				<div className="input">
					<input className="input-card"
					       id={props.id}
					       type={props.type}
					       autoComplete="autocomplete"
					       // value={oninput}
					       onChange={(e) => {props.onChangeValue(e.target.value, e.target.id); setOninput(e.target.value)}}
					       onBlur={(e) => {props.onBlurChange(e.target.value, e.target.id)}}
					       onKeyPress={errorInput}
					       style={{borderColor: props.color}}/>
					<label className="err active" htmlFor={props.id}>{props.err}</label>
				</div>
				<div className="card__placeholder">{props.place}</div>
			</div>
		</div>
	);
};