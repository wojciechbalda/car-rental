import classes from './ContentContainer.module.css'

function ContentContainer({children, className})
{
    return (
        <div className={`${className ? className : ""} ${classes.container}`}>{children}</div>
    )
}

export default ContentContainer