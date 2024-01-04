import Logo from "../../../components/Logo/Logo"
import ContentContainer from "../../../components/UI/ContentContainer"
import Contact from "./Contact"
import classes from './Footer.module.css'

function MainFooter()
{   
    return (
        <footer className={classes.footer}>
            <ContentContainer className={classes.flex}>
                <Logo />
                <Contact />
            </ContentContainer>
        </footer>
    )
}

export default MainFooter