function foo() {}

var foo = 1;

console.log(foo);

(function () {
  console.log("Moi!");
})();

(function () {
  var viesti = "Tämä funktio kutsuu itsensä välittömästi!";
  console.log(viesti);
})();

(function () {
  const message = "Hello from IIFE";

  function greet(name) {
    console.log(message + ", " + name);
  }

  greet("Alice");
})();

//const henkilö = { nimi: "Idriz", ikä: 25 };

//const { nimi, ikä } = henkilö;

//console.log(nimi, ikä);

function tervehdys({ nimi, ikä }) {
  console.log(`Hei ${nimi}, olet ${ikä} vuotta vanha.`);
}

const henkilö = { nimi: "Idriz", ikä: 25 };
tervehdys(henkilö);

// math.js (Moduuli)

export const pi = 3.14159;

export function ympyranAla(sade) {
  return pi * sade * sade;
}
