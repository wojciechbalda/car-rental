import classes from './SectionTitle.module.css'

function SectionTitle({title})
{
    return <h2 className={classes.title}>{title}</h2>
}

export default SectionTitle