import styled from 'styled-components';
import media from '../MediaQueries/MediaQueryStyles';

const PageContainer = styled.div`
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  
  /* media-queries */
  ${media.xl`font-size:1rem; background-color: orange;`}
  ${media.lg`font-size:.75rem; background-color: lightgrey;`}
  ${media.md`font-size:.5rem; background-color: grey;`}
  ${media.sm`font-size:.25rem; background-color: darkgrey;`}
  ${media.xs`font-size:.15rem; background-color: black;`}
`;

export default PageContainer;
