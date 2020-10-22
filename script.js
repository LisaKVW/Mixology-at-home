//API key for cocktails
const API_KEY = "1"
//API to find cocktails by name
const API_URL = `https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?s=margarita`

//API URL Chuck Norris
const API_URL_CHUCK = "https://api.chucknorris.io/jokes/random"

const getCocktail = (event) => {
  event.preventDefault();
  let inputSearch = document.querySelector("#search-cocktail").value;
  showSearchCocktail(inputSearch);
}

const showSearchCocktail = (inputSearch) => {
  axios.get(`https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?s=${inputSearch}`)
    .then(response => {
      let cocktailImg = document.querySelector(".cocktailImg")
      cocktailImg.innerHTML = ""

      let cocktailNameContain = document.querySelector(".cocktail-name-contain")
      cocktailNameContain.innerHTML = ""

      let cocktailIngredMeas = document.querySelector(".cocktailIngredMeas")
      cocktailIngredMeas.innerHTML = ""

      let cocktailSteps = document.querySelector(".cocktailSteps")
      cocktailSteps.innerHTML = ""

      let cocktailGlass = document.querySelector(".cocktailGlass")
      cocktailGlass.innerHTML = ""

      let drink = response.data.drinks[0]
      let selectedDrinkName = drink.strDrink;
      let glass = drink.strGlass
      let image = drink.strDrinkThumb
      let instructions = drink.strInstructions
      let ingredients = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
        drink.strIngredient6,
        drink.strIngredient7,
        drink.strIngredient8,
        drink.strIngredient9,
        drink.strIngredient10,
        drink.strIngredient11
      ]

      let measurement = [
        drink.strMeasure1,
        drink.strMeasure2,
        drink.strMeasure3,
        drink.strMeasure4,
        drink.strMeasure5,
        drink.strMeasure6,
        drink.strMeasure7,
        drink.strMeasure8,
        drink.strMeasure9,
        drink.strMeasure10,
        drink.strMeasure11
      ]
      for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i] !== null && ingredients[i] !== "::marker") {
          let newLi = document.createElement("div")
          newLi.innerText = `${measurement[i]} ${ingredients[i]}`
          cocktailIngredMeas.append(newLi)
        }
      }
      cocktailNameContain.innerText = selectedDrinkName;
      cocktailImg.innerHTML = `<img src="${image}">`
      cocktailSteps.innerText = instructions
      cocktailGlass.innerText = (`Serve in a ${glass}`)

    })
}


const getRandomDrink = () => {
  axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(response => {

      let cocktailImg = document.querySelector(".cocktailImg")
      cocktailImg.innerHTML = ""

      let cocktailNameContain = document.querySelector(".cocktail-name-contain")
      cocktailNameContain.innerHTML = ""

      let cocktailIngredMeas = document.querySelector(".cocktailIngredMeas")
      cocktailIngredMeas.innerHTML = ""

      let cocktailSteps = document.querySelector(".cocktailSteps")
      cocktailSteps.innerHTML = ""

      let cocktailGlass = document.querySelector(".cocktailGlass")
      cocktailGlass.innerHTML = ""

      let drink = response.data.drinks[0]
      let selectedDrinkName = drink.strDrink;
      let glass = drink.strGlass
      let image = drink.strDrinkThumb
      let instructions = drink.strInstructions
      let ingredients = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
        drink.strIngredient6,
        drink.strIngredient7,
        drink.strIngredient8,
        drink.strIngredient9,
        drink.strIngredient10,
        drink.strIngredient11
      ]

      let measurement = [
        drink.strMeasure1,
        drink.strMeasure2,
        drink.strMeasure3,
        drink.strMeasure4,
        drink.strMeasure5,
        drink.strMeasure6,
        drink.strMeasure7,
        drink.strMeasure8,
        drink.strMeasure9,
        drink.strMeasure10,
        drink.strMeasure11
      ]
      for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i] !== null && ingredients[i] !== "::marker") {
          let newLi = document.createElement("div")
          newLi.innerText = `${measurement[i]} ${ingredients[i]}`
          cocktailIngredMeas.append(newLi)
        }
      }
      cocktailNameContain.innerText = selectedDrinkName
      cocktailImg.innerHTML = `<img src="${image}">`
      cocktailSteps.innerText = instructions
      cocktailGlass.innerText = (`Serve in a ${glass}`)
    })
}

//API check Chuck Norris Quote
const getQuote = async () => {
  try {
    const response = await axios.get(API_URL_CHUCK)
    let showQuote = response.data.value
    let quoteElement = document.querySelector("#show-quote")
    quoteElement.innerHTML = (`Chuck's quote of the day: ${showQuote}`)
  } catch (error) {
  }
}

//API for QUOTE by Chuck 
document.querySelector("#chuck-quote-btn").addEventListener("click", getQuote)

//API for random drink by Chuck
document.querySelector("#random-drink-btn").addEventListener("click", getRandomDrink)

//API - search by cocktail name
document.querySelector("#cocktail-btn").addEventListener("click", getCocktail);