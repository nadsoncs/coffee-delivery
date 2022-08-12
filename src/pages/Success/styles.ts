import styled from "styled-components";

export const SuccessContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 10rem;

  main {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.5rem;
    gap: 6.375rem;
  }

  h1 {
    color: ${(props) => props.theme["yellow-dark"]};
    font-weight: 800;
    font-size: 2rem;
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
  }

  .orderInfoWrapper{
    display: flex;
    flex: 1;

    border-top-left-radius: 0.375rem;
    border-top-right-radius: 2.25rem;
    border-bottom-left-radius: 2.25rem;
    border-bottom-right-radius: 0.375rem;

    border: double 1px transparent;
    border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
    border-image-slice: 1;
  }

  .orderInfo {
    padding: 2.5rem;
    display: flex;
    flex: 1;
    
    flex-direction: column;
    gap: 2rem;

    border-top-left-radius: 0.375rem;
    border-top-right-radius: 2.25rem;
    border-bottom-left-radius: 2.25rem;
    border-bottom-right-radius: 0.375rem;
    
    position: relative;
    box-sizing: border-box;
    background: ${(props) => props.theme.white};
    background-clip: padding-box;
    border: solid 1px transparent;


    &:before {
      content: '';
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      z-index: -1;
      margin: -1px;
      border-radius: inherit;
      background: linear-gradient(to bottom, ${(props) => props.theme.yellow}, ${(props) => props.theme.purple});
    }
  }
`

export const OrderItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  p {
    font-size: 1rem;
    max-width: 20rem;
    color: ${(props) => props.theme["base-text"]};
  }
  .icon {
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.white};
  }
  .purple {
    background: ${(props) => props.theme.purple};
  }
  .yellow {
    background: ${(props) => props.theme.yellow};
  }
  .yellow-dark {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`