import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const HeroContainer = styled.div`
  width: 100%;
  height: 34rem;
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  background-image: url(${backgroundImg});
`

export const Info = styled.div`
  width: 50%;
`
export const Title = styled.h1`
  color: ${(props) => props.theme["base-title"]};
  font-size: 3rem;
  font-weight: bold;
  line-height: 130%;
  margin-bottom: 1rem;
`
export const Subtitle = styled.span`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1.25rem;
  line-height: 130%;
`

export const Itens = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4.125rem;
  gap: 1.25rem;
`
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  div {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    color: ${(props) => props.theme.white};
    margin-right: 0.75rem;
  }
  span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
  }
  .cart {
    background: ${(props) => props.theme["yellow-dark"]};
  }
  .timer {
    background: ${(props) => props.theme.yellow};
  }
  .package{
    background: ${(props) => props.theme["base-text"]};
  }
  .coffee {
    background: ${(props) => props.theme.purple};
  }
`