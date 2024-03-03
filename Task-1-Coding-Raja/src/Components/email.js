import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b0kmoin",
        "template_mlrp5oe",
        form.current,
        "wbA_n0BCZd4WpyuS8"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  
};

export default Contact;
