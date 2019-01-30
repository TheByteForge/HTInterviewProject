import styled from 'styled-components';

const List = styled.ul`
  color: ${props => props.theme.colors.price};
  font-weight: ${props => props.theme.fontWeights[1]};
  font-size: 0.75rem;
  overflow: hidden;
  list-style: none;
  line-height: ${props => props.theme.lineHeights.normal};

  li {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default List;
