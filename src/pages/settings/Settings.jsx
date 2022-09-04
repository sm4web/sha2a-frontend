import React from 'react';
import Box from "@mui/material/Box";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {SettingsDrawer, SettingsDrawer_Menu, SettingsDrawer_MenuItem, SettingsDrawer_MenuItem_Left} from "./style";
import {images} from "../../constants";

const options = [
    {label: "Profile", subtitle: "Name, Username, Email address"},
    {label: "Password", subtitle: "Your email address is horeyatm@gmail.com"},
    {label: "Notifications", subtitle: "Sha2a will send you notifications"}
]

function Settings(props) {
    const router = useNavigate()
    const location = useLocation()
    const settingsPath = location.pathname.split('/')[2]
    return (<Box sx={{
        fontFamily: "GiloryBold", minHeight: '100%', display: 'flex', flexDirection: {xs: "column", md: "row"}, p: 4
    }}>
        <Box sx={SettingsDrawer}>
            <h4>User Management</h4>
            <Box sx={{SettingsDrawer_Menu}}>
                {options?.map((item) => (
                    <Box key={item.label} sx={SettingsDrawer_MenuItem}
                         onClick={() => router(`${item.label.toLowerCase()}`)}
                    >
                        <Box sx={SettingsDrawer_MenuItem_Left}>
                            <h5>{item.label}</h5>
                            <p>{item.subtitle}</p>
                        </Box>
                        {settingsPath === item.label.toLowerCase() ?
                            <img src={images.settingsArrowLeft} width={"28px"}/> :
                            <img src={images.settingsArrowRight} width={"28px"}/>
                        }
                    </Box>
                ))}
            </Box>
        </Box>
        <Routes>
            <Route path={'/profile'} element={'Profile'}/>
            <Route path={'/password'} element={'Password'}/>
            <Route path={'/notifications'} element={'notifications'}/>
        </Routes>
    </Box>);
}

export default Settings;