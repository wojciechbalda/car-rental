import Hero from "./Hero";
import ExplanationCard from "./ExplanationCard";
import ContentContainer from "../../components/UI/ContentContainer";
import Grid from "../../components/UI/Grid";
import Cars from "../../components/Cars/Cars";
import Accordion from "./Accordion";
import supabase from "../../config/supabase";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { FaOpencart } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa6";
import { FaCashRegister } from "react-icons/fa6";

const questionsAndAsnwers = [
  {
    question:
      "Ut voluptatem suscipit eum corporis ipsa cum debitis nihil ab quaerat internos et velit consequuntur et quisquam doloremque et enim itaque?",
    answer:
      "Lorem ipsum dolor sit amet. Qui enim assumenda 33 nihil illo et deleniti nulla! Et iste soluta ut aliquid natus in itaque beatae rem blanditiis nisi ab facere cumque est quidem reiciendis ut dolor eaque.",
  },
  {
    question:
      "Eum enim tempore et voluptatem dolores non doloribus fugiat ex ipsam incidunt.?",
    answer:
      "Eos voluptas dignissimos non sunt autem ab aspernatur exercitationem et sunt voluptatum est tenetur sunt. Ea necessitatibus numquam ut facilis molestiae sit voluptatem illum. Ut accusamus quaerat ut accusantium obcaecati ut aliquam nihil ut voluptate corrupti aut eligendi molestiae in rerum obcaecati ut voluptas dolores",
  },
];

export function Component() {
  const cars = useLoaderData();
  return (
    <>
      <Hero />
      <section>
        <ContentContainer>
          <SectionTitle title="How to rent a car?" />
          <Grid>
            <ExplanationCard
              icon={<FaAddressCard />}
              title="Suspendisse potenti. Vestibulum fringilla risus ut lacus pellentesque?"
              description="Est autem quos et temporibus dolor et rerum facilis et explicabo cupiditate sit quisquam impedit et animi adipisci eum veniam ullam. Ut dolore aliquam sed deleniti repellat vel voluptas voluptas in totam quia. Eum repellendus nobis nam nisi earum est voluptatem quam hic nemo consequatur. Est consequatur laboriosam et possimus aspernatur aut pariatur mollitia."
            />
            <ExplanationCard
              icon={<FaOpencart />}
              title="Praesent vel libero nec justo aliquam congue. ?"
              description="Hic molestiae autem in odio Quis ex iure excepturi aut iste molestiae 33 eveniet error et accusamus voluptatem et molestiae voluptatibus. Sit dolorem sint aut quia sequi et temporibus magnam eos neque commodi. Qui nostrum minus et impedit eveniet sed unde itaque et dolores fuga. 33 aliquid quidem et voluptates quia hic aliquid quas qui dolores quos ad animi voluptas."
            />
            <ExplanationCard
              icon={<FaCashRegister />}
              title="Lorem ipsum dolor sit amet. At dolore similique At adipisci itaque vel voluptas quia?"
              description="Qui quas reprehenderit aut fuga asperiores hic dolorem delectus. Aut quas aspernatur non possimus dicta eos corrupti saepe et quia sunt qui corporis mollitia."
            />
          </Grid>
        </ContentContainer>
      </section>
      <section>
        <ContentContainer>
          <SectionTitle title="Recently added cars" />
          <Cars data={cars} />
        </ContentContainer>
      </section>
      <section>
        <ContentContainer>
          <SectionTitle title="Frequently asked questions" />
          <Accordion data={questionsAndAsnwers} />
        </ContentContainer>
      </section>
    </>
  );
}

export async function loader() {
  const { data, error } = await supabase.from("cars").select().limit(3);

  if (error) throw Error("Something went wrong");

  return data;
}
