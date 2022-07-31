import React, {useState} from 'react';
import {createStyles, Drawer, Group, Navbar, Tooltip, UnstyledButton, useMantineTheme} from '@mantine/core';
import {Ad, Heart, Home2, Icon as TablerIcon, Logout, Settings} from 'tabler-icons-react';
import {useDispatch, useSelector} from "react-redux";
import {signOut} from '../../features/user/userSlice'
import {useNavigate} from "react-router-dom";
import {handleDrawer} from '../../features/drawer/drawerSlice'
import {Box} from "@mui/material";
import {images} from "../../constants";


const useStyles = createStyles((theme) => ({
    navbar: {
        height: "fit-content",
    },

    link: {
        width: 50,
        height: 50,
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#2C4CC9",
        '&:hover': {
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        },

    },

    active: {
        '&, &:hover': {
            backgroundColor: "#2C4CC9",
            color: "#fff",
        },
    },

}));

interface NavbarLinkProps {
    icon: TablerIcon;
    label: string;
    active?: boolean;

    onClick?(): void;
}

function NavbarLink({icon: Icon, label, active, onClick}: NavbarLinkProps) {
    const {classes, cx} = useStyles();
    return (
        <Tooltip label={label} position="right" withArrow transitionDuration={0}>
            <UnstyledButton onClick={onClick} className={cx(classes.link, {[classes.active]: active})}>
                <Icon/>
            </UnstyledButton>
        </Tooltip>
    );
}

const mockdata = [
    {icon: Home2, label: 'Home', href: "/"},
    {icon: Heart, label: 'Favorites', href: "/favorites"},
    {icon: Ad, label: 'My Ads', href: "/my-ads"},
    {icon: Settings, label: 'Settings', href: "/settings"},
];

const SideNav = () => {
    const [active, setActive] = useState(0);
    const theme = useMantineTheme();
    const {classes, cx} = useStyles();
    const dispatch = useDispatch()
    const router = useNavigate()
    const opened = useSelector((state) => state.drawer.opened)

    const onSignOut = () => {
        dispatch(signOut())
    }


    const links = mockdata.map((link, index) => (
        <Box
            onClick={() => {
                setActive(index)
                router(link.href)
                dispatch(handleDrawer())
            }}
            display={"flex"}
            alignItems={"center"}
            key={link.label}
            gap={2}
        >
            <NavbarLink
                {...link}
                key={link.label}
                active={index === active}
            />
            <h3 style={{cursor: "pointer", fontSize: "20px", fontFamily: "GiloryMedium"}}>{link.label}</h3>
        </Box>
    ));

    // @ts-ignore
    return (
        <Drawer
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.33}
            overlayBlur={3}
            opened={opened}
            aria-labelledby="drawer-title"
            aria-describedby="drawer-body"
            closeButtonLabel="Close drawer"
            onClose={() => {
                dispatch(handleDrawer())
            }}
        >
            <Navbar className={classes.navbar}>
                <Navbar.Section>
                    <Group direction="column" align="start" spacing={60} style={{maxWidth: "50%", margin: "auto"}}>
                        <img src={images.logoDark} width={120} style={{margin: "auto"}} alt=""/>
                        {links}
                        <Box display={"flex"} alignItems={"center"} gap={2}>
                            <NavbarLink onClick={onSignOut} icon={Logout} label="Logout"/>
                            <h3 style={{cursor: "pointer", fontSize: "20px", fontFamily: "GiloryMedium"}}>Logout</h3>
                        </Box>
                    </Group>
                </Navbar.Section>
            </Navbar>
        </Drawer>

    );
}

export default SideNav