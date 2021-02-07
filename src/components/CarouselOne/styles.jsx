import styled from 'styled-components'

const Box = styled.div`
  width: auto;
  height: 290px;

  position: relative;

  background-color: ${(props) => props.bg || 'rgba(0, 0, 0, 0.5);'};

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 1.25rem;

  border-radius: 2rem;
`

const Chef = styled.p`
  position: absolute;
  bottom: 20px;

  font-size: 18px;

  color: #fff;
`

export { Box, Chef }
