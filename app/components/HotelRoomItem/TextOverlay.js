import styled from 'styled-components';

const TextOverlay = styled.h5`
  background-color: rgba(0, 0, 0, 0.4);
  color: ${props => props.theme.colors.overlay};
  font-weight: ${props => props.theme.fontWeights[1]};
  border: rgb(256, 256, 256, 0.1) ${props => props.theme.borders[1]};
  position: relative;
  top: 10px;
  left: 10px;
  padding: 4px 8px;
  display: inline-block;
  margin: 0;
  z-index: 1;
`;

export default TextOverlay;
