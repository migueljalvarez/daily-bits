import { createGlobalStyle } from "styled-components";
import "../css/font.css";
const GlobalStyle = createGlobalStyle`
:root {
  /* Colors */
  --color-black: #16161a;
  --color-green: #2cb67d;
  --color-darkgray: #232e35;
  --color-gray: #94a1b2;
  --color-red: #ef4565;
  --color-white: #ffffff;
  --color-purple: #7f5af0;
  --color-purple-light: #a786df;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: unset;
  padding: unset;
  background-color: var(--color-black);
  font-family: "Nunito", sans-serif;
  color: var(--color-white);
}

.option-select-default {
  border: 2px solid var(--color-white);
}

.option-select-success {
  border: 2px solid var(--color-green) !important;
}
.option-select-failed {
  border: 2px solid var(--color-red) !important;
}

.radio-default {
  background-image: url("../assets/svg/check-default.svg");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
}
.radio-success {
  background-image: url("../assets/svg/check-success.svg");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
}
.radio-failed {
  background-image: url("../assets/svg/check-failed.svg");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
}
.show {
  display: flex !important;
  bottom: 0px !important;
  z-index: 1 !important;
}

.large {
  width: 156px;
  height: 40px;
}
.mid {
  width: 136px;
  height: 40px;
}
.small {
  width: 68px;
  height: 40px;
}
`;

export default GlobalStyle;
