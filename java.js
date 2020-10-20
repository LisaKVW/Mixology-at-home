console.log("connect check")
//API info cocktails
const API_KEY = "1"
//const drink = drink // this will be used in form, for user to enter a drink search, currently defaul is at margarita
const API_URL = `https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?s=margarita`

//API info Chuck Norris
//API chuck will give random quotes - it will be something like response.data.categories.value
const API_URL_CHUCK = "https://api.chucknorris.io/jokes/random"


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
    // console.log("first")
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?s=${inputSearch}`)
        let drink = response.data.drinks[0]
        console.log(drink)
        let glass = drink.strGlass
        console.log(glass)
        let image = drink.strDrinkThumb
        console.log(image)
        let instructions = drink.strInstructions
        console.log(instructions)
        let showRecipe = document.querySelector("#showRecipe")
        showRecipe.innerHTML = `
        <div class="showCocktail"> 
        <p id="cocktailName" ${drink} </p>
        <img src=${image} id="cocktailImage />

        <h3> Ingredients </h3> 
        <span id="measurement1>${drink.strMeasure1} </span>
        <span id="ingredient1>${drink.strIngredient1}</span

        if(drink.strIngredient2 !== null && drink.strMeasure2 !== null ) {
        showRecipe.innerHTML +=   
          <span id="measurement2>${drink.strMeasure2} </span>
        <span id="ingredient2>${drink.strIngredient2}</span 
        }
        
        if(drink.strIngredient3 !== null ) {
        showRecipe.innerHTML +=
          <span id="measurement3>${drink.strMeasure3} </span>
        <span id="ingredient3>${drink.strIngredient3}</span 
        }
        
        if(drink.strIngredient4 !== null ) {
        showRecipe.innerHTML +=
          <span id="measurement4>${drink.strMeasure4} </span>
        <span id="ingredient4>${drink.strIngredient4}</span 
        }
        
        if(drink.strIngredient5 !== null ) {
        showRecipe.innerHTML +=
          <span id="measurement5>${drink.strMeasure5} </span>
        <span id="ingredient5>${drink.strIngredient5}</span 
        }
        
        if(drink.strIngredient6 !== null ) {
        showRecipe.innerHTML +=
          <span id="measurement6>${drink.strMeasure6} </span>
        <span id="ingredient6>${drink.strIngredient6}</span 
        }
        
        if(drink.strIngredient7 !== null ) {
        showRecipe.innerHTML +=
          <span id="measurement7>${drink.strMeasure7} </span>
        <span id="ingredient7>${drink.strIngredient7}</span 
        }
        
        if(drink.strIngredient8 !== null ) {
        showRecipe.innerHTML +=
          <span id="measurement8>${drink.strMeasure8} </span>
        <span id="ingredient8>${drink.strIngredient8}</span 
        }
        
        if(drink.strIngredient9 !== null ) {
        showRecipe.innerHTML +=
          <span id="measurement9>${drink.strMeasure9} </span>
        <span id="ingredient9>${drink.strIngredient9}</span 
        }
        
        if(drink.strIngredient10 !== null ) {
        showRecipe.innerHTML +=
          <span id="measurement10>${drink.strMeasure10} </span>
        <span id="ingredient10>${drink.strIngredient10}</span 
        }
        
        if(drink.strIngredient1 !== null ) {
        showRecipe.innerHTML +=
          <span id="measurement11>${drink.strMeasure11} </span>
        <span id="ingredient11>${drink.strIngredient11}</span 
        }
        showRecipe.innerHTML += <h5> Instructions </h5>
        <p id="instructions"> ${instructions} in a ${glass}</p>`

        // console.log(drink.strIngredient1)
        // console.log(drink.strMeasure1)
        // console.log(drink.strInstructions)
        // let ingredientMulitple = [[drink.strIngredient1], [drink.strIngredient2], [drink.strIngredient3], [drink.strIngredient4], [drink.strIngredient5], [drink.strIngredient6], [drink.strIngredient7], [drink.strIngredient8], [drink.strIngredient9], [drink.strIngredient10], [drink.strIngredient11], [drink.strIngredient12], [drink.strIngredient13], [drink.strIngredient14], [drink.strIngredient15]]
        // let ingredient1 = [drink.strIngredient1]
        // let ingredient2 = [drink.strIngredient2]
        // console.log(ingredient2)
        // let ingredient3 = [drink.strIngredient3]
        // let ingredient4 = [drink.strIngredient4]
        // let ingredient5 = [drink.strIngredient5]
        // let ingredient6 = [drink.strIngredient6]
        // let ingredient7 = [drink.strIngredient7]
        // let ingredient8 = [drink.strIngredient8]
        // let ingredient9 = [drink.strIngredient9]
        // let ingredient10 = [drink.strIngredient10]
        // let ingredient11 = [drink.strIngredient11]
        // let ingredient12 = [drink.strIngredient12]
        // let ingredient13 = [drink.strIngredient13]
        // let ingredient14 = [drink.strIngredient14]
        // let ingredient15 = [drink.strIngredient15]

        // let drinkMix = []
        // drinkMix.push([[ingredient1], [ingredient2], [ingredient3], [ingredient4], [ingredient5], [ingredient6], [ingredient7], [ingredient8], [ingredient9], [ingredient10], [ingredient11], [ingredient12], [ingredient13], [ingredient14], [ingredient15]])
        // console.log(drinkMix)
        // for (let i = 0; i > drinkMix.length; i++) {
        //     let recipe = drinkMix.filter(key => { return drinkMix[i] = drinkMix[i] !== null ? drinkmix[i] : null })
        //     return recipe
        // }
        //return logic that only return them to my object if they are not null
        // for (let i = 0; i < ingredientMulitple.length; i++) {
        // let ingredient = ingredientMulitple[i]
        //     if (ingredientMulitple[i] != null) {
        //         console.log([drink.strIngredient1])
        //         // return ingredientMulitple[i]
        //     } else {
        //         return
        //     }
        // }
        // console.log([drink.strIngredient1])

    } catch (error) {
        console.log(error)
    }
}
console.log(showSearchCocktail)
// do an if statement - that if there is somthing behind the ingredient/recipe show if null its false and skip
//to show result of cocktail recipe: showRecipe.textContent = response.data.drinks[0.strMeasure1]

//6 spitit buttons
const handleSpirirtClick = (event) => {
    const clickedSpirirt = event.target

}

//eventListener for Spirit blocks
document.querySelectorAll('.spirit').forEach(spirit => spirit.addEventListener('click', handleSpirirtClick))

//API cocktail
document.querySelector("#cocktailBtn").addEventListener("click", getCocktail);

//API Chuck - GOOD
document.querySelector("#chuckQuoteBtn").addEventListener("click", getQuote)

