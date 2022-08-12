import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  padding: 0 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  background: ${(props) => props.theme["base-card"]};

  img {
    margin-top: -1.25rem;
  }

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }

  footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    h3 {
      font-size: 1.5rem;
      color: ${(props) => props.theme["base-text"]};
    }
    span {
      margin-right: 0.25rem;
    }
  }

  .tags{
    margin-top: 0.75rem;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: center;
    span {
      padding: 0.25rem 0.5rem;

      color: ${(props) => props.theme['yellow-dark']};
      background: ${(props) => props.theme['yellow-light']};
      border-radius: 100px;

      font-size: 0.625rem;
      text-transform: uppercase;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .price {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
  .counter {
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
  }
  .cartButton {
    padding: 0.5rem;
    border-radius: 6px;
    border: none;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme["purple-dark"]};

    &:hover{
      background: ${(props) => props.theme.purple};
    }
  }
`