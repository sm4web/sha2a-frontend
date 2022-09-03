export const CreateAd = {
    width: "100%",
    padding: {md: "0 24px", xs: "0 12px"},
    mt: 2
}


export const CreateAd__FormContainer = {
    mt: 4,
    display: "flex",
    flexDirection: {md: "row", xs: "column"},
    gap: {md: "5%", xs: "24px"},
    width: "100%",
    height: "100%",
}

export const CreateAd__SideContainer = {
    width: {md: "50%", xs: "100%"},
    gap: {md: "12px", xs: "24px"},
    height: "available",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
}

export const ChooseType = {

    h3: {
        fontSize: "20px", fontFamily: "GiloryMedium"
    }

}

export const ChooseType__ToggleGroup = {
    width: "100%", mt: 2, '& .MuiToggleButtonGroup-grouped': {
        width: "100%",
        height: "60px",
        backgroundColor: "#fff",
        color: "primary.main",
        boxShadow: "0px 3px 12px rgba(0,0,0,0.12)",
        borderRadius: "10px",
        border: "none",
        mr: 2,
        fontSize: {md: "18px", xs: "12px"},
        textTransform: "capitalize",
        padding: "12px",
        boxSizing: "border-box",
        fontFamily: "GiloryBold",
        transition: "all ease-in-out 0.2s",
        "&.Mui-selected, &.Mui-focused": {
            backgroundColor: "primary.main", color: "#fff",
        }
    }
}

export const CreateAd__SubmitButton = {
    border: "none",
    borderRadius: "8px",
    bgcolor: "primary.main",
    width: "100%",
    height: {md: "50px", xs: "45px"},
    color: "#fff",
    fontSize: {md: "20px", xs: "16px"},
    fontFamily: "GiloryMedium",
    textTransform: "capitalize"
}

export const CreateAd__CancelButton = {
    border: "2px solid #2C4CC9",
    borderRadius: "8px",
    bgcolor: "#fff",
    width: "100%",
    height: {md: "50px", xs: "45px"},
    color: "primary.main",
    fontSize: {md: "20px", xs: "16px"},
    fontFamily: "GiloryMedium",
    textTransform: "capitalize"
}