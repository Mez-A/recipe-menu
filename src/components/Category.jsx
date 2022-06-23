import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import {List, SLink} from '../styled/Style';
import {NavLink} from 'react-router-dom';

const Category = () => {
  return (
    <List>
        <SLink to={'/cuisine/italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/american'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/thai'}>
            <GiNoodles/>
            <h4>Thaifood</h4>
        </SLink>
        <SLink to={'/cuisine/chinese'}>
            <GiChopsticks/>
            <h4>Chinese</h4>
        </SLink>
    </List>
  )
}

export default Category