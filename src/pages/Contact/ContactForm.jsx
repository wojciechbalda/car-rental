import useField from "../../hooks/useField";
import supabase from "../../config/supabase";
import FormWrapper from "../../components/Form/FormWrapper";
import classes from "./ContactForm.module.css";

function ContactForm() {
  const {
    value: firstName,
    setValue: setFirstName,
    isInvalid: isFirstNameInvalid,
    setIsTouched: setIsFirstNameTouched,
  } = useField("", (value) => value.length !== 0);
  const {
    value: email,
    setValue: setEmail,
    isInvalid: isEmailInvalid,
    setIsTouched: setIsEmailTouched,
  } = useField("", (value) => value.includes("@"));
  let {
    value: phone,
    setValue: setPhone,
    isInvalid: isPhoneInvalid,
    setIsTouched: setIsPhoneTouched,
  } = useField(
    "",
    (value) => !isNaN(value) && !value.includes("e") && !value.includes("-")
  );
  const {
    value: subject,
    setValue: setSubject,
    isInvalid: isSubjectInvalid,
    setIsTouched: setIsSubjectTouched,
  } = useField("", (value) => value.length !== 0);
  const {
    value: message,
    setValue: setMessage,
    isInvalid: isMessageInvalid,
    setIsTouched: setIsMessageTouched,
  } = useField("", (value) => value.length !== 0);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      first_name: firstName,
      email,
      phone,
      subject,
      message,
    };

    const { error } = await supabase.from("messages").insert(data);

    if (error) throw new Error("data wasn't send");
  }

  const isDisabled =
    isFirstNameInvalid ||
    isEmailInvalid ||
    isPhoneInvalid ||
    isSubjectInvalid ||
    isMessageInvalid ||
    !email ||
    !firstName ||
    !phone ||
    !subject ||
    !message;

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First name</label>
        <input
          placeholder="your first name"
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onBlur={() => setIsFirstNameTouched(true)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          placeholder="your email (email must include @)"
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setIsEmailTouched(true)}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone number</label>
        <input
          placeholder="your phone number (phone number cannot contain letters!!!)"
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={() => setIsPhoneTouched(true)}
        />
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input
          placeholder="your message subject"
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          onBlur={() => setIsSubjectTouched(true)}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="your message"
          id="message"
          rows={4}
          cols={40}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => setIsMessageTouched(true)}
        />
      </div>
      {isDisabled && (
        <p>Information: The entire form must be completed before sending</p>
      )}
      <button type="submit" className={classes.btn} disabled={isDisabled}>
        Send
      </button>
    </FormWrapper>
  );
}

export default ContactForm;
