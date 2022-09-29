import styled from "styled-components";

export const CheckoutContainer = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  padding: 2rem 10rem;

  header {
    display: flex;
    flex-direction: row;

    div {
      margin-left: 0.5rem;
      h3 {
        color: ${(props) => props.theme["base-subtitle"]};
        font-family: Roboto;
        font-weight: 400;
      }

      p {
        color: ${(props) => props.theme["base-text"]}
      }
    }
  }
  .map {
    color: ${(props) => props.theme["yellow-dark"]}
  }
  .dollar{
    color: ${(props) => props.theme.purple}
  }
`

export const FormAddress = styled.form`
  width: 100%;
  padding: 2.5rem;
  

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  margin-top: 1rem;

  .inputContainer {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .inputGroup {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    position: relative;
    span {
      position: absolute;
      right: 0;
      margin-right: 1rem;
      font-size: 0.75rem;
      color: ${props => props.theme["base-label"]};
      font-style: italic;
   }
  }
  .inputMd {
    width: 40%
  }
  .inputFlex {
    flex: 1;
  }

  .inputSm {
    width: 10%;
  }

  input {
    padding: 1rem;
    color: ${(props) => props.theme["base-label"]};
    background: ${(props) => props.theme["base-input"]};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme["base-button"]};

    :focus {
      border: 1px solid ${(props) => props.theme["yellow-dark"]};
    }
  }
`

export const Payment = styled.div`
  width: 100%;
  padding: 2.5rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  margin-top: 1rem;

  .paymentType {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.75rem;
    margin-top: 2rem;
  }
  button {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    border: none;
    border-radius: 6px;
    padding: 1rem;
    gap: 0.75rem;
    background: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.75rem;
  }
  .selected {
    background: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme.purple}
  }

`

export const CoffeesSelected = styled.div`
  width: 100%;
  padding: 2.5rem;
  margin-top: 1rem;
  background: ${(props) => props.theme["base-card"]};

  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;

  hr {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    border: 0;
    border-top: 1px solid #E6E5E5;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    td {
      padding: 0.75rem 0;

      &:first-child {
        text-align: left;
      }
      &:last-child {
        text-align: right;
      }
    }

    tbody {
      td {
        &:last-child {
          font-size: 1rem;
        }
      }
    }

    tfoot {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`

export const ConfirmationButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  text-decoration: uppercase;
  font-weight: bold;
  margin-top: 1.25rem;
`