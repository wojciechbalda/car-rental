function TextField({label, name, step=1, defaultValue="", type="text"}) {
    const id = label.replaceAll(" ", "")
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {type === 'number' && <input id={id} name={name} step={step} type={type} min={1} defaultValue={defaultValue} required />}     
      {type !== 'number' && <input id={id} name={name} type={type} defaultValue={defaultValue} required />}
    </div>
  );
}

export default TextField;
