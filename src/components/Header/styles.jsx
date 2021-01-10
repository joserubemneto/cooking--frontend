import styled, { css } from 'styled-components'

export const Head = styled.div`
  width: 100%;
  padding: 1px 2px;
  background-image: url("${(props) => props.url}");
  border-radius: 4px;
  background-position: ${({ large }) => large ? "100% 85%" : "100% 100%"};
  background-repeat: no-repeat no-repeat;

  @media (max-width: 768px) {
    background-position: 100% 80%;
  }

  ${({ scroll }) => scroll && css`
    position: fixed;
    top: 0;
    background-image: none;
    background-color: #fff;
    padding: 0px;
  `}

  ${({ mobile }) => mobile && css`
    background-color: #fff;
    background-image: none;
  `}
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin: 1.625rem 4rem;
  justify-content: space-between;
  > :nth-child(1) {
    z-index: 999;
  }

  ${({ scroll }) => scroll && css`
    margin: 1rem 4rem;
  `}

  ${({ mobile }) => mobile && css`
    background: linear-gradient(201.73deg, #EE6737 -7.35%, #F73C2C 103.6%);
    padding: 1.5rem 2rem;
    border-radius: 50px;
    margin: 1rem 0.5rem;
  `}

  @media (max-width: 62.5rem) {
    justify-content: ${({ mobile }) => mobile ? 'space-between' : 'initial'};
  }
`
export const NavLinks = styled.div`
  display: flex;
  flex-flow: row nowrap;
  ul {
    display: flex;
  }


  li {
    padding-left: 1.5rem;
  }

  li a {
    color: ${({color}) => color};
  }

  li a:hover {
    color: ${({hover}) => hover};
    font-weight: bold;
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 15rem;
    }
    display: ${({ open }) => open ? 'visible' : 'none'};
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    background: linear-gradient(201.73deg, #EE6737 -7.35%, #F73C2C 103.6%);
    transition: transform 0.3s ease-in-out;

    li {
      padding-left: 0;
      padding-top: 1.625rem;
    }

    li a {
      font-size: 1.625rem;
      color:#fff;
    }

    li a:hover {
      color: #fff;
      font-weight: bold;
    }
    > div {
      margin-bottom: 2rem;
    }
    > div a{
      color: #fff;
      font-size: 1.125rem;
      margin-left: 1rem;
    }
  }

  @media (max-width: 360px) {
    ul {
      margin-top: 10rem;
    }
    > div a {
      font-size: 1rem;
    }
  }
`
export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  border-radius: 4px;
  cursor: pointer;
  z-index: 200;

  div {
    width: 2rem;
    height: 0.25rem;
    background: #FFF;
    transform-origin: 5px;
    border-radius: 4px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'}
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      display: ${({ open }) => open ? 'none' : 'visible'};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
