import classes from "./AccordionItem.module.css";

function AccordionItem({ isOpen, onClick, data: { question, answer } }) {
  return (
    <div className={classes["accordion-item"]} onClick={onClick}>
      <h4>{question}</h4>
      {isOpen && <p className={classes.content}>{answer}</p>}
    </div>
  );
}

export default AccordionItem;
