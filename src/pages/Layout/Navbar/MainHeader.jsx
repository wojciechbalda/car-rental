import Logo from "../../../components/Logo/Logo"
import Navigation from "./Navigation";
import classes from './MainHeader.module.css'
import ContentContainer from "../../../components/UI/ContentContainer"
import Hamburger from "./Hamburger";
import { useEffect, useState } from "react";
import { useLocation,  } from "react-router-dom";

function MainHeader()
{
    const [isNavOpen, setIsNavOpen] = useState(false)

    const {pathname} = useLocation()

    useEffect(() => {
        setIsNavOpen(false)
    }, [pathname])

    return <header className={classes.sticky}>
        <ContentContainer className={classes.header}>
            <Logo />
            <Navigation isOpen={isNavOpen}  />
            <Hamburger isOpen={isNavOpen} onClick={() => setIsNavOpen(prevState => !prevState)} />
        </ContentContainer>
    </header>
}

export default MainHeader;