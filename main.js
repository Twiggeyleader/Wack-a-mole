var holes = document.querySelectorAll(".hole");

	var randomBill = function(){
	holes[Math.floor(Math.random() * (holes.length ))].innerHTML = "<img src=http://www.lionsroar.com/wp-content/uploads/2009/05/groundhog-day-driving.jpg>"
}
// var randomBill = function(){

// holes[randomBill].innerHTML = "<img src=http://www.lionsroar.com/wp-content/uploads/2009/05/groundhog-day-driving.jpg>"
// }