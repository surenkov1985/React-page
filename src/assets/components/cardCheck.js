
import React from "react"

export default function CardCheck(props) {

	return (
		<div className="form__item" style={{borderBottom: "none", padding: "10px"}}>
			<div className="form__block-check" style={{alignItems: "center"}}>
				<div className="form__text">
					{props.text}
				</div>
				<div className="form__check-input-container">
					<div className="check-input">
						<input  id={props.id} type={props.type}/>
						<label htmlFor={props.id}>
							<svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.5 2.5L0.5 3.5L3.5 6.5L7.5 1.5L6 0L3.5 4.5L1.5 2.5Z" fill="#037BB8"/>
							</svg>
						</label>
					</div>
					<div className="check__placeholder" style={{fontWeight: "400",
						fontSize: "16px",
						lineHeight: "19px",
						color: "#000000",
						maxWidth: "100%",
						marginLeft: "10px"}}>
						{props.place}
					</div>
				</div>
			</div>
		</div>
	)
}