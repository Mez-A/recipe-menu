import {useState, useEffect, createContext} from 'react'
import axios from 'axios';
// import dotenv from 'dotenv';

export const AppContext = createContext();

const recipeApi = `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_RECIPE_API_KEY}&number=9`
const veggieRecipeApi = `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_RECIPE_API_KEY}&number=9&tags=vegetarian`
const cuisineRecipeApi = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_RECIPE_API_KEY}&number=9&cuisine=`


export const AppProvider = ({children}) => {
    const [popular, setPopular] = useState([]);
    const [veggie, setVeggie] = useState([]);
    const [cuisine, setCuisine] = useState([]);


    const getRecipe = async () => {
        const checkPopular = localStorage.getItem('popular')
        const checkVeggie = localStorage.getItem('veggie')


        if (checkPopular) setPopular(JSON.parse(checkPopular));
        if (checkVeggie) setVeggie(JSON.parse(checkVeggie));
        if (!checkPopular) {
          const recipeData = (await axios.get(recipeApi)).data
        //   console.log(recipeData.recipes.filter(recipe => recipe.vegetarian === true));
          localStorage.setItem('popular', JSON.stringify(recipeData.recipes))
          setPopular(recipeData.recipes)
        }
        if (!checkVeggie) {
            const veggieRecipeData = (await axios.get(veggieRecipeApi)).data
            localStorage.setItem('veggie', JSON.stringify(veggieRecipeData.recipes))
            setVeggie(veggieRecipeData.recipes)
        }
    };

    const getCuisine = async(name) => {
        const cuisineData = (await axios.get(`${cuisineRecipeApi}${name}`)).data
        setCuisine(cuisineData.results)
    }

    useEffect(() => {
        getRecipe();
    }, []);

    return (
        <AppContext.Provider value={{popular, setPopular, setVeggie, veggie, cuisine, getCuisine, setCuisine}}>
            {children}
        </AppContext.Provider>
    )
}