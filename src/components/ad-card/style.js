export const Card = {
    maxWidth: "520px",
    padding: 2,
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.10)",
    height: "100%",
    cursor: "pointer",
    transition: "all ease-in 0.2s",
    "&:hover": {
        boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
    }
}

export const Card__Image = {
    width: "100%", height: "300px", objectFit: "cover", borderRadius: "inherit"
}

export const Card__Pricing = {
    mt: 4, display: "flex", alignItems: 'center', justifyContent: "space-between",

    h3: {
        fontSize: "24px", color: "primary.main", fontFamily: "GiloryBold"
    }

}

export const Card__Options = {
    display: "flex", alignItems: 'center', gap: {md: "24px", xs: "12px"}
}

export const Card__Title = {
    mt: 4, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px",

    h2: {
        fontSize: "20px", fontFamily: "GiloryBold", color: "primary.dark"
    },

    h3: {
        fontSize: "16px", fontFamily: "GiloryMedium", color: "rgba(0,0,0,0.7)"
    }
}

export const Card__Features = {
    mt: 4,
    width: "100%",
}

export const Card__Feature = {
    userSelect: "none", display: "flex", alignItems: "center", gap: "12px", h3: {
        fontSize: "16px", fontFamily: "GiloryMedium", color: "primary.gray"
    }, svg: {
        color: "primary.dark"
    }
}