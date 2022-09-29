import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 10rem;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      display: flex;
      gap: 0.25rem;
      justify-content: center;
      align-items: center;
      padding: 0.625rem 0.5rem;
      text-decoration: none;
      border-radius: 6px;
    }

    .location {
      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme.purple};
    }

    .cart {
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      position: relative;

      span {
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 0.625rem;
        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme.white};
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -0.625rem;
        right: -0.625rem;
      }
    }
  }
`;