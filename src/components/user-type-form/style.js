export const ContainerStyle = {
    flexGrow: 1, height: "calc(100vh - 100px)", p: 4, display: "flex", alignItems: "center", justifyContent: "center",
};
export const ContentContainer = {
    maxWidth: "520px",
};
export const Title = {
    fontSize: {
        xl: "32px", lg: "32px", md: "24px", xs: "18px",
    }, fontFamily: "GilorySemiBold",
};

export const Card = {
    bgcolor: "#F8F8FA",
    width: {
        xl: "175px", md: "140px", xs: "130px",
    },
    height: {
        xl: "175px", md: "140px", xs: "130px",
    },
    borderRadius: "10px",
    color: "#2C4CC9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "24px",
    fontFamily: "GiloryBold",
    userSelect: "none",
    cursor: "pointer",
    transition: "all ease-in .2s",
    boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
    fontSize: {
        xl: "24px", lg: "24px", md: "20px", xs: "16px",
    },
    img: {
        width: {xl: "48px", md: "42px", xs: "32px"}, userSelect: "none",
    },
    "&:active": {
        bgcolor: "#2C4CC9", color: "#fff",
    },
};

export const CardActive = {
    bgcolor: "#2C4CC9", color: "#fff", transition: "all ease-in .2s",
};


export const UTypeSubmitButton = {
    border: "none",
    borderRadius: "8px",
    bgcolor: "#2c4cc9",
    width: "100%",
    height: {md: "60px", xs: "45px"},
    color: "#fff",
    fontSize: {md: "20px", xs: "16px"},
    fontFamily: "GiloryBold",
    textTransform: "capitalize",
    mt: 2
}