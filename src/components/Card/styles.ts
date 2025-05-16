import styled from "styled-components";

export const Container = styled.div`
 max-width: 16rem;
 background-color: ${props => props.theme.COLORS["base-card"]};
 padding: 0 1.4rem 1.4rem;
 border-radius: 6px 32px;

 display: flex;
 flex-direction: column;
 text-align: center;
 align-items: center;

 > img {
   margin-top: -20px;
   max-width: 120px;
   max-height: 120px;
   transition: transform 0.3s ease;
 }

 h1 {
  font-family: "Baloo 2", sans-serif;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 130%;
  margin-bottom: 0.5rem;
 }

 p {
  width: 100%;
  font-size: 0.87rem;
  line-height: 130%;
  font-weight: regular;
  color: ${props => props.theme.COLORS["base-label"]};
 }
`

export const Tags = styled.section`
 margin: 1rem 0 1.25rem;
 gap: 0.25rem;
 
 display: flex; 
 align-items: center;
 justify-content: center;
 
 > span {
  padding: 0.25rem 0.5rem;
  font-weight: bold;
  font-size: 0.6rem;
  text-transform: uppercase;
  
  color: ${props => props.theme.COLORS["yellow-dark"]};
  background-color: ${props => props.theme.COLORS["yellow-light"]};
  border-radius: 100px;
 }
`

export const ControlCard = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 100%;
 margin-top: 2rem;
`

export const Price = styled.div`
 display: flex;
 align-items: baseline;
 gap: 0.1rem;

 span:first-child {
  font-size: 1rem;
  line-height: 130%;
  font-weight: regular;
  color: ${(props) => props.theme.COLORS['base-text']};
 }

 span:last-child{
  font-size: 1.5rem;
  font-family: "Baloo 2", sans-serif;
  line-height: 130%;
  font-weight: 800;
  color: ${(props) => props.theme.COLORS['base-text']};
 }
`

export const Order = styled.div`
 display: flex;  
 justify-content: center;
 gap: 0.5rem;
 
 > button {
  display: flex;  
  align-items: center;
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.COLORS.background};
  background-color: ${(props) => props.theme.COLORS['purple-dark']};
  border-radius: 6px;

  transition: background ease-in-out .3s;
  
  &:hover {
    background-color: ${(props) => props.theme.COLORS['purple']};
  }
}
`
