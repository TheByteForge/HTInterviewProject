import styled from 'styled-components';

const DiscountedPrice = styled.h1`
  text-align: right;
  margin: 0;
  text-transform: uppercase;
  font-size: 1.813rem;
  white-space: nowrap;
  color: ${props => props.theme.tags.samedaydeal};
`;

export default DiscountedPrice;
