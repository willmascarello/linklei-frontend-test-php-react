export const responsive = {
  xxs: 480,
  xs: 768,
  sm: 960,
  md: 1120,
  lg: 1440,
  xl: 1920,
};

export const theme = {
  responsive: {
    xxs: `${responsive.xxs}px`,
    xs: `${responsive.xs}px`,
    sm: `${responsive.sm}px`,
    md: `${responsive.md}px`,
    lg: `${responsive.lg}px`,
    xl: `${responsive.xl}px`,
  },
  font: {
    family: "Lato, Source Sans Pro",
    size: "16px",
  },
  colors: {
    primary: "#2D64D1",
    background: "#0E0E0E",
    dark: "#151515",
    light: "#DEDEDE",
  },
  transition: "0.35s",
};

export default theme;
