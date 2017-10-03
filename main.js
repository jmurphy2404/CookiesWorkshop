document.addEventListener("DOMContentLoaded", function(){
	document.querySelector("submit[id=submit-pep]").addEventListener("click", function(e){
		e.preventDefault();
		let temp = document.querySelector("input[name=pep]").value;
		Cookies.set("PepperoniPizzas", temp);
		changePep();
	});
});

function changePep(){
	let total = Cookies.get("Pepperoni Pizzas");
	document.getElementById("count-pep").innerHTML = `${total}`;
}