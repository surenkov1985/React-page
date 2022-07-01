import React , {forwardRef} from "react";

const CardCheck = forwardRef((props, ref) => {

	return (
		<div className="form__item" style={{borderBottom: "none", padding: "10px"}}>
			<div className="form__block-check" style={{alignItems: "center"}}>
				<div className="form__text">
					{props.text}
				</div>
				<div className="form__check-input-container">
					<div className="check-input">
						<label className="check-label">
							<input  id={props.id} type={props.type} ref={ref}/>
							<span className="check-icon">
								<svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1.5 2.5L0.5 3.5L3.5 6.5L7.5 1.5L6 0L3.5 4.5L1.5 2.5Z" fill="#037BB8"/>
								</svg>
							</span>
							<div className="check__placeholder">
								{props.place}
							</div>
						</label>
					</div>

				</div>
			</div>
		</div>
	);
});

export default CardCheck;