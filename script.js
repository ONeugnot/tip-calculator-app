const billInput = document.getElementById("first-input");
const totalPrice = document.getElementById("total-price");
const personInput = document.getElementById("second-input");
const tipcount = document.querySelector(".tipcount");
const btnReset = document.querySelector(".reset");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const customBtn = document.querySelector(".input-tip");
billInput.addEventListener("input", () => {
	const value = billInput.value;
	totalPrice.innerText = "$" + value;
	if (value === "") {
		totalPrice.innerText = "$0.00";
	}
	personInput.addEventListener("input", () => {
		const value2 = personInput.value;
		const resultat = value / value2;
		totalPrice.innerText = "$" + resultat.toFixed(1);
		if (value2 === "" || value2 === 0 || value2 <= 0) {
			totalPrice.innerText = "$" + value;
		}

		btn1.addEventListener("click", () => {
			tipcount.innerText = "$" + ((5 / 100) * resultat).toFixed(2);
			customBtn.value = "";
		});
		btn2.addEventListener("click", () => {
			tipcount.innerText = "$" + ((10 / 100) * resultat).toFixed(2);
			customBtn.value = "";
		});
		btn3.addEventListener("click", () => {
			tipcount.innerText = "$" + ((15 / 100) * resultat).toFixed(2);
			customBtn.value = "";
		});
		btn4.addEventListener("click", () => {
			tipcount.innerText = "$" + ((25 / 100) * resultat).toFixed(2);
			customBtn.value = "";
		});
		btn5.addEventListener("click", () => {
			tipcount.innerText = "$" + ((50 / 100) * resultat).toFixed(2);
			customBtn.value = "";
		});
		customBtn.addEventListener("input", () => {
			const customValue = customBtn.value;
			const res = "$" + ((customValue / 100) * resultat).toFixed(2);
			tipcount.innerText = res;
		});
	});

	btn1.addEventListener("click", () => {
		tipcount.innerText = "$" + ((5 / 100) * value).toFixed(2);
		customBtn.value = "";
	});
	btn2.addEventListener("click", () => {
		tipcount.innerText = "$" + ((10 / 100) * value).toFixed(2);
		customBtn.value = "";
	});
	btn3.addEventListener("click", () => {
		tipcount.innerText = "$" + ((15 / 100) * value).toFixed(2);
		customBtn.value = "";
	});
	btn4.addEventListener("click", () => {
		tipcount.innerText = "$" + ((25 / 100) * value).toFixed(2);
		customBtn.value = "";
	});
	btn5.addEventListener("click", () => {
		tipcount.innerText = "$" + ((50 / 100) * value).toFixed(2);
		customBtn.value = "";
	});
	customBtn.addEventListener("input", () => {
		const customValue = customBtn.value;
		const res = "$" + ((customValue / 100) * value).toFixed(2);
		tipcount.innerText = res;
	});
	if (totalPrice.textContent === "$0.00") {
		btnReset.disabled = true;
	} else {
		btnReset.disabled = false;
		btnReset.classList.add("btnres");
	}

	btnReset.addEventListener("click", () => {
		billInput.value = 0;
		billInput.innerText = "";
		totalPrice.innerText = "$0.00";
		tipcount.innerText = "$0.00";
		personInput.value = 0;
		personInput.innerText = 0;
		customBtn.value = "";
	});
});
