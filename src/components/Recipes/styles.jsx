import styled from 'styled-components'

const CategoryTitle = styled.h3`
  font-weight: ${(props) => props.weight || 'normal' };
  font-size: 22px;
  text-transform: uppercase;
`;

export {
  CategoryTitle
}
