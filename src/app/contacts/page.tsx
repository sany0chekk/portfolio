import Link from "next/link";
import Container from "../components/shared/Container";
import Section from "../components/shared/Section";
import { Linkedin, Mail, MapPinHouse, Send } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function Contacts() {
  return (
    <Section className="py-10 lg:py-20">
      <Container className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <div className="md:w-1/2">
          <p className="font-bold text-lg opacity-80 mb-10">
            I’d love to hear from you! Whether you have a question, a project
            idea, or just want to connect, feel free to reach out. I’m always
            open to new opportunities and collaborations.
          </p>
          <ul className="grid gap-6 md:gap-3">
            <li className="flex gap-3">
              <Mail size={20} />
              <div className="flex flex-col md:flex-row gap-1">
                <p className="font-bold text-base">Email: </p>
                <Link
                  href="mailto:veselyy.oleksandr@gmail.com"
                  className="text-base font-bold opacity-60 underline"
                >
                  veselyy.oleksandr@gmail.com
                </Link>
              </div>
            </li>
            <li className="flex gap-3">
              <Send size={20} />
              <div className="flex flex-col md:flex-row gap-1">
                <p className="font-bold text-base">Telegram: </p>
                <Link
                  href="https://t.me/hackingbegin"
                  className="text-base font-bold opacity-60 underline"
                >
                  @hackingbegin
                </Link>
              </div>
            </li>
            <li className="flex gap-3">
              <Linkedin size={20} />
              <div className="flex flex-col md:flex-row gap-1">
                <p className="font-bold text-base">LinkedIn: </p>
                <Link
                  href="https://www.linkedin.com/in/o-veselyi/"
                  className="text-base font-bold opacity-60 underline"
                >
                  Oleksandr Veselyi
                </Link>
              </div>
            </li>
            <li className="flex gap-3">
              <MapPinHouse size={20} />
              <div className="flex flex-col md:flex-row gap-1">
                <p className="font-bold text-base">Location: </p>
                <p className="text-base font-bold opacity-60">
                  Ukraine, Chernivtsi
                  <br />
                  <span className="opacity-50 text-sm">
                    (Available for remote work)
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
