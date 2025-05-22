import styled, { css } from "styled-components";

export const Container = styled.main`
 max-width: 70rem;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
 margin: 0 auto 9rem;
`

export const Content = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding-top: 5.87rem;

 > div {
  margin-right: 2.5rem;
 }
`

export const Heading = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1rem;

 h1 {
  font-family: 'Baloo 2', sans-serif;
  font-size: 3rem;
  line-height: 130%;
  font-weight: 800;
  color: ${(props => props.theme.COLORS["base-title"])}
 }

 p {
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props => props.theme.COLORS["base-subtitle"])};
  margin-bottom: 4.12rem;
 }
`

const baseIconStyle = css`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const Info = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 gap: 1rem;

 .icon-wrapper {
  ${baseIconStyle}
  background-color: ${(props) => props.theme.COLORS["yellow-dark"]};
  color: ${(props) => props.theme.COLORS.background};
 }
 
 .yellow {
  ${baseIconStyle};
  background-color: ${(props) => props.theme.COLORS.yellow};
  }

  .yellow-dark {
  ${baseIconStyle};
  background-color: ${(props) => props.theme.COLORS["yellow-dark"]};
  }

  .base-text {
  ${baseIconStyle};
  background-color: ${(props) => props.theme.COLORS["base-text"]};
  }

  .purple {
   ${baseIconStyle};
   background-color: ${(props) => props.theme.COLORS.purple};
  }

 > div {
   display: flex;
   align-items: center;
   gap: .8rem;

   span {
    color: ${(props) => props.theme.COLORS["base-text"]};
   }
  }
`

export const ListCoffee = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    margin: 8rem 0 3.37rem;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2.5rem;
    grid-gap: 2rem;
  }
`