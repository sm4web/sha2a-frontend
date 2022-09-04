export const SettingsDrawer = {
    maxWidth: "576px",
    width: "100%",
    borderRadius: '10px',
    bgcolor: "primary.light",
    minHeight: "576px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
    marginRight: {md: "7.5%"},
    marginBottom: {xs: "12.5%", md: "0"},
    p: 4,

    h4: {
        fontSize: {xs: "18px", md: "24px"}, marginBottom: "45px",
    }
}


export const SettingsDrawer_Menu = {
    display: "flex", flexDirection: "column", gap: "24px"
}

export const SettingsDrawer_MenuItem = {
    borderBottom: "1.75px solid",
    borderColor: "primary.dark",
    marginBottom: "32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    pb: 4,
    cursor: "pointer",
}

export const SettingsDrawer_MenuItem_Left = {
    display: "flex",
    flexDirection: "column",
    h5: {
        fontSize: {xs: "16px", md: "20px"},
        marginBottom: "12px",
        color: "#000022",
    },
    p: {
        color: "rgba(0,0,34,0.5)"
    }
}

