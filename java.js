//API info cocktails
const API_KEY = "1"
//const drink = drink // this will be used in form, for user to enter a drink search, currently defaul is at margarita
const API_URL = `https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?s=margarita`

//API info Chuck Norris
//API chuck will give random quotes - it will be something like response.data.categories.value
const API_URL_CHUCK = "https://api.chucknorris.io/jokes/random"

let spiritBox = ["", "", "", "", "", ""]

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



//get and save cocktail from input in form - then go to showSearchCocktail
const getCocktail = (event) => {
  event.preventDefault();
  let inputSearch = document.querySelector("#searchCocktail").value;
  console.log(inputSearch)
  showSearchCocktail(inputSearch);
}

//show cocktail via the input and button cocktailBtn
const showSearchCocktail = async (inputSearch) => {
  try {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?s=${inputSearch}`)
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
    let showRecipe = document.querySelector("#showRecipe")
    showRecipe.innerHTML = `
        <div class="showCocktail"> 
        <h2 id="cocktailName"> ${selectedDrinkName} </h2>
        <img src=${image} id="cocktailImage" /> </div>

        <h3> Ingredients </h3> 
        <span id="measurement">${drink.strMeasure1}  </span>
        <span id="ingredient">${drink.strIngredient1} , </span>`

    if (drink.strIngredient2 !== null) {
      showRecipe.innerHTML +=
        ` <span id="measurement">${drink.strMeasure2} </span>
        <span id="ingredient">${drink.strIngredient2} , </span>`
    }

    if (drink.strIngredient3 !== null) {
      showRecipe.innerHTML +=
        ` <span id="measurement">${drink.strMeasure3} </span>
        <span id="ingredient">${drink.strIngredient3} , </span> `
    }

    if (drink.strIngredient4 !== null) {
      showRecipe.innerHTML +=
        `<span id="measurement">${drink.strMeasure4} </span>
        <span id="ingredient">${drink.strIngredient4} , </span> `
    }

    if (drink.strIngredient5 !== null) {
      showRecipe.innerHTML +=
        `<span id="measurement">${drink.strMeasure5} </span>
        <span id="ingredient">${drink.strIngredient5} , </span> `
    }

    if (drink.strIngredient6 !== null) {
      showRecipe.innerHTML +=
        ` <span id="measurement">${drink.strMeasure6} </span>
        <span id="ingredient">${drink.strIngredient6} , </span> `
    }

    if (drink.strIngredient7 !== null) {
      showRecipe.innerHTML +=
        `<span id="measurement">${drink.strMeasure7} </span>
        <span id="ingredient">${drink.strIngredient7} , </span>`
    }

    if (drink.strIngredient8 !== null) {
      showRecipe.innerHTML +=
        `<span id="measurement">${drink.strMeasure8} </span>
        <span id="ingredient">${drink.strIngredient8} , </span>`
    }

    if (drink.strIngredient9 !== null) {
      showRecipe.innerHTML +=
        `<span id="measurement">${drink.strMeasure9} </span>
        <span id="ingredient">${drink.strIngredient9} , </span>`
    }

    if (drink.strIngredient10 !== null) {
      showRecipe.innerHTML +=
        `<span id="measurement">${drink.strMeasure10} </span>
        <span id="ingredient">${drink.strIngredient10} , </span>`
    }

    if (drink.strIngredient11 !== null) {
      showRecipe.innerHTML +=
        `<span id="measurement">${drink.strMeasure11} </span>
        <span id="ingredient">${drink.strIngredient11} , </span>`
    }
    showRecipe.innerHTML += `<h3> Instructions </h3>
    <p id="instructions"> ${instructions}. Serve in a ${glass}</p>
    <p> Don't forget to taste your drink first before serving! </p>`

  } catch (error) {
    console.log(error)
  }
}

// do an if statement - that if there is somthing behind the ingredient/recipe show if null its false and skip
//to show result of cocktail recipe: showRecipe.textContent = response.data.drinks[0.strMeasure1]



// const showRecipeSpirit = (drinkName) => {
//   showSearchCocktail(drinkName);
//   console.log(showSearchCocktail(drinkName))
//   return showRecipeSpirit(drinkName)
// }

//random drink by Chuck
const getRandomDrink = async () => {
  console.log("first")
  try {
    const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    console.log(response)
    let showRandomDrink = document.querySelector("#showRandomDrink")
    let showRandomIngMeas = document.querySelector("#showRandomIngMeas")
    let showRandomSteps = document.querySelector("#showRandomSteps")

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
    for (let i = 0; i < measurement.length; i++) { // created a for loop, to loop through the ingredients and measurements
      if (measurement[i] !== null) {  // added if - so when loop hits a null result, it stops
        let divMeasIng = document.createElement("div") // created a new div element - this so we can interpolate our looped resutls on the html
        divMeasIng.innerHTML = `${measurement[i]} ${ingredients[i]}`
        showRandomIngMeas.append(divMeasIng) // append our new div at 
      }
    }
    showRandomDrink.innerHTML =
      ` <div class="showCocktail"> 
        <h2 id="cocktailName"> ${selectedDrinkName} </h2>
        <img src=${image} id="cocktailImage" /> </div> 
         <h3> Ingredients </h3> `

    showRandomSteps.innerHTML += `<h3> Instructions </h3>
    <p id="instructions"> ${instructions}. Serve in a ${glass}</p>
    <p> Don't forget to taste your drink first before serving! </p>`

  } catch (error) {
    console.log(error)
  }
}


//API cocktail
document.querySelector("#cocktailBtn").addEventListener("click", getCocktail);

//API Chuck - GOOD
document.querySelector("#chuckQuoteBtn").addEventListener("click", getQuote)

//random drink by Chuck
document.querySelector("#randomDrinkBtn").addEventListener("click", getRandomDrink)
