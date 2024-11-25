"use client";

import ProjectGallery from "@/app/components/ProjectGallery";
import ProjectSkills from "@/app/components/ProjectSkills";
import Container from "@/app/components/shared/Container";
import Section from "@/app/components/shared/Section";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { projects } from "@/content/projects";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Project() {
  const { id } = useParams();

  const project = projects.find((project) => Number(id) === project.id);

  if (!project) {
    return <p>Project not found!</p>;
  }

  const { name, description, date, images, skills, link, github } = project;

  return (
    <Section className="py-10 lg:py-20">
      <Container>
        <SectionTitle>{name}</SectionTitle>
        <p className="opacity-60 font-bold mb-4">
          Implementation time: <span>{date}</span>
        </p>
        <ProjectSkills skills={skills} className="mb-10" />
        <p className="font-bold opacity-50 mb-6">{description}</p>
        <div className="flex items-center gap-6 mb-10">
          <Link
            href={link}
            target="_blank"
            className="flex items-center gap-1 font-bold bg-white text-dark p-2 rounded-md transition-opacity hover:opacity-80"
          >
            <ExternalLink />
            Live page
          </Link>
          <Link
            href={github}
            target="_blank"
            className="flex items-center gap-1 font-bold bg-green text-dark p-2 rounded-md transition-opacity hover:opacity-80"
          >
            <ExternalLink />
            GitHub page
          </Link>
        </div>
        <ProjectGallery images={images} />
      </Container>
    </Section>
  );
}
