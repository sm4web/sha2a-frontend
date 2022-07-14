import {useState} from 'react';
import {createStyles, Group, Navbar, Tooltip, UnstyledButton} from '@mantine/core';
import {Ad, Heart, Home2, Icon as TablerIcon, Logout, Settings} from 'tabler-icons-react';
import {useDispatch} from "react-redux";
import {signOut} from '../../features/user/userSlice'

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: "#0B0E16",
        borderRadius: "10px",
        margin: '8px',
        height: "calc(100vh - 110px)",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        border: "none",
        justifyContent: "center",
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            display: "none"
        },
    },
    link: {
        width: 50,
        height: 50,
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#fff",
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
    {icon: Home2, label: 'Home'},
    {icon: Heart, label: 'Favorites'},
    {icon: Ad, label: 'My Ads'},
    {icon: Settings, label: 'Settings'},
];

const SideNav = () => {
    const [active, setActive] = useState(0);
    const {classes, cx} = useStyles();
    const dispatch = useDispatch()

    const onSignOut = () => {
        dispatch(signOut())
    }


    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));

    return (
        <Navbar className={classes.navbar} width={{base: 70}} p="xl">
            <Navbar.Section grow mt={50}>
                <Group direction="column" align="center" spacing={60}>
                    {links}
                </Group>
            </Navbar.Section>
            <Navbar.Section>
                <Group direction="column" align="center" spacing={0}>
                    <NavbarLink onClick={onSignOut} icon={Logout} label="Logout"/>
                </Group>
            </Navbar.Section>
        </Navbar>
    );
}

export default SideNav