export const UploadImagesStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: {md: "24px", xs: '12px'},
}

export const UploadImages__Header = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    h3: {
        fontSize: "20px",
        fontFamily: "GiloryMedium"
    }

}

export const UploadImages__ImagesContainer = {
    display: "flex",
    alignItems: "center",
    gap: {md: "12px", xs: "24px"},
    overflowX: "scroll",
    padding: "12px 0",

    img: {
        width: "300px",
        height: "230px",
        objectFit: "contain",
        borderRadius: "10px",
    }

}