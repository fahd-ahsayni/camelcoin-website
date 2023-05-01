import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Textarea,
  Button,
} from "@/material";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    recaptchaRef.current.execute();

    // Change the button text to "Sending..."
    const sendButton = document.querySelector(".send-button");
    sendButton.innerHTML = "Sending...";

    emailjs
      .send(
        "service_yf2s7tt",
        "template_e1dzfvd",
        formData,
        "AYrkx1jjG82zspr1b"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);

          // Change the button text to "Message Sent"
          sendButton.innerHTML = "Message Sent";
        },
        (error) => {
          console.log("Failed to send email:", error.text);

          // Change the button text back to "Send Message" in case of error
          sendButton.innerHTML = "Send Message";
        }
      );
  };



  return (
    <Card className="md:w-96 w-full bg-gray-50 dark:bg-primary-dark-light shadow-xl">
      <CardHeader
        variant="gradient"
        color="brown"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Get in Touch
        </Typography>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardBody className="flex flex-col gap-4">
          <Input
            name="name"
            color="brown"
            variant="outlined"
            label="What is your name?"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            color="brown"
            variant="outlined"
            type="email"
            label="Your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            name="mobile"
            color="brown"
            type="number"
            variant="outlined"
            label="Your Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />
          <Textarea
            name="message"
            color="brown"
            variant="outlined"
            label="Write your message here"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            type="submit"
            variant="gradient"
            color="brown"
            className="block w-full send-button"
          >
            Send Message
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
