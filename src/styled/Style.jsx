import styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

export const Card = styled.div`
    min-height: 10rem;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p{
      position: absolute;
      z-index: 10;
      left: 50%;
      bottom: 10%;
      transform: translate(-50%, 0%);
      color: white;
      text-align: center;
      font-weight: 600;
      font-size: 1rem;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.9));
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem,1fr));
  grid-gap: 1.5rem;
`

export const CuisineCard = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`

export const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0 1.5rem 0 0;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131) ;
  width: 5rem ;
  height: 5rem;
  transform: scale(0.8);

  h4{
    color: #fff;
    font-size: 0.8rem;
  }

  svg{
    color: #fff;
    font-size: 1.3rem;
  }
  &.active{
    background: linear-gradient(to right, #f27121, #e94057);

    svg{
      color: #fff;
    }

    h4{
      color: #fff;
    }
  }
`
export const FormStyle = styled.form`
  margin: 0rem 5rem;
  div{
  position: relative;
  width: 100%;
  }
  input {
    border: none;
    border-radius: 0.7rem;
    background: linear-gradient(35deg, #494949, #313131) ;
    font-size: 1.2rem;
    color: #fff;
    padding: 0.5rem 3rem;
    outline: none;
    width: 100%;
  }
  svg{
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: #fff;
  }
`

export const DetailWrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 3rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131) ;
    color: #fff;
  }
  h2{
    margin-bottom:1rem;
    font-size: 1.2rem;
  }
  li{
    font-size:0.9rem;
    line-height: 1.5rem;
  }
  ul{
    marrgin-top: 1.3rem;
  }
`

export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  color: #313131;
  background-color: #fff;
  border: 2px solid black;
  margin-right: 1rem;
  font-weight: 600;
`

export const Info = styled.div`
  margin-left: 3rem;
`

