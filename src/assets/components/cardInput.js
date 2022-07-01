import React, {useState, forwardRef} from "react";

const CardInput = forwardRef((props, ref) => {

	const [oninput, setOninput] = useState("");

	function errorInput(e) {
		if (e.key === "Enter") {
			e.preventDefault();
			props.onBlurChange(e);
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
					       ref={ref}
					       id={props.id}
					       type={props.type}
					       autoComplete="autocomplete"
						   onChange={(e) => {props.onChangeValue(e)}}
						   onBlur={(e) => {props.onBlurChange(e)}}
						   onKeyPress={(e) => {errorInput(e)} }
						   style={{borderColor: props.color}}/>
					<label className="err active" htmlFor={props.id}>{props.err}</label>
				</div>
				<div className="card__placeholder">{props.place}</div>
			</div>
		</div>
	);
});

export default CardInput;