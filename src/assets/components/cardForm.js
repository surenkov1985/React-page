import React, {useState, useEffect} from "react";
import CardCity from "./cardCity";
import CardPass from "./cardPass";
import CardEmail from "./cardEmail";
import CardCheck from "./cardCheck";
import CardButton from "./cardButton";

export default function CardForm() {

	const [isBlur, setIsBlur] = useState(false);
	const [passBlur, setPassBlur] = useState(false);
	const [repassBlur, setRepassBlur] = useState(false);

	const [city, setCity] = useState("");
	const [email, setEmail ] = useState("");
	const [pass, setPass ] = useState("");
	const [repass, setRepass ] = useState("");

	const [emailErr, setEmailErr ] = useState("");
	const [cityErr, setCityErr] = useState("")
	const [passErr, setPassErr ] = useState("");
	const [repassErr, setRepassErr ] = useState("");

	const [color, setColor] = useState("#999999")
	const [borderColor, setBorderColor] = useState("#999999");
	const [passColor, setPassColor] = useState("#999999");
	const [repassColor, setRepassColor] = useState("#999999");

	const [disabled, setDisabled] = useState(true)

	const typeValues = {
		city: city,
		password: pass,
		repassword: repass,
		email: email,
	};

	useEffect(() => {
			if (city && pass && repass && email) {
				setDisabled(false)
			} else {
				setDisabled(true)
			}
		}
	);

	function setCityValues(val){

		if (!val.length || val === "selectCity") {
			setCityErr("Выберите город");
			setCity("");
			setColor("red");
		} else {
			setCityErr("");
			setCity(val);
			setColor("#999999");
		}
	}
	function handleSubmit(e) {
		e.preventDefault();
	}

	function handleName(email) {

		const regexp = /^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/;

		if (!email.length){

			setEmailErr("Введите E-mail");
			setBorderColor("red")
		} else if (!regexp.test(email)) {

			setEmailErr("Неверный E-mail");
			setEmail("");
			setBorderColor("red")
		} else if (regexp.test(email)){

			setEmailErr("");
			setEmail(email);
			setBorderColor("#999999")
		}
	}

	function handlePass(pass) {
		const regexpPass = /\w{5,}/;

		if (!pass.length){

			setPassErr("Укажите пароль");
			setPassColor("red")
		} else if (!regexpPass.test(pass)) {

			setPassErr("Используйте не менее 5 символов");
			setPass("");
			setPassColor("red")
		} else if (regexpPass.test(pass)){

			setPassErr("");
			setPass(pass);
			setPassColor("#999999")
		}
	}

	function handleRepass(repass) {

		const regexpPass = /\w{5,}/;

		if (!repass.length){

			setRepassErr("Укажите пароль");
			setRepassColor("red")
		} else if (!regexpPass.test(repass)) {

			setRepassErr("Используйте не менее 5 символов");
			setRepass("");
			setRepassColor("red")
		} else if (pass !== repass){

			setRepassErr("Пароли не совпадают");
			setRepass("");
			setRepassColor("red")
		} else if (regexpPass.test(repass)){

			setRepassErr("");
			setRepass(repass);
			setRepassColor("#999999")
		}
	}
	function setBlurState(val) {

		setIsBlur(true);
		handleName(val);
	}
	function setPassState(val) {

		setPassBlur(true);
		handlePass(val);
	}
	function setRepassState(val) {

		setRepassBlur(true);
		handleRepass(val);
	}

	return (
		<form className="card__form form" action="localStorage" method="post" target="_self" onSubmit={handleSubmit}>
			<CardCity text="Ваш город" onChangeVal={setCityValues} error={cityErr} color={color}/>
			<CardPass onChangePass={(e) => {if (passBlur) handlePass(e); if (repassBlur) handleRepass(e)}}
			          valPass={pass}
			          passErr={passErr}
			          passColor={passColor}
			          onChangeRepass={handleRepass}
			          repassErr={repassErr}
			          repassColor={repassColor}
			          valRepass={repass}
			          onPassBlurChange={setPassState}
			          onRepassBlurChange={setRepassState}/>
			<CardEmail onChangeVal={(e) => {if (isBlur) handleName(e)}} val={email} err={emailErr} onBlurChange={setBlurState} color={borderColor}/>
			<CardCheck text="Я согласен" id="check" type="checkbox" place="принимать актуальную информацию на емейл"/>
			<CardButton buttonText="Изменить" place="последние изменения 15 мая 2012 в 14:55:17" disabled={disabled}/>
		</form>
	);
};
