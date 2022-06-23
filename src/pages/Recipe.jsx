import axios from 'axios'
import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import useSWR from 'swr'
import { Button, Info, DetailWrapper } from "../styled/Style";

const fetchHandler = async(...args) => (await axios.get(...args)).data

const Recipe = () => {
    const params = useParams()
    const [activeTab, setActiveTab] = useState('instructions')

    const recipeInfo = `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_RECIPE_API_KEY}`
    
    const {data} = useSWR(recipeInfo, fetchHandler)
    console.log(data);
  
    return (
    <DetailWrapper>
        <div style={{width:'50%'}}>
            <h2>{data?.title}</h2>
            <img src={data?.image} alt="" style={{width:'80%'}}/>
        </div>
        <Info>
            <Button className={activeTab==='instructions'? 'active' : ''} onClick={()=> setActiveTab('instructions')}>Instructions</Button>
            <Button className={activeTab==='ingredients'? 'active' : ''} onClick={()=> setActiveTab('ingredients')}>Ingredients</Button>
            {activeTab==='instructions' && (
                <div>
                    <h3 dangerouslySetInnerHTML={{__html:data?.summary}}></h3>
                    <h3 dangerouslySetInnerHTML={{__html:data?.instructions}}></h3>
                </div>
            )}
            {activeTab==='ingredients' && (
                <ul>
                    {data.extendedIngredients.map((ingredient) => {
                        return <li key={ingredient?.id}>{ingredient?.original}</li>
                    })}
                </ul>
            )}
        </Info>
    </DetailWrapper>
  )
}

export default Recipe