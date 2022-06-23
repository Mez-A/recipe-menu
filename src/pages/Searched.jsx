import React, {useState} from 'react'
import useSWR from 'swr'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'
import {CuisineCard, Grid} from '../styled/Style'

const searchCuisineApi = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_RECIPE_API_KEY}&number=9&query=`

const fetchHandler = async(...args) => (await axios.get(...args)).data

const Searched = () => {

    let params = useParams()
    const {data} = useSWR(`${searchCuisineApi}${params.search}`, fetchHandler)
    const searchedCuisine = data?.results

    // const getCuisine = async(name) => {
    //     const cuisineData = (await axios.get(`${cuisineRecipeApi}${name}`)).data
    //     setCuisine(cuisineData.results)
    // }

    return (
        <Grid>
        {
            searchedCuisine?.map(recipe => {
                return (
                    <CuisineCard key={recipe.id}>
                        <Link to={'/recipe/' + recipe.id}>
                            <img src={recipe?.image} alt="" />
                            <h4>{recipe?.title}</h4>
                        </Link>
                    </CuisineCard>
                    )
             })
        }
    </Grid>
  )
}

export default Searched