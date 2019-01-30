import styled from 'styled-components';

const PrimaryButton = styled.button`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: auto;
  font-family: 'Gotham', 'HelveticaNeue', 'Helvetica Neue', 'Roboto', Arial,
    sans-serif;
  font-size: 0.875rem;
  display: 'inline-block';
  margin: 0;
  background: ${props => props.theme.buttons.primary.backgroundColor};
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.buttons.primary.padding};
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    outline: 0;
  }
`;

export default PrimaryButton;
