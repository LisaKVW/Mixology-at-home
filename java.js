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
    let showCocktail = document.querySelector("#showCocktail")
    showCocktail.innerHTML = `
        <div class="showCocktail"> 
        <h2  class="showCocktail" id="cocktailName"> ${selectedDrinkName} </h2>
        <img class="showCocktail" src=${image} id="cocktailImage" /> 
        <h3 class="showCocktail"> Ingredients </h3> 
        <span class="showCocktail" id="measurement">${drink.strMeasure1}  </span>
        <span class="showCocktail" id="ingredient">${drink.strIngredient1} , </span> </div>`

    if (drink.strIngredient2 !== null) {
      showCocktail.innerHTML +=
        ` <span class="showCocktail" id="measurement">${drink.strMeasure2} </span>
        <span class="showCocktail" id="ingredient">${drink.strIngredient2} , </span> </div>`
    }

    if (drink.strIngredient3 !== null) {
      showCocktail.innerHTML +=
        ` <span class="showCocktail" id="measurement">${drink.strMeasure3} </span>
        <span class="showCocktail" id="ingredient">${drink.strIngredient3} , </span> `
    }

    if (drink.strIngredient4 !== null) {
      showCocktail.innerHTML +=
        `<span class="showCocktail" id="measurement">${drink.strMeasure4} </span>
        <span class="showCocktail" id="ingredient">${drink.strIngredient4} , </span> `
    }

    if (drink.strIngredient5 !== null) {
      showCocktail.innerHTML +=
        `<span class="showCocktail" id="measurement">${drink.strMeasure5} </span>
        <span class="showCocktail" id="ingredient">${drink.strIngredient5} , </span> `
    }

    if (drink.strIngredient6 !== null) {
      showCocktail.innerHTML +=
        ` <span class="showCocktail" id="measurement">${drink.strMeasure6} </span>
        <span class="showCocktail" id="ingredient">${drink.strIngredient6} , </span> `
    }

    if (drink.strIngredient7 !== null) {
      showCocktail.innerHTML +=
        `<span class="showCocktail" id="measurement">${drink.strMeasure7} </span>
        <span class="showCocktail" id="ingredient">${drink.strIngredient7} , </span>`
    }

    if (drink.strIngredient8 !== null) {
      showCocktail.innerHTML +=
        `<span class="showCocktail" id="measurement">${drink.strMeasure8} </span>
        <span class="showCocktail" id="ingredient">${drink.strIngredient8} , </span>`
    }

    if (drink.strIngredient9 !== null) {
      showCocktail.innerHTML +=
        `<span class="showCocktail" id="measurement">${drink.strMeasure9} </span>
        <span class="showCocktail" id="ingredient">${drink.strIngredient9} , </span>`
    }

    if (drink.strIngredient10 !== null) {
      showCocktail.innerHTML +=
        `<span class="showCocktail" id="measurement">${drink.strMeasure10} </span>
        <span class="showCocktail" id="ingredient">${drink.strIngredient10} , </span>`
    }

    if (drink.strIngredient11 !== null) {
      showCocktail.innerHTML +=
        `<span class="showCocktail" id="measurement">${drink.strMeasure11} </span>
        <span class="showCocktail" id="ingredient">${drink.strIngredient11} , </span>`
    }
    showCocktail.innerHTML += `<h3 class="showCocktail"> Instructions </h3>
    <p class="showCocktail" id="instructions"> ${instructions}. Serve in a ${glass}</p>
    <p class="showCocktail" Don't forget to taste your drink first before serving! </p>`

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

    showRandomDrink.innerHTML = `
        <div class="showCocktail"> 
        <h2 id="cocktailName"> ${selectedDrinkName} </h2>
        <img src=${image} id="cocktailImage" /> </div>
        <h3> Ingredients </h3> 
        <span id="measurement">${drink.strMeasure1}  </span>
        <span id="ingredient">${drink.strIngredient1} , </span>`

    if (drink.strIngredient2 !== null) {
      showRandomDrink.innerHTML +=
        ` <span id="measurement">${drink.strMeasure2} </span>
        <span id="ingredient">${drink.strIngredient2} , </span>`
    }

    if (drink.strIngredient3 !== null) {
      showRandomDrink.innerHTML +=
        ` <span id="measurement">${drink.strMeasure3} </span>
        <span id="ingredient">${drink.strIngredient3} , </span> `
    }

    if (drink.strIngredient4 !== null) {
      showRandomDrink.innerHTML +=
        `<span id="measurement">${drink.strMeasure4} </span>
        <span id="ingredient">${drink.strIngredient4} , </span> `
    }

    if (drink.strIngredient5 !== null) {
      showRandomDrink.innerHTML +=
        `<span id="measurement">${drink.strMeasure5} </span>
        <span id="ingredient">${drink.strIngredient5} , </span> `
    }

    if (drink.strIngredient6 !== null) {
      showRandomDrink.innerHTML +=
        ` <span id="measurement">${drink.strMeasure6} </span>
        <span id="ingredient">${drink.strIngredient6} , </span> `
    }

    if (drink.strIngredient7 !== null) {
      showRandomDrink.innerHTML +=
        `<span id="measurement">${drink.strMeasure7} </span>
        <span id="ingredient">${drink.strIngredient7} , </span>`
    }

    if (drink.strIngredient8 !== null) {
      showRandomDrink.innerHTML +=
        `<span id="measurement">${drink.strMeasure8} </span>
        <span id="ingredient">${drink.strIngredient8} , </span>`
    }

    if (drink.strIngredient9 !== null) {
      showRandomDrink.innerHTML +=
        `<span id="measurement">${drink.strMeasure9} </span>
        <span id="ingredient">${drink.strIngredient9} , </span>`
    }

    if (drink.strIngredient10 !== null) {
      showRandomDrink.innerHTML +=
        `<span id="measurement">${drink.strMeasure10} </span>
        <span id="ingredient">${drink.strIngredient10} , </span>`
    }

    if (drink.strIngredient11 !== null) {
      showRandomDrink.innerHTML +=
        `<span id="measurement">${drink.strMeasure11} </span>
        <span id="ingredient">${drink.strIngredient11} , </span>`
    }
    showRandomDrink.innerHTML += `<h3> Instructions </h3>
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