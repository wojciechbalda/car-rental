import ContactForm from "./ContactForm"
import Map from "./Map"
import classes from './contact.module.css'
import ContentContainer from '../../components/UI/ContentContainer'


export function Component()
{
    return (
        <ContentContainer className={classes["min-height"]}>
            <Map />
            <ContactForm />
        </ContentContainer>
    )
}
