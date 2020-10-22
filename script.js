//API info cocktails
const API_KEY = "1"
//const drink = drink // this will be used in form, for user to enter a drink search, currently defaul is at margarita
const API_URL = `https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?s=margarita`

//API info Chuck Norris
//API chuck will give random quotes - it will be something like response.data.categories.value
const API_URL_CHUCK = "https://api.chucknorris.io/jokes/random"

const getCocktail = (event) => {
  event.preventDefault();
  let inputSearch = document.querySelector("#searchCocktail").value;
  console.log(inputSearch)
  showSearchCocktail(inputSearch);
}

const showSearchCocktail = (inputSearch) => {
  axios.get(`https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?s=${inputSearch}`)
    .then(response => {
      console.log("second")
      let cocktailImg = document.querySelector(".cocktailImg")
      cocktailImg.innerHTML = ""

      let cocktailNameContain = document.querySelector(".cocktailNameContain")
      cocktailNameContain.innerHTML = ""

      let cocktailIngredMeas = document.querySelector(".cocktailIngredMeas")
      cocktailIngredMeas.innerHTML = ""

      let cocktailSteps = document.querySelector(".cocktailSteps")
      cocktailSteps.innerHTML = ""

      let cocktailGlass = document.querySelector(".cocktailGlass")
      cocktailGlass.innerHTML = ""

      console.log("third")

      let drink = response.data.drinks[0]
      console.log(drink)
      let selectedDrinkName = drink.strDrink;
      console.log(selectedDrinkName)
      let glass = drink.strGlass
      console.log(glass)
      let image = drink.strDrinkThumb
      console.log(image)
      let instructions = drink.strInstructions
      console.log(instructions)
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
      console.log("fourth")
      for (let i = 0; i < ingredients.length; i++) { // created a for loop, to loop through the ingredients and measurements
        if (ingredients[i] !== null && ingredients[i] !== "::marker") {  // added if - so when loop hits a null result, it stops
          console.log(ingredients[i])
          console.log(measurement[i])
          let newLi = document.createElement("div")
          newLi.innerText = `${measurement[i]} ${ingredients[i]}`

          cocktailIngredMeas.append(newLi)
        }
      }
      cocktailNameContain.innerText = selectedDrinkName;
      cocktailImg.innerHTML = `<img src="${image}">`
      cocktailSteps.innerText = instructions
      cocktailGlass.innerText = glass;
      console.log("six")
    })
}


const getRandomDrink = () => {
  axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(response => {
      console.log("second")
      let cocktailImg = document.querySelector(".cocktailImg")
      cocktailImg.innerHTML = ""

      let cocktailNameContain = document.querySelector(".cocktailNameContain")
      cocktailNameContain.innerHTML = ""

      let cocktailIngredMeas = document.querySelector(".cocktailIngredMeas")
      cocktailIngredMeas.innerHTML = ""

      let cocktailSteps = document.querySelector(".cocktailSteps")
      cocktailSteps.innerHTML = ""

      let cocktailGlass = document.querySelector(".cocktailGlass")
      cocktailGlass.innerHTML = ""

      console.log("third")

      let drink = response.data.drinks[0]
      console.log(drink)
      let selectedDrinkName = drink.strDrink;
      console.log(selectedDrinkName)
      let glass = drink.strGlass
      console.log(glass)
      let image = drink.strDrinkThumb
      console.log(image)
      let instructions = drink.strInstructions
      console.log(instructions)
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
      console.log("fourth")
      for (let i = 0; i < ingredients.length; i++) { // created a for loop, to loop through the ingredients and measurements
        if (ingredients[i] !== null && ingredients[i] !== "::marker") {  // added if - so when loop hits a null result, it stops
          console.log(ingredients[i])
          console.log(measurement[i])
          let newLi = document.createElement("div")
          newLi.innerText = `${measurement[i]} ${ingredients[i]}`

          cocktailIngredMeas.append(newLi)
        }
      }
      cocktailNameContain.innerText = selectedDrinkName;
      cocktailImg.innerHTML = `<img src="${image}">`
      cocktailSteps.innerText = instructions
      cocktailGlass.innerText = glass;
      console.log("six")
    })
}

//API check Chuck Norris - GOOD
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


//API for QUOTE by Chuck 
document.querySelector("#chuckQuoteBtn").addEventListener("click", getQuote)

//API for random drink by Chuck
document.querySelector("#randomDrinkBtn").addEventListener("click", getRandomDrink)

//API - search by cocktail name
document.querySelector("#cocktailBtn").addEventListener("click", getCocktail);