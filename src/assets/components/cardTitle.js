import React from "react";
import CardTooltip from "./cardTooltip";

export default function CardTitle() {

	return <div className="card__title">
			<h1>
				<div className="card__hello">Здравствуйте,</div>
				<div className="card__user-name">
					Человек №3596941
					<CardTooltip/>
				</div>
			</h1>
			<button className="card__btn-tooltip">Cменить статус</button>
	</div>
}

// export default CardTitle()