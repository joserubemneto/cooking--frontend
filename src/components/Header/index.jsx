import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import { Head, Nav, NavLinks, StyledBurger, BloobBox } from './styles'
import { SearchBar } from './SearchBar'
import { Logo } from '../MainStyles'
import { Bloob } from './Bloob'
import useMedia from '../../hooks/useMedia'
import bloob3 from '../../assets/Vetor Header 1.svg'
import { useRequest } from '../../context/Request'

const Header = () => {
  const { fonts, colors } = useContext(ThemeContext)
  const [burguerOpen, setBurgerOpen] = useState(false)
  const mobile = useMedia('(max-width: 48rem)')
  const large = useMedia('(min-width: 62.5rem)')

  return (
    <Head mobile={mobile} url={bloob3} burguerOpen={burguerOpen} large={large}>
      <Nav mobile={mobile} scroll={scroll}>
        <Link to='/'>
          <Logo color={colors.text} mobile={mobile} font={fonts.logo}>
            Cooking
          </Logo>
        </Link>
        <NavLinks
          color={colors.text}
          hover={colors.subTitle}
          open={burguerOpen}>
          <ul>
            <li>
              <Link
                to='/'
                onClick={() => {
                  setBurgerOpen(false)
                }}>
                Início
              </Link>
            </li>
            <li>
              <Link
                to='/receitas'
                onClick={() => {
                  setBurgerOpen(false)
                }}>
                Receitas
              </Link>
            </li>
            <li>
              <Link
                to='/destaques'
                onClick={() => {
                  setBurgerOpen(false)
                }}>
                Destaques
              </Link>
            </li>
            <li>
              <Link
                to='/chefs'
                onClick={() => {
                  setBurgerOpen(false)
                }}>
                Chefs
              </Link>
            </li>
          </ul>
          {mobile && (
            <div>
              <Link
                to='/sobre'
                onClick={() => {
                  setBurgerOpen(false)
                }}>
                QUEM SOMOS
              </Link>
              <Link
                to='/sobre'
                onClick={() => {
                  setBurgerOpen(false)
                }}>
                CONTATO
              </Link>
              <Link
                to='/sobre'
                onClick={() => {
                  setBurgerOpen(false)
                }}>
                TERMOS
              </Link>
            </div>
          )}
        </NavLinks>
        {mobile && (
          <StyledBurger
            open={burguerOpen}
            onClick={() => setBurgerOpen(!burguerOpen)}>
            <div />
            <div />
            <div />
          </StyledBurger>
        )}

        {large && <SearchBar />}
      </Nav>

      {!mobile && <Bloob />}
    </Head>
  )
}

export default Header
