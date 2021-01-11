import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import { Head, Nav, NavLinks, StyledBurger, BloobBox } from './styles'
import { SearchBar } from './SearchBar'
import { Logo } from '../MainStyles'
import { Bloob } from './Bloob'
import useMedia from '../../hooks/useMedia'
import bloob3 from '../../assets/Vetor Header 1.svg'

const Header = () => {
  const { fonts, colors } = useContext(ThemeContext)
  const [burguerOpen, setBurgerOpen] = useState(false)
  const [scroll, setScroll] = useState(false)
  const mobile = useMedia('(max-width: 48rem)')
  const large = useMedia('(min-width: 62.5rem)')

  const handleScroll = () => {
    if (window.pageYOffset > 0) setScroll(true);
    else setScroll(false)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <Head mobile={mobile} url={bloob3} scroll={scroll} large={large}>
      <Nav mobile={mobile} scroll={scroll}>
        <Link to="/">
          <Logo color={colors.text} mobile={mobile} fontSize={mobile ? "1.75rem" : "2.375rem"} font={fonts.logo}>Cooking</Logo>
        </Link>
        <NavLinks color={colors.text} hover={colors.subTitle} open={burguerOpen}>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/receitas">Receitas</Link>
            </li>
            <li>
              <Link to="/destaques">Destaques</Link>
            </li>
            <li>
              <Link to="/chefs">Chefs</Link>
            </li>
          </ul>
          {mobile && (
            <div>
              <Link to="/quem-somos">QUEM SOMOS</Link>
              <Link to="/contato">CONTATO</Link>
              <Link to="/termos">TERMOS</Link>
            </div>
          )}
        </NavLinks>
        {mobile && (
          <StyledBurger open={burguerOpen} onClick={() => setBurgerOpen(!burguerOpen)}>
            <div />
            <div />
            <div />
          </StyledBurger>
        )}

        {large && (
          <SearchBar/>
        )}
      </Nav>

      {!mobile && (
        <BloobBox scroll={scroll} mobile={mobile}>
          <Bloob/>
        </BloobBox>
      )}

    </Head>
  )
}

export default Header
