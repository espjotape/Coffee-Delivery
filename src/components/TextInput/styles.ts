import styled from "styled-components";

export const Container = styled.div`
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

  span {
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
