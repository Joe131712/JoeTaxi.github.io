document.addEventListener("DOMContentLoaded", function () {
  console.log("Le DOM est chargé");
});

const form = document.querySelector("form");
form.addEventListener("submit", (post) => {
  //On empeche le comportement par defaut
  if (form === "" || input === "") {
    alert("le formulaire est vide");
  }
});

/*var map;
var panel = document.querySelector("#panel");*/

/*var direction = new google.maps.DirectionsRenderer({
    map   : map, 
    panel : panel 
});
*/

function traitement1() {
  var $email = document.getElementById("email").value;
  var $fname = document.getElementById("fname").value;
  var $telephone = document.getElementById("telephone").value;
  var $date = document.getElementById("date").value;
  var $departure = document.getElementById("departure").value;
  var $arrived = document.getElementById("arrived").value;
  var $number1 = document.querySelector(".number1").value;
  var $number2 = document.querySelector(".number2").value;

  document.write(
    '<body style="background: dodgerblue;font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;text-transform: uppercase;text-align: center;display: block;justify-content: center;margin-top: 250px;"></body>',
    '<div class="square1" style="border-width: 4px;border-style: solid;border-image: linear-gradient(to right, #3acfd5 0%, goldenrod 100%) 1 / 25px;position: absolute;top: 40%;left: 18%;width: 250px;height: 250px;transform: rotate(45deg);z-index: -1;></div>',
    '<div  class="square2" style="border-width: 4px;border-style: solid;border-image: linear-gradient(to right, goldenrod 0%, rgb(165, 32, 218) 100%) 1 / 25px;position: absolute;top: 28%;left: 20%;width: 250px;height: 250px;transform: rotate(45deg);z-index: -1;"></div>',
    "<h1>Commande Validé</h1>",
    "<h2>",
    "Merci ",
    $fname,
    " pour votre commande",
    "</h2>",
    "<h3>Voici le recapitulatif de votre réservation veuillez la conserver</h3>",
    "<p><b>",
    $fname,
    "</b></p>",
    "<p><b>",
    $email,
    "</b></p>",
    "<p><b>",
    $telephone,
    "</b></p>",
    "<p><b>",
    $date,
    "</b></p>",
    "<p><b>",
    $departure,
    "</b></p>",
    "<p><b>",
    $arrived,
    "</b></p>",
    "<p><b>",
    $number1,
    " personne(s)",
    "</b></p>",
    "<p><b>",
    $number2,
    " bagage(s)",
    "</b></p>",
    '<button style="background: goldenrod; border: 1px solid black;border-radius: 5px;"><a style="text-decoration: none; color: black; font-size: 20px;display: flex" href="./index.html">',
    "Fermer",
    "</button>",
    "<br>",
    '<button style="background: goldenrod; border: 1px solid black;border-radius: 5px;"><a style="text-decoration: none; color: black; font-size: 20px;display: flex" href="mailto:joe.taxi94@gmail.com">',
    "joe.taxi94@gmail.com",
    "</a>"
  );
}

window.addEventListener("scroll", () => {
  const header2 = document.getElementById("header2");
  if (window.scrollY > 50) {
    header2.style.backgroundColor = "teal";
  } else {
    header2.style.backgroundColor = "dodgerblue";
  }
});
