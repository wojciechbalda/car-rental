import classes from './TableContainer.module.css'

function TableContainer({children}) 
{
    return <div className={classes.container}>
        {children}
    </div>
}

export default TableContainer