import styled, { createGlobalStyle } from 'styled-components'

const TopTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.color || '#000'};

  font-weight: ${(props) => props.weight || 'normal' };
  text-align: ${(props) => props.Talign || 'center' };
  padding: 1.5rem 0;
`

const HeadTitle = styled.h3`
  font-size: 1.625rem;
  color: ${(props) => props.color || '#000'};
  font-weight: ${(props) => props.weight || 'normal' };

`

const SlideTitle = styled(TopTitle)`
  color: ${(props) => props.color || '#000'};

`

const Select = styled.select`
  background: linear-gradient(201.73deg, #EE6737 -7.35%, #F73C2C 103.6%);
  max-width: 150px;
  border-radius: .7rem;
  outline: none;
  padding: .5rem;
  color: white;

  &:focus{
    outline: none;
    border: 1px solid #f73c2c;
  }

`

const Btn = styled.button`
  & {
    background: ${({ background }) => background || "linear-gradient(262.91deg, #EE6737 5.69%, #F73C2C 94.63%)"} ;
    color: ${({ color }) => color || "#fff"};

    margin-top: ${({ margin }) => margin || ""};

    border-radius: 2rem;

    padding: 0.2rem 1rem;

    width: 70%;
    min-width: 240px;
    height: 35px;

    font-weight: bold;
    outline: none;

    transition: .3s;
    }

  &:hover {
    transform: translateY(-5px);
    background: ${({ bgHover }) => bgHover || "linear-gradient(262.91deg, #F73C2C -32.44%, #EE6737 136.54%)"} ;

  }
`

const myBack =  styled.button`
  outline: none;

  height: 30px;
  width: 30px;

  margin-left: 10px;

  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }
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
  font-size: ${({ fontSize }) => fontSize || '2.375rem'};
  & {
    font-family: ${({ font }) => font}
  }
  color: ${({ color, mobile }) => mobile ? '#fff' : color};
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

export { TopTitle, HeadTitle, SlideTitle, Logo, GlobalStyle, Btn, myBack, Select }
