import React from "react";
import CardTooltip from "./cardTooltip";

export default function CardTitle() {

	return <div className="card__title">
			<h1 className="card__hello">
				Здравствуйте, <span className="card__user-name">
					 Человек №3596941
					<CardTooltip/>
				</span>
			</h1>
			<button className="card__btn-tooltip">Cменить статус</button>
	</div>
}

// export default CardTitle()