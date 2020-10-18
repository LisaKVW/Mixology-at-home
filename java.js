console.log("connect check")
//API info cocktails
const API_KEY = "1"
//const drink = drink // this will be used in form, for user to enter a drink search, currently defaul is at margarita
const API_URL = `https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?s=margarita`

//API info Chuck Norris
//API chuck will give random quotes - it will be something like response.data.categories.value
const API_URL_CHUCK = "https://api.chucknorris.io/jokes/random"


//API check Chuck Norris
const getQuote = async () => {
    console.log("first")
    try {
        const response = await axios.get(API_URL_CHUCK)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
console.log(getQuote)



//check API cocktails
const getCocktail = async () => {
    console.log("first")
    try {
        const response = await axios.get(API_URL)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
console.log(getCocktail)

//API cocktail
document.querySelector(".cocktail").addEventListener("click", getCocktail);

//API Chuck
document.querySelector(".chuck").addEventListener("click", getQuote)

