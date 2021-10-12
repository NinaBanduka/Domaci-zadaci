import Country from "./Country.js"
import OneCountry from "./OneCountry.js"

const Countries = (countries)=> countries.map(country => Country(country) )

export default Countries