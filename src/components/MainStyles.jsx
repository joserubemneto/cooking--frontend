import styled, { createGlobalStyle } from 'styled-components'

const TopTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.color || '#000'};
`

const HeadTitle = styled.h3`
  font-size: 1.625rem;
  color: ${(props) => props.color || '#000'};
`

const SlideTitle = styled(TopTitle)`
  color: ${(props) => props.color || '#000'};

`
const Head = styled.div`
  padding: 1px 2px;
  background-image: url("${(props) => props.url}");
  border-radius: 4px;
  background-position: 100% 75%;
  background-repeat: no-repeat no-repeat;

  @media (max-width: 768px) {
    background-position: 100% 80%;
  }
`
const Nav = styled.nav`
  display: flex;
  max-width: 1120px;
  align-items: center;
  margin: 1.625rem 4rem;
  justify-content: space-between;
  > :nth-child(1) {
    z-index: 999;
  }
`

const Logo = styled.div`
  margin-right: 4rem;
  font-size: ${({ fontSize }) => fontSize || '2.375rem'};
  & {
    font-family: ${({ font }) => font}
  }
  color: ${({ color, open }) => open ? '#fff' : color};
`

const NavLinks = styled.div`
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
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
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

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: ${(props) => props.font};
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input {
    outline: none;
  }
`

const StyledBurger = styled.div`
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export { TopTitle, HeadTitle, SlideTitle, Head, Logo, Nav, NavLinks, StyledBurger, Container, GlobalStyle }
