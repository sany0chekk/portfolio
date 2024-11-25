"use client";

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import emailjs from "@/utils/emailjs";
import toast from "react-hot-toast";
import Loader from "./Loader";
import { useState } from "react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const SERVICE_KEY = process.env.NEXT_PUBLIC_SERVICE_KEY;
  const TEMPLATE_KEY = process.env.NEXT_PUBLIC_TEMPLATE_KEY;

  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    setIsLoading(true);

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    };

    try {
      const result = await emailjs.send(
        SERVICE_KEY,
        TEMPLATE_KEY,
        templateParams
      );
      console.log("SUCCESS!", result.status, result.text);
      toast.success("Thank you for your message! I will get back to you soon.");
      resetForm();
    } catch (error) {
      console.log("FAILED...", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="relative overflow-hidden bg-modal p-6 rounded-md flex flex-col gap-6">
        {isLoading && <Loader />}
        <div className="flex flex-col">
          <label htmlFor="name" className="font-bold text-base mb-1 opacity-70">
            Enter your name:
          </label>
          <Field
            name="name"
            placeholder="Your Name"
            className="bg-modalHover p-3 rounded-md outline-none font-semibold text-base transition-opacity opacity-60 focus:opacity-100"
          />
          <ErrorMessage name="name" />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="font-bold text-base mb-1 opacity-70"
          >
            Enter your email:
          </label>
          <Field
            name="email"
            type="email"
            placeholder="email@gmail.com"
            className="bg-modalHover p-3 rounded-md outline-none font-semibold text-base transition-opacity opacity-60 focus:opacity-100"
          />
          <ErrorMessage name="email" />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="font-bold text-base mb-1 opacity-70"
          >
            Enter your message:
          </label>
          <Field
            as="textarea"
            name="message"
            placeholder="Comment..."
            className="bg-modalHover p-3 rounded-md outline-none font-semibold text-base transition-opacity opacity-60 focus:opacity-100 resize-none min-h-32"
          />
          <ErrorMessage name="message" />
        </div>
        <button
          type="submit"
          className="ml-auto bg-green text-modal font-bold rounded-md py-2 px-6 transition-opacity hover:opacity-80"
        >
          Send message
        </button>
      </Form>
    </Formik>
  );
}
