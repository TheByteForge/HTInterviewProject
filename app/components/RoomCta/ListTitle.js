import styled from 'styled-components';

const ListTitle = styled.h1`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights[5]};
  overflow: hidden;
`;

export default ListTitle;
