import Messages from "./Messages"
import Pagination from "../../components/Pagination/Pagination"
import supabase from "../../config/supabase"
import TableContainer from "../../components/UI/TableContainer"

export function Component()
{
    return (
        <>
            <h1>Messages</h1>
            <p>Read messages are less visible. To read message click details and after reading click &quot;ok button&quot;</p>
            <TableContainer>
                <Messages />
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
    .from('messages')
    .select()
    .range(page * 10 - 10, page * 10 - 1)
    .order('created_at', { ascending: false });

    const { count, error: countError } = await supabase
        .from('messages')
        .select('*', { count: 'exact', head: true })


    if (error || countError)
        throw Error("Something went wrong")
    return [data, count]
}
