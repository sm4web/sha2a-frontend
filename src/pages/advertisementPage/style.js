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
    fontSize: {md: "40px", xs: "24px"}, fontFamily: "GiloryBold",

}

export const AdPage__AdInfoContainer = {
    width: "100%",
}

export const AdPage__AdInfoHeader = {
    width: "100%",
    height: {md: "550px", xs: "100%"},
    display: "flex",
    flexDirection: {md: "row", xs: "column"},
    alignItems: {md: "center", xs: "flex-start"},
    gap: {md: "40px", xs: "24px"}
}

export const AdPage__AdInfoImage = {
    width: {md: "65%", xs: "100%"}, height: "100%", img: {
        borderRadius: "10px", objectFit: "cover",
    }
}

export const AdPage__SellerInfo = {
    width: {md: "35%", xs: "100%"},
    height: "100%",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    bgcolor: "#F8F8FA",
    borderRadius: "10px",
    p: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",

}

export const AdPage__SellerName = {
    fontSize: {md: "28px", xs: "18px"}, fontFamily: "GilorySemiBold", marginBottom: "12px", color: "primary.dark"
}

export const AdPage__SellerType = {
    fontSize: {md: "20px", xs: "16px"},
    fontFamily: "GiloryMedium",
    color: "#818181",
    marginBottom: {md: "50px", xs: "32px"},
}

export const AdPage__AdDetailsContainer = {
    mt: '60px',
    width: "100%",
    display: "flex",
    flexDirection: {md: "row", xs: "column"},
    alignItems: {md: "center", xs: "flex-start"},
    gap: {md: "40px", xs: "24px"}
}

export const AdPage__AdDetails = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: {md: "65%", xs: "100%"}, height: "100%",
}

export const AdPage__AdHeader = {
    width: "100%",
    display: "flex",
    flexDirection: {md: "row", xs: "column"},
    gap: "12px",
    justifyContent: "space-between",
    alignItems: {md: "center", xs: "flex-start"},
    mb: {md: '45px', xs: "24px"}
}
export const AdPage__AdHeaderName = {
    fontSize: {md: "28px", xs: "24px"},
    fontFamily: "GiloryBold",
}
export const AdPage__AdHeaderPrice = {
    fontSize: {md: "40px", xs: "32px"},
    fontFamily: "GiloryBold",
    color: "primary.main"
}
export const AdPage__AdHeaderAddress = {
    fontSize: {md: "24px", xs: "18px"},
    fontFamily: "GiloryMedium",
    color: "primary.main",
    display: "flex",
    alignItems: "center",
    gap: '12px',
}

export const AdPage__AdAddress = {
    width: {md: "35%", xs: "100%"},
}
