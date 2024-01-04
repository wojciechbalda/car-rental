import ContentContainer from "../../components/UI/ContentContainer"
import classes from './successPageStyle.module.css'

export function Component() 
{
    return <>
    <ContentContainer>
        <h1 className={classes.text}>The car has been reserved successfully</h1>
        <p className={classes.text}>Disclaimer! The car wasn&apos;t actually stopped in the real world. This is a project for portfolio, and such a company does not exist</p>
    </ContentContainer>
    </>
}
