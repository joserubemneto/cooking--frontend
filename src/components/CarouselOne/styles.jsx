import styled from 'styled-components'

const Box = styled.div`
  width: 400px;
  height: 290px;

  position: relative;

  /* background: ${props => `url(${props.background}) no-repeat top center`}; */
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2rem;
`;

const Chef = styled.p`
  position: absolute;
  bottom: 20px;

  font-size: 18px;

  color: #fff
`;


export {Box, Chef}
