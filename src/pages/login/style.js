export const LoginStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundImage: "linear-gradient(to bottom, #0E3F6C, #000022, #233894)",
    color: "#fff"
}

export const LoginContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: {lg: "120px", md: "50px"},
    height: {md: "720px", xs: "100%"},
    padding: "20px",
    width: "100%",

}


export const SideImage = {
    img: {
        width: "640px",
        display: {md: "block", xs: "none"}
    }
}

export const LoginFormStyle = {
    width: {md: "500px", xs: "100%"},
}

export const LoginFormContent = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    width: "100%",
}

export const LoginFormTitle = {
    fontSize: {md: "32px", xs: "24px"},
    color: "primary.main",
}

export const LoginFormMessage = {
    fontSize: {md: "20px", xs: "16px"},
    color: "#fff",
}

export const LoginForgotPassword = {
    color: "primary.main",
    fontFamily: "GiloryMedium",
    fontSize: {md: "20px", xs: "16px"},
    cursor: "pointer"
}

export const LoginSubmitButton = {
    border: "none",
    borderRadius: "8px",
    bgcolor: "primary.main",
    width: "100%",
    height: {md: "60px", xs: "45px"},
    color: "#fff",
    fontSize: {md: "20px", xs: "16px"},
    fontFamily: "GiloryBold",
    textTransform: "capitalize"
}

export const Login__DontHaveAccount = {
    color: "#fff",
    fontSize: {md: "18px", xs: "12px"},
    textAlign: "center",
    a: {
        textDecoration: "none",
        color: "primary.main"
    }
}
