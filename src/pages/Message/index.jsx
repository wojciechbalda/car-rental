import { useLoaderData, useNavigate } from "react-router-dom";
import FormWrapper from "../../components/Form/FormWrapper";
import supabase from "../../config/supabase";

export function Component() {
  const { created_at, first_name, email, phone, subject, message, id } =
    useLoaderData();

  const navigate = useNavigate()

  async function handleSubmit(e) 
  {
    e.preventDefault()
    const { error } = await supabase.from('messages')
    .update({is_read: true})
    .eq('id', id)
    .select()

    if (!error)
      navigate(-1)
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Date:</label>
        <input id="date" disabled={true} type="text" value={created_at} />
      </div>
      <div>
        <label htmlFor="name">First name:</label>
        <input id="name" disabled={true} type="text" value={first_name} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" disabled={true} type="text" value={email} />
      </div>
      <div>
        <label htmlFor="phone">Phone number:</label>
        <input id="phone" disabled={true} type="text" value={phone} />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input id="subject" disabled={true} type="text" value={subject} />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea id="content" disabled={true} value={message} />
      </div>
      <button type="submit">Go back</button>
    </FormWrapper>
  );
}

export async function loader({ params }) {
  const { id } = params;
  const { data, error } = await supabase
    .from("messages")
    .select()
    .eq("id", id)
    .single();

  if (error) throw Error("Something went wrong");

  return data;
}
