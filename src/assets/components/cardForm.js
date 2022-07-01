import React, {useState, useEffect, useRef} from "react";
import CardCity from "./asyncAwait";
import CardCheck from "./cardCheck";
import CardButton from "./cardButton";
import getDateString from "../js/dateString";
import CardInput from "./cardInput";
require('es6-promise').polyfill();
import 'whatwg-fetch'

export default function CardForm(props) {

	const url = "https://webhook.site/6f656c2a-655d-465e-9dae-08595b266f2d";

	const passRef = useRef();
	const repassRef = useRef();
	const emailRef = useRef();
	const cityRef = useRef();
	const checkRef = useRef();
	const buttonRef = useRef();

	const [date, setDate] = useState("15 мая 2012 в 14:55:17");
	const [id, setId] = useState("3596941");
	const [isBlur, setIsBlur] = useState(false);
	const [passBlur, setPassBlur] = useState(false);
	const [repassBlur, setRepassBlur] = useState(false);

	const [city, setCity] = useState("");
	const [email, setEmail ] = useState("");
	const [pass, setPass ] = useState("");
	const [repass, setRepass ] = useState("");

	const [emailErr, setEmailErr ] = useState("");
	const [cityErr, setCityErr] = useState("");
	const [passErr, setPassErr ] = useState("");
	const [repassErr, setRepassErr ] = useState("");

	const [color, setColor] = useState("#999999");
	const [borderColor, setBorderColor] = useState("#999999");
	const [passColor, setPassColor] = useState("#999999");
	const [repassColor, setRepassColor] = useState("#999999");

	const [disabled, setDisabled] = useState(true);

	const typeValues = {
		"id": id,
		"city": city,
		"password": pass,
		"repassword": repass,
		"email": email,
		"date": date
	};

	function handleSubmit(e) {
		e.preventDefault();
		setDate(getDateString());

		fetch(url, {
			method: "POST",
			body: JSON.stringify({...typeValues})
		})
			.then(response => {return response.text()})
			.then(data => console.log(data));

		console.log(JSON.stringify(typeValues));

		alert(JSON.stringify(typeValues));
	}

	useEffect(() => {

			cityRef.current.focus();
		},[]
	);

	useEffect(() => {
			if (city && pass && repass && email) {
				setDisabled(false)
			} else {
				setDisabled(true)
			}
		}
	);

	function setCityValues(val){

		if (val === "selectCity") {
			setCityErr("Выберите город");
			setCity("");
			setColor("red");
		} else {
			setCityErr("");
			setCity(val);
			setColor("#999999");
			passRef.current.focus()
		}
	}

	function handleName(e) {

		const regexp = /^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/;

		if (!e.target.value.length){

			setEmailErr("Введите E-mail");
			setBorderColor("red")
		} else if (!regexp.test(e.target.value)) {

			setEmailErr("Неверный E-mail");
			setEmail("");
			setBorderColor("red");
		} else if (regexp.test(e.target.value)){

			setEmailErr("");
			setEmail(e.target.value);
			setBorderColor("#999999");

			if (e.key === "Enter") {
				checkRef.current.focus();
			}
		}
	}

	function handlePass(e) {
		const regexpPass = /\w{5,}/;

		if (!e.target.value.length){

			setPassErr("Укажите пароль");
			setPassColor("red")
		} else if (!regexpPass.test(e.target.value)) {

			setPassErr("Используйте не менее 5 символов");
			setPass("");
			setPassColor("red");
		} else if (regexpPass.test(e.target.value)){

			setPassErr("");
			setPass(e.target.value);
			setPassColor("#999999");

			if (e.key === "Enter") {
				repassRef.current.focus();
			}
		}
	}

	function handleRepass(e) {

		const regexpPass = /\w{5,}/;

		if (!e.target.value.length){

			setRepassErr("Укажите пароль");
			setRepassColor("red");
		} else if (!regexpPass.test(e.target.value)) {

			setRepassErr("Используйте не менее 5 символов");
			setRepass("");
			setRepassColor("red");
		} else if (pass !== e.target.value){

			setRepassErr("Пароли не совпадают");
			setRepass("");
			setRepassColor("red");
		} else if (regexpPass.test(e.target.value)){

			setRepassErr("");
			setRepass(e.target.value);
			setRepassColor("#999999");

			if (e.key === "Enter") {
				emailRef.current.focus();
			}
		}
	}

	function setBlurState(e) {

		setIsBlur(true);
		handleName(e);
	}

	function setPassState(e) {

		setPassBlur(true);
		handlePass(e);
	}

	function setRepassState(e) {

		setRepassBlur(true);
		handleRepass(e);
	}

	function checkHandler(e) {

		console.log(e.target.checked)

		if (e.key === "Enter") {

			e.preventDefault();
			buttonRef.current.focus();
		}
	}

	return (
		<form className="card__form form" action="localStorage" method="post" target="_self" onSubmit={handleSubmit}>
			<div className="form__item">
				<CardCity ref={cityRef} text="Ваш город" onChange={setCityValues} error={cityErr} color={color}/>
			</div>
			<div className="form__item">
				<CardInput text="Пароль"
				           ref={passRef}
				           nextRef={repassRef}
				           id="password"
				           type="password"
				           val={pass}
				           place="Ваш новый пароль должен содержать не менее 5 символов."
				           onChangeValue={(e) => {if (passBlur) handlePass(e)}}
				           onBlurChange={setPassState}
				           color={passColor}
				           err={passErr}/>
				<CardInput text="Пароль еще раз"
				           ref={repassRef}
				           nextRef={emailRef}
				           val={repass}
				           id="repassword"
				           type="password"
				           place="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки."
				           onChangeValue={(e) => {if (repassBlur) handleRepass(e)}}
				           onBlurChange={setRepassState}
				           color={repassColor}
				           err={repassErr}/>
			</div>
			<div className="form__item" style={{borderBottom: "none"}}>
				<CardInput text="Электронная почта"
				           ref={emailRef}
				           nextRef={checkRef}
				           val={email}
				           id="email"
				           type="email"
				           place="Можно изменить адрес, указанный при регистрации."
				           style={{alignItems:'baseline'}}
				           onChangeValue={(e) => {if (isBlur) handleName(e)}}
				           err={emailErr}
				           color={borderColor}
				           onBlurChange={setBlurState}/>
			</div>
			<CardCheck ref={checkRef} text="Я согласен" id="check" type="checkbox" place="принимать актуальную информацию на емейл" keyPress={checkHandler}/>
			<CardButton ref={buttonRef} buttonText="Изменить" place={"последние изменения " + date} disabled={disabled}/>
		</form>
	);
};
