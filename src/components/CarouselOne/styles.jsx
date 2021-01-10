import styled from 'styled-components'

const Box = styled.div`
  width: ${({ mobile }) => mobile ? '100%' : '28vw'};;
  height: 290px;

  position: relative;

  background-color: rgba(0, 0, 0, 0.5);

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
