import styled, { createGlobalStyle } from "styled-components";

// VARIABLES
export const GRAY = "#EDEDED";
export const GRAY_BORDER = "1px solid #D5D5D5";
export const BORDER_RADIUS = "0.5rem";
export const CONTENT_PADDING = "2rem 1rem";
export const BLUE = "#24399B";

const GlobalStyle = createGlobalStyle`
      @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      
      body {
            margin: 0;
            background-color: ${GRAY};
      }
      
      * {
            box-sizing: border-box;
            font-family: 'Fira Sans', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
            /* transform: scale(0.92) */
      }
`;

export const ContentWrapper = styled.main`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 786px) {
    height: unset;
    padding: 1rem;
  }
`;
export default GlobalStyle;
