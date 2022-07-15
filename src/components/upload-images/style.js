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
    gap: "12px",
    overflowX: "scroll",
    padding: "12px 0",

    img: {
        maxWidth: "320px",
        maxHeight: "240px",
        borderRadius: "10px",
    }
}