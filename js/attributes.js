var array = [
  "Radio amateur",
	"WSU Cougar fan",
	"Husband",
	"Traveler",
	"Runner",
	"Soccer player",
	"Uncle",
	"CISSP",
	"Son",
	"Camper",
	"Father",
	"Trumpet player",
	"American",
	"Programmer",
	"Christian",
	"Rock, Paper, Scissors competitor",
	"Foodie",
	"Inventor",
	"Engineer",
	"Coach",
	"Washington State University alumnus",
	"Podcast producer",
	"Brother"
];

function randomize(a,b) {
  return 0.5 - Math.random();
}

window.onload = function() {
  document.getElementById('attributes').innerHTML = array.sort(randomize).join(". ");
}
