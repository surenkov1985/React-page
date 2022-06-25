import React, {useState} from "react";

export default function CardInput(props) {

	const [oninput, setOninput] = useState("");

	const handleChange = (e) => setOninput(e.target.value);



	return (
		<div className="form__block" style={props.style}>
			<div className="form__text">
				{props.text}
			</div>
			<div className="form__input-container">
				<div className="input">
					<input className="input-card" id={props.id} type={props.type} required="required" autoComplete="autocomplete" value={oninput} onChange={handleChange}/>
					<label className="err" htmlFor={props.id}>{props.label}</label>
				</div>
				<div className="card__placeholder">{props.place}</div>
			</div>
		</div>
	);
};