import {createTheme} from "@mui/material/styles";

export default createTheme({
    palette: {
        primary: {
            main: "#2C4CC9",
            white: "#fff",
            dark: "#0B0E16",
            gray: "#6C6C6C",
            light: "#F5F6FA"
        },
        secondary: {
            blue: "rgba(67,105,253,0.2)",
            main: "#2a2a2a",
        },
        fonts: {
            light: "GiloryLight",
            regular: "GiloryRegular",
            medium: "GiloryMedium",
            semiBold: "GilorySemiBold",
            bold: "GiloryBold",
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        fontFamily: ["GiloryMedium"].join(","),
    },
});
