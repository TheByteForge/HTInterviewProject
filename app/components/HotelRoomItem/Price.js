import styled from 'styled-components';

const Price = styled.h1`
  text-align: right;
  margin: 0;
  text-transform: uppercase;
  font-size: 0.875em;
  white-space: nowrap;
  color: ${props => props.theme.colors.price};
  font-weight: ${props => props.theme.fontWeights[4]};
`;

export default Price;
