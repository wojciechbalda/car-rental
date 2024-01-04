import Card from "../../components/UI/Card";
import CardContent from "../../components/UI/CardContent";
import classes from "./ExplanationCard.module.css";

function ExplanationCard({ icon, title, description }) {
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.icon}>{icon}</div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default ExplanationCard;
