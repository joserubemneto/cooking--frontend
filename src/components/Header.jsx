import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import { Head, Logo, Nav, NavLinks, StyledBurger } from './MainStyles'
import useMedia from '../hooks/useMedia'
import { InputGroup, Input, InputRightElement, Flex, Box} from '@chakra-ui/react'
import { ReactComponent as Bloob } from '../assets/Vetor Header 3.svg'
import { ReactComponent as Bloob2 } from '../assets/Vetor Header 2.svg'
import { ReactComponent as Lupa } from '../assets/Lupa.svg'
import bloob3 from '../assets/Vetor Header 1.svg'

const Header = () => {
  const { fonts, colors } = useContext(ThemeContext)
  const [burguerOpen, setBurgerOpen] = useState(false)
  const mobile = useMedia('(max-width: 48rem)')
  const large = useMedia('(min-width: 62.5rem)')

  return (
    <Head mobile={mobile} url={bloob3}>
      <Nav background={mobile}>
        <Link to="/">
          <Logo color={colors.text} mobile={mobile} open={burguerOpen} font={fonts.logo}>Cooking</Logo>
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
          <StyledBurger onClick={() => setBurgerOpen(!burguerOpen)}>
            <div />
            <div />
            <div />
          </StyledBurger>
        )}

        {large && (
          <InputGroup
            alignItems="center"
            maxWidth={"300px"}
          >
            <Input
              backgroundColor={"#FFF"}
              border={"none"}
              boxShadow={"0px 5px 5px rgba(75, 93, 104, 0.1)"}
              borderRadius={"50px"}
              placeholder="O que você quer cozinhar?"
              _focus={{ boxShadow: `0px 2px 4px 0px ${colors.subTitle}`, color: `${colors.text}` }}
            />
            <InputRightElement p={'.7rem'}>
              <Lupa/>
            </InputRightElement>
          </InputGroup>
        )}

      </Nav>

      {!mobile && (
        <Flex ml={"2.5rem"}>
          <Bloob2/>
          <Box ml={"2.5rem"}>
            <Bloob/>
          </Box>
        </Flex>
      )}

    </Head>
  )
}

export default Header
