const billInput = document.getElementById("first-input");
const totalPrice = document.getElementById("total-price");
const personInput = document.getElementById("second-input");

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
		if (value2 === "") {
			totalPrice.innerText = "$" + value;
		}
	});
});
