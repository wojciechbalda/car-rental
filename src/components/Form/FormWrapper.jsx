import classes from './FormWrapper.module.css'

function FormWrapper({children, onSubmit})
{
    return (
        <form className={classes.form} onSubmit={onSubmit} >
            {children}
        </form>
    )
}

export default FormWrapper