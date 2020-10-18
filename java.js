//API info cocktails
const API_KEY = "1"
const API_URL = `https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?s=margarita`

//API info Chuck Norris
const API_URL_CHUCK = "https://api.chucknorris.io/jokes/random"


//check API cocktails

const getCocktail = () => {
    axios.get(API_URL).then(getCocktail);
}
console.log(getCocktail())

// const getCocktail = async () => {
//     try {
//         const response = await axios.get(API_URL)
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

document.querySelector(".cocktaill").addEventListener("click", getCocktail);

////////

const getQuote = () => {
    axios.get(API_URL_CHUCK).then(showQuote);
    console.log(axios)
}
console.log(showQuote())


const getQuote = async () => {
    try {
        const response = await axios.get(API_URL_CHUCK)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
console.log(getQuote)

document.querySelector(".chuck").addEventListener("click", getQuote)