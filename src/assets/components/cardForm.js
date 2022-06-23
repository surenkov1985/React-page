import React from "react";
import CardCity from "./cardCity"
import CardPass from "./cardPass"
import CardEmail from "./cardEmail"
import CardCheck from "./cardCheck"
import CardButton from "./cardButton"

export default function CardForm() {

	return <form className="card__form form" action="post" target="_self">
		<CardCity text="Ваш город"/>

		<CardPass/>
		<CardEmail/>
		<CardCheck text="Я согласен" id="check" type="checkbox" place="принимать актуальную информацию на емейл"/>

		<CardButton buttonText="Изменить" place="последние изменения 15 мая 2012 в 14:55:17"/>
	</form>
};
