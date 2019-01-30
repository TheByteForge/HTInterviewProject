import styled from 'styled-components';

const HotelTitle = styled.h1`
  margin: 0rem;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights[5]};
  overflow: hidden;
  @media only screen and (max-width: 460px) {
    font-size: 0.5rem;
  }
`;

export default HotelTitle;
