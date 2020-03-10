// Alle modules die nodig zijn voor het project
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static('public'))

const lijst = {
    "broodsoort": {
        "geen": {
            "name": "Geen brood",
            "price": "€0.00"
        },
        "wit": {
            "name": "Wit brood",
            "price": "€1.22"
        },
        "bruin": {
            "name": "Bruin brood",
            "price": "€1.22"
        },
        "tijger": {
            "name": "Tijger brood",
            "price": "€1.09"
        },
        "meergranen": {
            "name": "Meergranen",
            "price": "€2.05"
        },
    },
    "kaassoort": {
        "geen": {
            "name": "Geen kaas",
            "price": "€0.00"
        },
        "jong": {
            "name": "Jonge kaas",
            "price": "€2.99"
        },
        "jong-belegen": {
            "name": "Jong belegen kaas",
            "price": "€3.09"
        },
        "belegen": {
            "name": "Belegen kaas",
            "price": "€3.00"
        },
        "oud": {
            "name": "Oude kaas",
            "price": "€2.79"
        },
    },
    "extra": {
        "geen": {
            "name": "Niks extra's",
            "price": "€0.00"
        },
        "ham": {
            "name": "Ham",
            "price": "€2.19"
        },
        "tomaat": {
            "name": "Tomaten",
            "price": "€2.99"
        },
        "sla": {
            "name": "Sla",
            "price": "€1.00"
      },
    },
    "saussoort": {
        "geen": {
            "name": "Geen saus",
            "price": "€0.00"
        },
        "ketchup": {
            "name": "Ketchup",
            "price": "€0.78"
        },
        "mayonaise": {
            "name": "Mayonaise",
            "price": "€1.99"
        },
        "curry": {
            "name": "Curry",
            "price": "€1.84"
        }
    }
  }

app.get('/', function(req, res) {
    res.render('index.ejs', {lijst: lijst})
})

app.post('/boodschappenlijstje', function(req, res) {
    const {broodsoort, kaassoort, extra, saussoort} = req.body

    let broodprijs = Number(broodsoort.substr(broodsoort.indexOf('€') + 1))
    let kaasprijs = Number(kaassoort.substr(kaassoort.indexOf('€') + 1))
    let extraprijs = Number(extra.substr(extra.indexOf('€') + 1))
    let sausprijs = Number(saussoort.substr(saussoort.indexOf('€') + 1))
    let totalprice = kaasprijs + broodprijs + extraprijs + sausprijs

    res.render('totaal.ejs', { brood: broodsoort, kaas: kaassoort, extra: extra, saus: saussoort, prijs: totalprice})
})

app.post('/opnieuw', function(req, res) {
  res.render('index.ejs', {lijst: lijst})
})

app.listen(3000, function() {
  console.log("Webserver gestart op poort 3000");
});
