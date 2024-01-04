import MainHeader from './Navbar/MainHeader'
import { Outlet } from "react-router-dom"
import MainFooter from "./Footer/MainFooter"
import ScrollToTop from '../../components/UI/ScrollToTop'

export function Component()
{
    return (
        <>
            <ScrollToTop />
            <MainHeader />
            <Outlet />
            <MainFooter />
        </>
    )
}
