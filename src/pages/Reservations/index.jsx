import Pagination from "../../components/Pagination/Pagination"
import TableContainer from "../../components/UI/TableContainer"
import supabase from "../../config/supabase"
import ReservationList from "./ReservationList"

export function Component()
{
    return (
        <>
            <h1>Reservations</h1>
            <TableContainer>
                <ReservationList />
            </TableContainer>
            <Pagination />
        </>
    )
}

export async function loader({request})
{
    const searchParams = new URL(request.url).searchParams
    const page = searchParams.get('p') || 1

    const {data, error} = await supabase
    .from('reservations')
    .select()
    .range(page * 10 - 10, page * 10 - 1)
    .order('created_at', { ascending: false });

    if (error)
        throw Error("Something went wrong")


    const { count, error: countError } = await supabase
        .from('reservations')
        .select('id', { count: 'exact', head: true })


    if (countError)
        throw new Error("Something went wrong")

    return [data, count]
}
