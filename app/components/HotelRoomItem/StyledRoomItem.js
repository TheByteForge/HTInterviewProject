import styled from 'styled-components';

const StyledRoomItem = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  width: 100%;
  height: 100%;
  min-height: 25vh;
  transition: background-color 0.25s ease;

  img {
    background-color: ${props => props.theme.colors.tertiary};
    width: 100%;
    height: auto;
    background-size: cover;
    position: relative;
    top: -1.65rem;
    left: 0;
  }

  &:hover {
    background-color: #43444f;
    transition: background-color 0.25s ease;
  }
`;

export default StyledRoomItem;
