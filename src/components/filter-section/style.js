export const ContainerStyle = {
    p: 2,
    bgcolor: "rgba(67,105,253,0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
    width: '100%',
}

export const Divider = {minHeight: "60px", width: '2px', bgcolor: "primary.main", display: {md: 'block', xs: "none"}}

export const FilterBarFieldStyle = {
    "& .MuiOutlinedInput-root": {
        background: "transparent",
        height: "100%",
        width: "100%",
        fontSize: {lg: "20px", xs: "18px"},
        fontFamily: "GilorySemiBold",
        color: "#0B0E16",
        padding: "0 16px",
        border: "none",
        "& fieldset": {
            boxShadow: "none", border: "none",
        },
        "&.Mui-focused fieldset": {
            border: "none"
        },
    },
};

export const FilterContainer = {
    width: "100%", // minHeight: "60px",
    bgcolor: "white",
    borderRadius: "10px",
    display: "flex",
    flexDirection: {md: "row", xs: "column"},
    justifyContent: "space-between",
    gap: "24px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)"
}

export const FilteringSelectorsContainer = {
    width: "100%",
    mt: 2,
    display: "flex",
    flexDirection: {md: "row", xs: "column"},
    alignItems: {md: "center", xs: "flex-start"},
    justifyContent: "space-between",
    gap: "24px",
}

export const FilterSubmitButton = {
    color: "white",
    bgcolor: "primary.main",
    fontSize: {md: "18px", xs: "16px"},
    fontFamily: "GiloryBold",
    textTransform: "capitalize",
    fontWeight: "500",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    m: {md: 1, xs: 2},
    "&:hover": {
        color: "primary.main", bgcolor: "white",
    },
};