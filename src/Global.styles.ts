import styled, { createGlobalStyle } from "styled-components";

// VARIABLES
export const GRAY = "#EDEDED";
export const GRAY_BORDER = "1px solid #D5D5D5";
export const BORDER_RADIUS = "0.5rem";
export const CONTENT_PADDING = "2rem 1rem";
export const BLUE = "#24399B"

const GlobalStyle = createGlobalStyle`
      body {
            margin: 0;
            background-color: ${GRAY};
      }
      
      * {
            box-sizing: border-box;
            font-family: 'Fira Sans', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
      }

      @font-face {
            font-family: "Fira Sans";
            src: url("FiraSans-Heavy.otf");
            font-weight: 900;
            font-style: normal;
      }

      @font-face {
            font-family: "Fira Sans";
            src: url("FiraSans-Light.otf");
            font-weight: 300;
            font-style: normal;
      }

      @font-face {
            font-family: "Fira Sans";
            src: url("FiraSans-Medium.otf");
            font-weight: 500;
            font-style: normal;
      }
      @font-face {
            font-family: "Fira Sans";
            src: url("FiraSans-Regular.otf");
            font-weight: 400;
            font-style: normal;
      }
      @font-face {
            font-family: "Fira Sans";
            src: url("FiraSans-SemiBold.otf");
            font-weight: 700;
            font-style: normal;
      }
`;

export const ContentWrapper = styled.main`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default GlobalStyle;
