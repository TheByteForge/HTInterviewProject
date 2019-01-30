import styled from 'styled-components';

const Distance = styled.h5`
  color: ${props => props.theme.colors.price};
  font-weight: ${props => props.theme.fontWeights[1]};
  white-space: nowrap;
`;

export default Distance;
