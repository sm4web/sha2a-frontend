export const CreateAd = {
    width: "100%", p: {md: 4, xs: 2},
}


export const CreateAd__FormContainer = {
    mt: 4,
    display: "flex",
    flexDirection: {md: "row", xs: "column"},
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: {md: "5%", xs: "24px"},
    width: "100%"
}

export const CreateAd__SideContainer = {
    width: {md: "50%", xs: "100%"}, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px"
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