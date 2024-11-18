"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";

export default function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form className="bg-modal p-6 rounded-md flex flex-col gap-6">
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
