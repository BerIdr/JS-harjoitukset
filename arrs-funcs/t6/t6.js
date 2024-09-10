"use strict";

const kohde = document.querySelector("#target");

const elokuvat = [];

const lkm = prompt("Syota elokuvien lkm");

for (let i = 0; i < lkm; i++) {
  const title = prompt("Syota elokuvan nimi: ");
  const rating = prompt("Syota arvio (1-5): ");
  const elokuva = {
    title,
    rating,
  };

  elokuvat.push(elokuva);
}

elokuvat.sort((a, b) => b.rating - a.rating); //objekteja ei saa aakkosjarjestykseen

console.log(elokuvat);

for (let elokuva of elokuvat) {
  const html = `<tr>
                    <td>${elokuva.title}</td>
                    <td>${elokuva.rating}</td>
                </tr>`;
  kohde.insertAdjacentHTML("beforeend", html); //innerhtml turvaton, hack
}
