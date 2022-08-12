import styled from "styled-components";

export const CounterContainer = styled.div`
  background: ${(props) => props.theme["base-button"]};
  padding: 0.75rem 0.5rem;
  border-radius: 6px;

  span {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    font-size: 1rem;
    color: ${(props) => props.theme["base-title"]};
  }
  button {
    border: none;
    color: ${(props) => props.theme.purple};
    background: none;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
  &.min {
    padding: 0.344rem 0.5rem;
  }
`