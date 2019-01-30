import styled from 'styled-components';

const LogoImage = styled.svg`
  width: ${props => props.width || '10rem'};
  height: ${props => props.height || 'auto'};
`;

export default LogoImage;
