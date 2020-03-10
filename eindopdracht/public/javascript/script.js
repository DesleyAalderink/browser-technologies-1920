if (document.querySelector) {

const form = document.querySelector("form")
const lijstje = document.querySelector(".lijstje-container")

const broodkeuze = document.querySelector('select[name="broodsoort"]')
const kaaskeuze = document.querySelector('select[name="kaassoort"]')
const extrakeuze = document.querySelector('select[name="extra"]')
const sauskeuze = document.querySelector('select[name="saussoort"]')

let broodsoort = broodkeuze.value.substr(0, broodkeuze.value.indexOf('€'))
let kaassoort = kaaskeuze.value.substr(0, kaaskeuze.value.indexOf('€'))
let extrasoort = extrakeuze.value.substr(0, extrakeuze.value.indexOf('€'))
let saussoort = sauskeuze.value.slice(0, sauskeuze.value.indexOf('€'))

let broodprijs = Number(broodkeuze.value.substr(broodkeuze.value.indexOf('€') + 1))
let kaasprijs = Number(kaaskeuze.value.substr(kaaskeuze.value.indexOf('€') + 1))
let extraprijs = Number(extrakeuze.value.substr(extrakeuze.value.indexOf('€') + 1))
let sausprijs = Number(sauskeuze.value.substr(sauskeuze.value.indexOf('€') + 1))


let totalprice = kaasprijs + broodprijs + extraprijs + sausprijs

let section = document.createElement('section')
section.id ="resultaten";
const speed = 1;

function animatieNaarBon(e) {
  e.preventDefault()

  lijstje.style.transform = "translateY(-100%)"

  form.appendChild(section)
  section.innerHTML = `
    <section id=lijstje-container-resultaten>
      <h2> Brood: </h2>
      <p> ${broodsoort} </p>
      <h2> Kaas: </h2>
      <p> ${kaassoort} </p>
      <h2> Extra: </h2>
      <p> ${extrasoort} </p>
      <h2> Saussoort: </h2>
      <p> ${saussoort} </p>
      <h2> Totaal prijs: </h2>
      <p>€${totalprice} </p>
      <a href="/" class="button" value="">Lijstje opnieuw</a>
    </section>
      <div id=driehoeken></div>`;

  setTimeout(function(){
    section.style.transform = "translateY(114%)"
  }, 1000);

}

form.addEventListener("submit", animatieNaarBon)

}
