import styled, { css } from "styled-components";

export const Container = styled.div`
 max-width: 70rem;
 display: flex;
 justify-content: space-between;
 align-items: self-end;
 margin: 2.5rem auto;
 gap: 2rem;
`

export const Order = styled.div`
 h2 {
  font-size: 2rem;
  line-height: 130%;
  font-weight: 800;
  font-family: 'Baloo 2', sans-serif;
  color: ${(props => props.theme.COLORS["yellow-dark"])};
 }

 span {
  font-size: 1.25rem;
  line-height: 130%;
  font-weight: 400;
  color: ${(props => props.theme.COLORS["base-subtitle"])};
 }
`

export const InfoContainer = styled.div`
 width: 100%;
 margin-top: 2.5rem;
 border-radius: 6px 36px;
 padding: 2px;
 background: ${(props) =>
 `linear-gradient(to bottom right, ${props.theme.COLORS.yellow}, ${props.theme.COLORS.purple})`};

 > div {
   background: ${(props) => props.theme.COLORS.background};
   border-radius: 6px 36px;
   padding: 2.5rem;
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


export const InfoOrders = styled.section`
 .icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  ${baseIconStyle}
  color: ${(props) => props.theme.COLORS.background};
 
  svg {
   width: 16px;
   height: 16px;
  }
 }

 .purple {
  ${baseIconStyle};
  background-color: ${(props) => props.theme.COLORS.purple};
  }

 .yellow {
  ${baseIconStyle};
  background-color: ${(props) => props.theme.COLORS.yellow};
  }

  .yellow-dark {
  ${baseIconStyle};
  background-color: ${(props) => props.theme.COLORS["yellow-dark"]};
  }

  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  background-origin: border-box;

  div {
   display: flex;
   gap: 0.75rem;
  }
`