import React, {useEffect, forwardRef} from "react";
import getCities from "../js/getCities"

const CardCity = forwardRef((props, ref) => {

	const citiesData = getCities();

	useEffect(() => {

			ref.current.focus();
		},[]
	);

	return (
		<div className="form__block">
			<div className="form__text">
				{props.text}
			</div>
			<div className="form__select">
				<label className="form__city input">
					<select ref={ref} id="city" className="form__cities" required="required" onChange={function(event){props.onChange(event.target.value, event.target.id)}} style={{borderColor: props.color}} >
						<option value="selectCity">Выберите город</option>
						{citiesData.map((item, index) => (
							<option key={index} value={item.city}>{item.city}</option>
						))}
					</select>
					<span className="err active">{props.error}</span>
				</label>
				<div className="card__placeholder"/>
			</div>
		</div>
	);
})

export default CardCity;