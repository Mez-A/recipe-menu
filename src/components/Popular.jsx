import { useContext } from "react";
import {AppContext} from '../context/AppContext'
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Card, Gradient, Wrapper} from '../styled/Style'
import {Link} from 'react-router-dom'

const Popular = () => {

    const {popular} = useContext(AppContext);

   

    return (
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide options={{perPage:4, arrows: false, pagination: false, drag: 'free', gap: "1rem"}}>
                    {popular.map((recipe, i) => {
                        return (
                            <SplideSlide key={i}>
                                <Card>
                                    <Link to={'/recipe/' + recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient/>
                                    </Link>
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
    );
};



export default Popular;
