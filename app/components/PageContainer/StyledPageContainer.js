import styled from 'styled-components';
import media from '../MediaQueries/MediaQueryStyles';

const PageContainer = styled.div`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 100vw;
  overflow-x: hidden;
  
  /* media-queries */
  ${media.xl`font-size:1.05rem; background-color: orange;`}
  ${media.lg`font-size:.85rem; background-color: lightgrey;`}
  ${media.md`font-size:.65rem; background-color: grey;`}
  ${media.sm`font-size:.45rem; background-color: darkgrey;`}
  ${media.xs`font-size:.25rem; background-color: black;`}
`;

export default PageContainer;
