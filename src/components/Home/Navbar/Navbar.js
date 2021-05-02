import React, { useContext, useEffect } from 'react';
import { menuContext } from '../../../App';
import Menu from './Menu/Menu';
import menuStyles from './Menu/Menu.module.css';
import styles from './Navbar.module.css';
import { Slide, Fade } from 'react-reveal';
import '../../../App.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useContext(menuContext);
    let prevScrollpos = window.pageYOffset;
    useEffect(() => {
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > (currentScrollPos)) {
                document.getElementsByClassName(styles.navbarContainer)[0].style.top = "0";
            } else {
                document.getElementsByClassName(styles.navbarContainer)[0].style.top = "-70px";
            }
            prevScrollpos = currentScrollPos;
        }
    })
    const toggleNavPage = () => {
        const bar1 = document.getElementsByClassName(styles.bar1)[0];
        const bar2 = document.getElementsByClassName(styles.bar2)[0];
        const navPage = document.getElementsByClassName(styles.menuContainer)[0];
        console.log(navPage);
        const navIcon = document.getElementsByClassName(styles.navIcon)[0];
        navPage.style.opacity = "0";
        const newShow = { ...showMenu };
        if (showMenu.display === "none") {
            newShow.display = "flex";
            navIcon.style.rowGap = "0px";
            bar1.style.transform = "rotateZ(45deg)";
            bar2.style.transform = "rotateZ(-45deg)";
            // to prevent scrolling when menu is open
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
        }
        else {
            newShow.display = "none";
            navIcon.style.rowGap = "5px";
            bar1.style.transform = "rotate(0deg)";
            bar2.style.transform = "rotate(0deg)";
            // When the modal is hidden...
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
        setTimeout(() => {
            setShowMenu(newShow);
        }, 220);
        setTimeout(() => {
            navPage.style.opacity = "1";
        }, 230);

    }
    const reloadPage = () => {
        window.location.reload();
    }
    return (
        <Fade>
            <div className={styles.navbarContainer}>
                <div className={styles.navbar}>
                    <div onClick={reloadPage} className={styles.logoContainer}>
                        <div className={styles.logo}>
                            <div className={styles.logoText}>
                                R
                        </div>
                        </div>
                    </div>
                    <div className={styles.navGroup}>
                        <div onClick={toggleNavPage} className={`${styles.navIcon} navIcon`}>
                            <div className={styles.bar1}></div>
                            <div className={styles.bar2}></div>
                        </div>
                        <div className={`${styles.menuContainer} menuContainer`} style={showMenu}>
                            <Menu></Menu>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Navbar;