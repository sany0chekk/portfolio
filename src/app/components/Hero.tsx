import { Download } from "lucide-react";
import Container from "./shared/Container";
import Section from "./shared/Section";
import { benefits } from "@/content/benefits";
import Link from "next/link";

export default function Hero() {
  return (
    <Section>
      <Container className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2">
          <p className="p-1 bg-green font-bold text-base text-dark inline-block rounded-md mb-4">
            Fullstack Developer
          </p>
          <h1 className="font-bold text-2xl mb-2">Hi! I’m Oleksandr Veselyi</h1>
          <p className="font-semibold text-lg opacity-70 mb-14">
            I’m a Front-end Developer who creates modern and efficient web
            applications with a focus on usability and performance. I’m
            constantly improving my skills, experimenting with new technologies,
            and always open to challenges to deliver the best solutions for my
            clients.
          </p>
          <Link
            href="./cv.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 font-bold p-3 bg-white text-dark rounded-md transition-opacity hover:opacity-80"
          >
            Download CV
            <Download />
          </Link>
        </div>
        <div className="lg:w-1/2">
          <h2 className="mb-2 font-bold text-base opacity-50">
            Why Choose Me?
          </h2>
          {benefits.length > 0 && (
            <ul className="grid gap-2">
              {benefits.map(({ title, descrition }, index) => (
                <li
                  key={index}
                  className="bg-modal p-4 rounded-md shadow-md transition hover:bg-modalHover hover:shadow-lg"
                >
                  <h2 className="text-green font-bold text-lg mb-4">{title}</h2>
                  <p className="font-semibold text-sm opacity-60">
                    {descrition}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </Section>
  );
}
