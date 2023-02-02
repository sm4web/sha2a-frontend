import React from "react";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Menu2 as MenuIcon, MessageCircle } from "tabler-icons-react";
import { Avatar } from "@mantine/core";
import { IconButton } from "@mui/material";
import { handleDrawer } from "../../features/drawer/drawerSlice";
import { images } from "../../constants";

const Header = () => {
  const router = useNavigate();
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const { username } = useSelector((state) => state?.user?.data);

  const dispatch = useDispatch();
  const handleRoute = (event) => {
    console.dir(event.target);
    const route = event.target.name;
    router(`/${route}`);
  };

  const RenderOptions = () => {
    if (!loggedIn) {
      return (
        <div className={`${styles.header__options} ${styles.header__desktop}`}>
          <button
            name={"login"}
            onClick={handleRoute}
            className={styles.header__loginOption}
          >
            Login
          </button>
          <button
            name={"register"}
            onClick={handleRoute}
            className={styles.header__registerOption}
          >
            Sign up
          </button>
        </div>
      );
    } else {
      return (
        <div className={styles.header__userOptions}>
          <MessageCircle color={"white"} />
          <div
            className={styles.header__userAvatar}
            onClick={() => router("/settings/profile")}
          >
            <Avatar radius={"xl"} alt={"it's me"} />
            <h3>{username && username}</h3>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={styles.header}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Sha2a is the best Real E-state platform in all across Egypt"
        />
        <title>Sha2a - Real E-state</title>
        <link rel="canonical" href="https://sha2a.com/" />
      </Helmet>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          {loggedIn && (
            <IconButton
              onClick={() => {
                dispatch(handleDrawer());
              }}
            >
              <MenuIcon size={"32px"} color={"white"} />
            </IconButton>
          )}

          <IconButton
            onClick={() => {
              router("/");
            }}
          >
            <img
              src={images.logo}
              className={styles.logo}
              alt="logo Sha2a- Real Estate"
            />
          </IconButton>
        </div>
        <RenderOptions />
      </div>
    </div>
  );
};

export default Header;
