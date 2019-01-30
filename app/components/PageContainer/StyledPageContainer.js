import styled from 'styled-components';
import media from '../MediaQueries/MediaQueryStyles';

const PageContainer = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 95vw;
  max-width: 1600px;
  overflow-x: hidden;
  
  /* media-queries */
  ${media.xl`font-size:1.05rem; `}
  ${media.lg`font-size:.85rem; `}
  ${media.md`font-size:.65rem; `}
  ${media.sm`font-size:.45rem; `}
  ${media.xs`font-size:.25rem; `}
`;

export default PageContainer;
