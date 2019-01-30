import styled from 'styled-components';

const NotFoundContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primary};
`;

export default NotFoundContainer;
