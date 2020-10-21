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

//show ingredient/cocktail via the input and button cocktailBtn
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
        <span id="measurement1">${drink.strMeasure1}  </span>
        <span id="ingredient1">${drink.strIngredient1} , </span>`

        if (drink.strIngredient2 !== null && drink.strMeasure2 !== null) {
            showRecipe.innerHTML +=
                ` <span id="measurement2">${drink.strMeasure2} </span>
        <span id="ingredient2">${drink.strIngredient2} , </span>`
        }

        if (drink.strIngredient3 !== null) {
            showRecipe.innerHTML +=
                ` <span id="measurement3">${drink.strMeasure3} </span>
        <span id="ingredient3">${drink.strIngredient3} , </span> `
        }

        if (drink.strIngredient4 !== null) {
            showRecipe.innerHTML +=
                `<span id="measurement4">${drink.strMeasure4} </span>
        <span id="ingredient4">${drink.strIngredient4} , </span> `
        }

        if (drink.strIngredient5 !== null) {
            showRecipe.innerHTML +=
                `<span id="measurement5">${drink.strMeasure5} </span>
        <span id="ingredient5">${drink.strIngredient5} , </span> `
        }

        if (drink.strIngredient6 !== null) {
            showRecipe.innerHTML +=
                ` <span id="measurement6">${drink.strMeasure6} </span>
        <span id="ingredient6">${drink.strIngredient6} , </span> `
        }

        if (drink.strIngredient7 !== null) {
            showRecipe.innerHTML +=
                `<span id="measurement7">${drink.strMeasure7} </span>
        <span id="ingredient7">${drink.strIngredient7} , </span>`
        }

        if (drink.strIngredient8 !== null) {
            showRecipe.innerHTML +=
                `<span id="measurement8">${drink.strMeasure8} </span>
        <span id="ingredient8">${drink.strIngredient8} , </span>`
        }

        if (drink.strIngredient9 !== null) {
            showRecipe.innerHTML +=
                `<span id="measurement9">${drink.strMeasure9} </span>
        <span id="ingredient9">${drink.strIngredient9} , </span>`
        }

        if (drink.strIngredient10 !== null) {
            showRecipe.innerHTML +=
                `<span id="measurement10">${drink.strMeasure10} </span>
        <span id="ingredient10">${drink.strIngredient10} , </span>`
        }

        if (drink.strIngredient11 !== null) {
            showRecipe.innerHTML +=
                `<span id="measurement11">${drink.strMeasure11} </span>
        <span id="ingredient11">${drink.strIngredient11} , </span>`
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

// spitit buttons - for all 6 spirits 
const handleSpiritClick = async (event) => {
    //console.log("first")
    try {
        let spirit = event.target.id
        //spirit is the id  - the HTML element (id) is now triggered via event.target 
        //So we wrapped our handleSpiritClick inside an anomenous function, this so we can give it an paremeter of event, and the event os needed to grab the id
        //console.log("event", event) this grabs the whole <div>
        //console.log("target", event.target) //grabs the div id
        //console.log(spirit)  get value of div - which it the id
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spirit}`) //template literal ${spirit}
        console.log(response)

        let drink = response.data.drinks[0]
        console.log(drink)

        let drinkName = response.data.drinks[0].strDrink
        console.log(drinkName)
        // return drinkName
        // console.log(drinkName)

        // let image = drink.strDrinkThumb
        // console.log(image)

        // const idDrink = drink.idDrink;
        // console.log(idDrink)

        // const responseWithId = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${idDrink}`)
        // console.log(responseWithId)

        // let glass = drink.strGlass
        // console.log(glass)
        // let instructions = drink.strInstructions
        // console.log(instructions)
        // let vodkaDrink = document.querySelector("#vodka") //interpolate with backtick?
        // vodkaDrink.innerHTML = drink
        showSearchCocktail(drinkName)
        console.log(showSearchCocktail(drinkName))

    } catch (error) {
        console.log(error)
    }
}


// const showRecipeSpirit = (drinkName) => {
//   showSearchCocktail(drinkName);
//   console.log(showSearchCocktail(drinkName))
//   return showRecipeSpirit(drinkName)
// }



//eventListener for Spirit all 6
document.querySelectorAll('.spirit').forEach(spirit => spirit.addEventListener('click', function (event) {
    handleSpiritClick(event)
}))
//we added an anonemous function and gave it a paramener, in this case parameterus event. We can now grab the 'event' in handleSpiritClick function, this because we gave it an parameter


//API cocktail
document.querySelector("#cocktailBtn").addEventListener("click", getCocktail);

//API Chuck - GOOD
document.querySelector("#chuckQuoteBtn").addEventListener("click", getQuote)




//trying to get by ingredient
const getIngredient = (event) => {
    event.preventDefault();
    let inputSearchIngr = document.querySelector("#searchIngredient").value;
    console.log(inputSearchIngr)
    showSearchIngredient(inputSearchIngr);
}

// per ingredient - NOT WORKING
const showSearchIngredient = async (inputSearchIngr) => {
    console.log("first")
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputSearchIngr}`) //template literal ${spirit}
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
        for (let i = 0; i < ingredients.length; i++) {
            if (ingredients[i] !== null) {
                console.log(ingredients[i])
            }
        }
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
        for (let i = 0; i < measurement.length; i++) {
            if (measurement[i] !== null) {
                console.log(measurement[i])
            }
        }
    } catch (error) {
        console.log(error)
    }
}



//eventListener for Ingredient
document.querySelector("#ingredientBtn").addEventListener("click", getIngredient);

// < input type = "text" id = "searchIngredient" placeholder = "enter an ingredient" />
//   <button id="ingredientBtn">search ingredient</button>