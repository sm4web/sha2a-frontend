export const LoginStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    color: "#111"
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
    gap: "18px",
    width: "100%",
}

export const LoginFormTitle = {
    fontSize: "32px",
    color: "primary.main",
}

export const LoginFormMessage = {
    fontSize: "20px",
    color: "#111",
}


export const LoginSubmitButton = {
    border: "none",
    borderRadius: "8px",
    bgcolor: "primary.main",
    width: "100%",
    height: "60px",
    color: "#fff",
    fontSize: "20px",
    fontFamily: "GiloryBold",
    textTransform: "capitalize"
}


export const Register__AlreadyHaveAccount = {
    color: "primary.dark",
    fontSize: {md: "18px", xs: "16px"},
    textAlign: "center",
    a: {
        textDecoration: "none",
        color: "primary.main"
    }
}
