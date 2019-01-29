import styled from 'styled-components';

const PrimaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  font-family: 'inherit';
  font-size: 'inherit';
  font-weight: bold;
  display: 'inline-block';
  margin: 0;
  background: ${props => props.theme.buttons.primary.backgroundColor};
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.buttons.primary.padding};
  &:focus {
    outline: 0;
  }
`;

export default PrimaryButton;
