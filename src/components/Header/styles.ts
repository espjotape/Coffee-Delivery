import styled from "styled-components";

export const Container = styled.header`
 max-width: 90rem;
 display: flex;
 justify-content: space-between;
 align-items: center;

 padding: 2rem 10rem;
 margin: 0 auto;
`


export const Aside = styled.aside`
 display: flex;
 gap: 0.75rem;

 div:first-child {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  
  background-color: ${props => props.theme.COLORS["purple-light"]};
  border-radius: 8px;

  svg {
   color: ${props => props.theme.COLORS["purple"]};
  }

  span {
   color: ${props => props.theme.COLORS["purple"]};
  }
 }
`

export const Cart = styled.div`
 display: flex;
 align-items: center;
 padding: 0.5rem;
 gap: 0.25rem;
 position: relative;

 background-color: ${props => props.theme.COLORS["yellow-light"]};
 border-radius: 6px;

 svg {
  color: ${props => props.theme.COLORS["yellow-dark"]};
 }

 span {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.75rem;
  line-height: 130;
  font-weight: bold;
  color: ${props => props.theme.COLORS["white"]};

  background-color: ${props => props.theme.COLORS["yellow-dark"]};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  top: 0;
  right: 0;

  position: absolute;
  transform: translate(50%, -50%);
 }
`