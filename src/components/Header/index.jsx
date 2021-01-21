import React, { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "styled-components"
import { Head, Nav, NavLinks, StyledBurger, BloobBox } from "./styles"
import { SearchBar } from "./SearchBar"
import { Logo } from "../MainStyles"
import { Bloob } from "./Bloob"
import useMedia from "../../hooks/useMedia"
import bloob3 from "../../assets/Vetor Header 1.svg"

const Header = () => {
  const { fonts, colors } = useContext(ThemeContext)
  const [burguerOpen, setBurgerOpen] = useState(false)
  const mobile = useMedia("(max-width: 48rem)")
  const large = useMedia("(min-width: 62.5rem)")

  return (
    <Head mobile={mobile} url={bloob3} large={large}>
      <Nav mobile={mobile} scroll={scroll}>
        <Link to="/">
          <Logo color={colors.text} mobile={mobile} font={fonts.logo}>
            Cooking
          </Logo>
        </Link>
        <NavLinks
          color={colors.text}
          hover={colors.subTitle}
          open={burguerOpen}
        >
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
              <Link to="/sobre">QUEM SOMOS</Link>
              <Link to="/sobre">CONTATO</Link>
              <Link to="/sobre">TERMOS</Link>
            </div>
          )}
        </NavLinks>
        {mobile && (
          <StyledBurger
            open={burguerOpen}
            onClick={() => setBurgerOpen(!burguerOpen)}
          >
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
