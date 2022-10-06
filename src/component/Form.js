import React, { useState } from "react";
import "../styles/form.css";
import { send } from "emailjs-com";

const Form = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_wzewssr", "template_imtiixi", toSend, "zaInNcHC2D_O5DcSf")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="from_name"
        placeholder="Votre nom"
        value={toSend.from_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="message"
        placeholder="Votre message"
        value={toSend.message}
        onChange={handleChange}
      />
      <input
        type="text"
        name="reply_to"
        placeholder="Votre adresse email"
        value={toSend.reply_to}
        onChange={handleChange}
      />
      <button type="submit" />
      Submit
      <button />
    </form>
  );
};

export default Form;
