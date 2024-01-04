import { Outlet } from "react-router-dom";
import Navbar from './Navbar/Navbar'
import supabase from "../../config/supabase";
import { redirect } from "react-router-dom";
import ContentContainer from "../../components/UI/ContentContainer";

export function Component() {
  return (
    <>
      <Navbar />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </>
  );
}

export async function loader() {
  const { data, error } = await supabase.auth.getSession();
  if (!data.session || error) {
    return redirect("/login");
  }
  return null;
}
