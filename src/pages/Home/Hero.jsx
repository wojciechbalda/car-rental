import { Link } from "react-router-dom";
import ContentContainer from "../../components/UI/ContentContainer";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <ContentContainer className={classes.content}>
        <h1>Sport and luxury car rental</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Link to="cars" className={classes.btn}>
          Check our offer
        </Link>
      </ContentContainer>
    </section>
  );
}

export default Hero;
