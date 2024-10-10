/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  // let generated = generatedDomains();
  // generated.forEach(domain => console.log(domain));
  //document.getElementById("generated").innerHTML = generatedDomains();
  console.log("Hello Rigo from the console!");

  console.log("Este mensaje debería aparecer antes que el de window.onload");

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensiones = [".com", ".net", ".us", ".io"];

  function generatedDomains() {
    //let domains = [];

    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          for (let ext of extensiones) {
            document.getElementById("generated").innerHTML += `<p>${p +
              a +
              n +
              ext}</p> `;
          }
        }
      }
    }
    //console.log(domains);

    //return domains;
  }
  generatedDomains();
};
