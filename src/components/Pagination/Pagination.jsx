import { useLoaderData, useSearchParams } from "react-router-dom"
import classes from './Pagination.module.css'

function Pagination()
{
    const numberOfPages = Math.ceil(useLoaderData()[1] / 10)
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = searchParams.get('p') || 1

    const options = []
    for (let i = 1; i <= numberOfPages; i++)
    {
        options.push(<option key={i} value={i}>{i}</option>)
    } 

    function handleChoosePage(e)
    {
        setSearchParams({p: e.target.value})
    }
    
    function handleGoToNextPage()
    {
        setSearchParams({p: (+currentPage + 1)})
    }

    function handleGoToPreviousPage()
    {
        if (currentPage != 2)
            setSearchParams({p: (+currentPage - 1)})
        else 
            setSearchParams()
    } 

    return (
        <div className={classes.pagination}>
            <button onClick={handleGoToPreviousPage} disabled={currentPage <= 1}>prev</button>
                <select value={currentPage} onChange={handleChoosePage} >
                {options}       
            </select>
            <button onClick={handleGoToNextPage} disabled={currentPage >= numberOfPages}>next</button>
        </div>
    )
}

export default Pagination