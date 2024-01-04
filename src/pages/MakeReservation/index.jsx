import CompleteResevationForm from "./CompleteReservationForm"
import ContentContainer from "../../components/UI/ContentContainer"
import classes from './ReservationPage.module.css'

export function Component()
{
    return (
        <div className={classes.page}>
            <ContentContainer>
                <CompleteResevationForm />
            </ContentContainer>
        </div>
    )
}
