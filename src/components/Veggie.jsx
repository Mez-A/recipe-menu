import { useContext } from "react";
import {AppContext} from '../context/AppContext'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Card, Gradient, Wrapper} from '../styled/Style'
import {Link} from 'react-router-dom'


const Veggie = () => {

  const {veggie} = useContext(AppContext);

  return (
    <div>
    <Wrapper>
        <h3>Our vegetarian Picks</h3>
        <Splide options={{perPage:2, arrows: false, pagination: false, drag: 'free', gap: "1rem"}}>
            {veggie.map((recipe, i) => {
                return (
                    <SplideSlide key={i}>
                        <Card>
                            <Link to={'/recipe/'+recipe.id}>
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
  )
}

export default Veggie