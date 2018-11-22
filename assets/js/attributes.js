var attrs = [
  "American",
  "Brother",
  "Camper",
  "Christian",
  "CISSP",
  "Coach",
  "Employee",
  "Engineer",
  "Father",
  "Friend",
  "Foodie",
  "Husband",
  "Inventor",
  "Leader",
  "Manager",
  "Podcast producer",
  "Programmer",
  "Radio amateur",
  "Rock, Paper, Scissors competitor",
  "Runner",
  "Soccer player",
  "Son",
  "Supervisor",
  "Traveler",
  "Trumpeter",
  "Uncle",
  "Washington State University alumnus",
  "WSU Cougar fan",
];

function randomize(a,b) {
  return 0.5 - Math.random();
}

window.onload = function() {
  document.getElementById('home-attributes').innerHTML =
    attrs.sort(randomize).slice(0,20).join(". ");
}
