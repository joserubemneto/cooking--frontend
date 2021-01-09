import styled from 'styled-components'

const Img = styled.div`
  width: 400px;
  height: 290px;

  position: relative;

  background: ${props => `url(${props.background}) no-repeat top center`};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2rem;
`;

const Chef = styled.p`
  position: absolute;
  bottom: 20px;

  font-size: 18px;
`;

export {Img, Chef}
