import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
	padding:0;
	margin:0;
	vertical-align:baseline;
	list-style:none;
	border:0
}

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, b, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
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
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
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

:root {

/* TIPOGRAPHY */
--fontFamilyOswald: 'Oswald', sans-serif;
--fontFamilyLato: 'Lato', sans-serif;

/* PRIMARY PALLETE */
--charcoal: #353C45;
--primary-blue: #2C97DE;
--base-gray: #EFEFEF;
--transparent: transparent;

/* COMPONENTS */
--snow: #2C97DE;
--cloudy: #2BBF6D;
--sunny: #EFC662;
--hot: #E25F70;
--rain: #9577DE;

/* NOTIFICATIONS */
--green-200: #2BBDA8;
--yellow-900: #D9A321;
--red-300: #CB3F4A;
--purple-700: #7149A4;

/* GRAY SCALE PALLETE */
--white: #FFFFFF;
--black: #000000;
--gray-2: #EFEFEF;
--gray-3: #C2C8CF;
--gray-4: #8B939C;
--gray-5: #686C73;
--gray-6: #434B53;
--gray-7: #353D45;
--gray-8: #2E363E;

/* ALERTS */
--negative: #E60000;
--warning: #FFCD07;
--sucess: #168821;
--information: #155BCB;

/* HEADING-1 - 24px */
--heading-1: 1.5rem;
--line-height-h1: 2rem;

/* HEADING-2 - 20px */
--heading-2: 1.25rem;
--line-height-h2: 1.75rem;

/* HEADING-3 - 18px */
--heading-3: 1.125rem;
--line-height-h3: 1.75rem;

/* CONTENT MD - 16px */
--content-md: 1rem;
--line-height-md: 1.5rem;

/* CONTENT SM - 14px */
--content-sm: 0.875rem;
--line-height-sm: 1.25rem;

/* CONTENT XS - 12px */
--content-xs: 0.75rem;
--line-height-xs: 1rem;

}

`;
