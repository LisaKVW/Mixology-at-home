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
        console.log(response.data.value)
        let showQuote = response.data.value
        let quoteElement = document.querySelector("#showQuote")
        quoteElement.innerHTML = showQuote
    } catch (error) {
        console.log(error)
    }
}
console.log(getQuote)



//get and save cocktail from input in form - then go to showSearchCocktail
const getCocktail = (event) => {
    event.preventDefault();
    let inputSearch = document.querySelector("#searchCocktail").value;
    console.log(inputSearch)
    showSearchCocktail(inputSearch);
}

//show ingredient/cocktail via the input and button cocktailBtn
const showSearchCocktail = async (inputSearch) => {
    console.log("first")
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?s=${inputSearch}`)
        console.log(response.data.drinks[0])
    } catch (error) {
        console.log(error)
    }
}
console.log(showSearchCocktail)
// do an if statement - that if there is somthing behind the ingredient/recipe show if null its false and skip


//6 spitit buttons
const handleSpirirtClick = (event) => {
    const clickedSpirirt = event.target

}

//eventListener for Spirit blocks
document.querySelectorAll('.spirit').forEach(spirit => spirit.addEventListener('click', handleSpirirtClick))

//API cocktail
document.querySelector("#cocktailBtn").addEventListener("click", getCocktail);

//API Chuck
document.querySelector("#chuckQuoteBtn").addEventListener("click", getQuote)

