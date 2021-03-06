import React from "react";
import Routers from "./routers/Routers";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { modeChange } from "./atom/Atom";
import {
    lightTheme,
    darkTheme,
    yellowTheme,
    blueTheme,
    purpleTheme,
} from "./theme/Thems";

function App() {
    const Theme = useRecoilValue(modeChange);
    let mode = lightTheme;

    switch (Theme) {
        case 0:
            mode = lightTheme;
            break;
        case 1:
            mode = darkTheme;
            break;
        case 2:
            mode = yellowTheme;
            break;
        case 3:
            mode = blueTheme;
            break;
        case 4:
            mode = purpleTheme;
            break;
    }
    return (
        <>
            <ThemeProvider theme={mode}>
                <GlobalStyle />
                <Routers />
            </ThemeProvider>
        </>
    );
}

export default App;

const GlobalStyle = createGlobalStyle`
/* //! font.google.com에서 font import해오기 */
/* @import url('https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap'); */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body{
  /* font-family: 'Nanum Brush Script', cursive; */
  /* background-color: ${(props) => props.theme.bgColor}; */
  color: ${(props) => props.theme.textColor};
  line-height: 1.2;
}
a{
  text-decoration: none;
  color: inherit; // 부모것을 가져와라
}
`;
