var holes = document.querySelectorAll(".hole");
var moleCounter = 0;
var score = document.querySelectorAll("h4")[0];
function randomNumber(){
	  return Math.floor(Math.random() * (holes.length ));
	 
}
holes[randomNumber()].innerHTML = "<img src = http://www.lionsroar.com/wp-content/uploads/2009/05/groundhog-day-driving.jpg>";


for (var j=0; j< holes.length; j++) {
	holes[j].addEventListener("click", function(){
	if (this.innerHTML !== ""){
		this.innerHTML = "";
		moleCounter++;
		score.innerText = moleCounter;
		holes[randomNumber()].innerHTML = "<img src = http://www.lionsroar.com/wp-content/uploads/2009/05/groundhog-day-driving.jpg>";
	}
})
};

// need to add and event listener 