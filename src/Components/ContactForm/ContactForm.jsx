import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  //declare useState using by default msg on UI
  const [name, setName] = useState("Parth");
  const [email, setEmail] = useState("parthgajjar127@gmail.com");
  const [text, setText] = useState("Consistency");

  //this fun will fire when user click on submit button and display info of user
  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />

          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Parth Gajjar"
              required
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="parthgajjar127@gmail.com"
              required
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" placeholder="Consistency...." />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>

          {/* diplay info in this format */}
          <div>{name + " | " + email + " | " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
