import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 10rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .list {
    margin-top: 3.375rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem 2.5rem;
  }
`