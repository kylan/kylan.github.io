var array = [
  "American",
	"Brother",
  "Camper",
  "Christian",
  "CISSP",
	"Coach",
  "Engineer",
  "Father",
  "Foodie",
  "Husband",
  "Inventor",
  "Podcast producer",
  "Programmer",
  "Radio amateur",
  "Rock, Paper, Scissors competitor",
  "Runner",
  "Soccer player",
  "Son",
	"Traveler",
  "Trumpet player",
	"Uncle",
  "Washington State University alumnus",
  "WSU Cougar fan",
];

function randomize(a,b) {
  return 0.5 - Math.random();
}

window.onload = function() {
  document.getElementById('attributes').innerHTML = array.sort(randomize).join(". ");
}
