import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS["base-button"]};
  background-color: ${({ theme }) => theme.COLORS["base-card"]};
  
  font-size: 0.75rem;
  cursor: pointer;
  transition: background 0.2s, border 0.2s;

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.COLORS["purple-light"]};
    border-color: ${({ theme }) => theme.COLORS.purple};
  }

  &[data-error='true'] {
    border-color: red;
  }

  span {
   color: ${({ theme }) => theme.COLORS["base-text"]};
   text-transform: uppercase;
  }

  svg {
   color: ${({ theme }) => theme.COLORS.purple};
  }
`;
