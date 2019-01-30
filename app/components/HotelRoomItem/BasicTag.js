import styled from 'styled-components';

const BasicTag = styled.div`
  background-color: ${props => props.theme.tags.basic};
  text-transform: uppercase;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 3px 0px;
  font-size: 0.65rem;
  padding: 0.25rem 0.75rem 0.25rem 0.75rem;
  margin: 0.75rem;
  white-space: nowrap;
`;

export default BasicTag;
