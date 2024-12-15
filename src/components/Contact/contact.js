import "./contact.css";

import React from "react";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(`Sending <small></small>`);
    const formData = new FormData(event.target);

    formData.append("access_key", "5f09c652-f97d-44d4-a1ae-70973f226d31");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Magnam voluptas cumque deserunt nisi optio. Et sapiente quia
          voluptates qui sed omnis libero quidem est. Dolor eaque quod fuga qui
          est possimus expedita. Corporis eos qui enim et tempore vel cumque.
        </p>
        <ul>
          <li><img src={mail_icon} alt="" /> Contact@Wizerd.yh</li>
          <li><img src={phone_icon} alt="" /> (705) 359-8595</li>
          <li><img src={location_icon} alt="" /> Laurel Isle <br />5543 Jacobson Stream  </li>
        </ul>
      </div>
      <div className="contact-col">
        <form action="" onSubmit={onSubmit}>
          <label htmlFor="">Your name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label htmlFor="">Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile" required />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows={6} placeholder="Enter your message" ></textarea>
          <button type="submit" className="btn dark-btn">Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
