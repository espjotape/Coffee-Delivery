import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 
 gap: 0.5rem;
 padding: 0.5rem;

 background-color: ${(props => props.theme.COLORS["base-button"])};
 border-radius: 6px;

 button {
  display: flex;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;

  svg {
   color: ${(props => props.theme.COLORS["purple"])};
  }

  svg:hover {
   color: ${(props => props.theme.COLORS["purple-dark"])};
  }
 }

 span {
  font-size: 1rem;
  font-weight: regular;
  line-height: 130%;
  color: ${(props => props.theme.COLORS["base-title"])}
 }
`