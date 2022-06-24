import "./assets/scss/style.scss"
import React from "react";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);

import CardTitle from "./assets/components/cardTitle";
import CardForm from "./assets/components/cardForm"
import CardTooltip from "./assets/components/cardTooltip";


root.render(
	<div className="card">
		<div className="card__container">
			<CardTitle/>
			<CardForm/>

		</div>
	</div>,
);