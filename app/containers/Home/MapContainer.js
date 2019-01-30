import styled from 'styled-components';
const MapContainer = styled.div`
  max-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.tertiary};
`;

export default MapContainer;
