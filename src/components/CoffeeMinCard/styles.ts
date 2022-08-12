import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 1rem;
  img {
    width: 4rem;
    height: 4rem;
  }

  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.25rem;
  }
  .controllers {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
  .remove {
    display: flex;
    align-items: center;
    padding: 0.344rem 0.5rem;
    text-transform: uppercase;
    border: none;
    border-radius: 6px;
    gap: 0.25rem;
    font-size: 0.75rem;
    background: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]}
  }
`