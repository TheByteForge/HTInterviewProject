import styled from 'styled-components';

const NavigationBar = styled.div`
  height: 9.174311926605505vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.space};
  border-bottom: #454e5f ${props => props.theme.borders[1]};
  font-weight: ${props => props.theme.fontWeights[1]};
  white-space: nowrap;
`;

export default NavigationBar;
