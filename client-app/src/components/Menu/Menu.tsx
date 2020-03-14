import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Drawer, IconButton, makeStyles } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FaceIcon from '@material-ui/icons/Face';
import MenuIcon from '@material-ui/icons/Menu';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import ScheduleIcon from '@material-ui/icons/Schedule';

import { ContextType, LoginContext } from '../../App';
import styles from './menu.module.scss';
import { MenuList } from './MenuList/MenuList';

const useStyles = makeStyles(() => ({
  modal: {
    background: "none"
  },
  paper: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    backdropFilter: "blur(5px)",
    color: "#FFF"
  }
}));

export const Menu = () => {
  const classes = useStyles();

  const [isLogged, setLogged] = useState(false);
  const [isDrawerOpened, handleDrawer] = useState(false);

  const context = useContext<ContextType>(LoginContext);

  const handleLogout = async () => {
    setLogged(false);
    context.checkLogin({
      user: undefined,
      isLogged: false
    });
    await context.logout();
  };

  return (
    <>
      <div className={styles.social}>
        <section className={styles.wrapper_social}>
          <div className={styles.info}>
            <section className={styles.phone}>
              <PhoneInTalkIcon />
              <span>012345-6789-0</span>
            </section>
            <section className={styles.date}>
              <ScheduleIcon />
              <span>Mon-Sun 9.00AM to 10.00PM</span>
            </section>
          </div>
          <section className={styles.social_networks}>
            <div className={styles.social_behance}></div>
            <div className={styles.social_vk}></div>
            <div className={styles.social_facebook}></div>
            <div className={styles.social_twitter}></div>
            <div className={styles.social_instagram}></div>
          </section>
        </section>
      </div>
      <div className={styles.menu}>
        <section className={styles.wrapper_menu}>
          <div className={styles.logo}></div>
          <div className={styles.menu_list}>
            <MenuList direction="row" />
          </div>
          <div className={styles.user}>
            <LoginContext.Consumer>
              {value =>
                value.isLogged ? (
                  <>
                    <IconButton>
                      <FaceIcon />
                    </IconButton>
                    <IconButton onClick={handleLogout}>
                      <ExitToAppIcon />
                    </IconButton>
                    {!isLogged && <Redirect to="/" />}
                  </>
                ) : (
                  <IconButton component={Link} to={"/login"}>
                    <FaceIcon />
                  </IconButton>
                )
              }
            </LoginContext.Consumer>
            <IconButton
              className={styles.burger}
              onClick={() => handleDrawer(!isDrawerOpened)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Drawer
            classes={classes}
            anchor="top"
            open={isDrawerOpened}
            onClose={() => handleDrawer(!isDrawerOpened)}
            transitionDuration={800}
          >
            <MenuList direction="column" callback={handleDrawer} />
          </Drawer>
        </section>
      </div>
    </>
  );
};
