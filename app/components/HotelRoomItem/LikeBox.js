import styled from 'styled-components';

const LikeBox = styled.div`
  color: ${props => props.theme.colors.price};
  font-weight: ${props => props.theme.fontWeights[1]};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -1rem;
`;

export default LikeBox;
