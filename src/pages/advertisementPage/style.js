import Banner from '../../assets/images/ad_banner.png'

export const AdPage = {
    width: '100%',
}

export const AdPage__ImageBar = {
    width: "100%",
    height: {md: "320px", xs: "240px"},
    backgroundImage: `url(${Banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: {md: "24px 12.5%", xs: "24px"},
    gap: {md: "32px", xs: "12px"},
    color: "#fff",
    fontFamily: "GiloryMedium",

}

export const AdPage__BreadCrmp = {
    fontSize: {md: "20px", xs: "16px"}
}


export const AdPage__AdTitle = {
    fontSize: {md: "40px", xs: "24px"},
    fontFamily: "GiloryBold",

}

export const AdPage__AdInfoContainer = {
    width: "100%",
}

export const AdPage__AdInfoHeader = {
    width: "100%",
    maxHeight: "500px",
    display: "flex",
    flexDirection: {md: "row", xs: "column"},
    alignItems: {md: "center", xs: "flex-start"},
    gap: {md: "40px", xs: "24px"}
}

export const AdPage__AdInfoImage = {
    width: {md: "50%", xs: "100%"},
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px"
}

export const AdPage__SellerInfo = {
    width: {md: "50%", xs: "100%"},
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px"
}