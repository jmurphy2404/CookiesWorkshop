document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("submit-pep").addEventListener("click", function(e){
		e.preventDefault();
		let temp = document.getElementById("pep").value;
		Cookies.set("PepperoniPizzas", temp);
		changePep();
	});
	document.getElementById("submit-plain").addEventListener("click", function(e){
		e.preventDefault();
		let temp = document.getElementById("plain").value;
		Cookies.set("PlainPizzas", temp);
		changePlain();
	});
	document.getElementById("submit-saus").addEventListener("click", function(e){
		e.preventDefault();
		let temp = document.getElementById("saus").value;
		Cookies.set("SausagePizzas", temp);
		changeSaus();
	});	
});

function changePep(){
	let total = Cookies.get("PepperoniPizzas");
	document.getElementById("count-pep").innerHTML = `${total}`;
}

function changePlain(){
	let total = Cookies.get("PlainPizzas");
	document.getElementById("count-plain").innerHTML = `${total}`;
}

function changeSaus(){
	let total = Cookies.get("SausagePizzas");
	document.getElementById("count-saus").innerHTML = `${total}`;
}