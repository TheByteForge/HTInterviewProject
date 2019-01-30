import styled from 'styled-components';

const HotelTitle = styled.h1`
  margin: 0rem;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights[5]};
  overflow: hidden;
  line-height: 2rem;

  @media only screen and (max-width: 670px) {
    span {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 535px) {
    span,
    h1 {
      font-size: 0.75rem;
      white-space: nowrap;
    }
  }
`;

export default HotelTitle;
