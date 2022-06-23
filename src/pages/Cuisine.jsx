import {AppContext} from '../context/AppContext'
import React, {useContext, useEffect} from 'react';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';
import {CuisineCard, Grid} from '../styled/Style';


const Cuisine = () => {

    const {cuisine, getCuisine} = useContext(AppContext) 

    let params = useParams()


    useEffect(() => {
        getCuisine(params.type)
        console.log(params.type);
    }, [params.type]);

  return (
    <Grid>
        {
            cuisine.map(recipe => {
                return (
                    <CuisineCard key={recipe.id}>
                        <Link to={'/recipe/' + recipe.id}>
                            <img src={recipe.image} alt="" />
                            <h4>{recipe.title}</h4>
                        </Link>
                    </CuisineCard>
                    )
             })
        }
    </Grid>
  )
}

export default Cuisine