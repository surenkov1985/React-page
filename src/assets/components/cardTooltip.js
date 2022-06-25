import React from "react";

export default function CardTooltip(props) {

	return (
		<div className="card__tooltip">
			<span className="card__tooltip-text">{props.text}</span>
			<div className="card__tooltip-before"/>
		</div>
	);
};
