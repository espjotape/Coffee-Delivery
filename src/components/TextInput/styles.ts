import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  position: relative;
  border: 1px solid ${(props) => props.theme.COLORS["base-button"]};
  border-radius: 6px;
  background-color: ${(props) => props.theme.COLORS["base-input"]};
  transition: border-color 0.2s;

  &[data-state='focused'] {
    border-color: ${(props) => props.theme.COLORS["yellow-dark"]};
  }

  &[data-state='blurred'] {
    border-color: ${(props) => props.theme.COLORS["base-button"]};
  }

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }

  input {
    width: 100%;
    border: none;
    background: transparent;
    padding: 0.75rem;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme.COLORS["base-label"]};
    }
  }

  > span {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    padding-right: 2px;
    color: ${(props) => props.theme.COLORS["base-label"]};
    font-style: italic;
    font-size: 0.75rem;
    line-height: 130%;
  }
`

export const Tooltip = styled.div`
  position: absolute;
  top: 50%;
  right: 8px; 
  transform: translateY(-50%);
  
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    color: red;
  }

   span {
    visibility: hidden;
    width: max-content;
    background-color: #040404;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 4px 8px;
    position: absolute;
    z-index: 10;

    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    transition: opacity 0.3s;

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 5px;
      border-style: solid;
      border-color: #000 transparent transparent transparent;
    }
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;