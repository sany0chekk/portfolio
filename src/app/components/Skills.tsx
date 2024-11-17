import Container from "./shared/Container";
import SkillsList from "./SkillsList";

import Section from "./shared/Section";
import SectionTitle from "./ui/SectionTitle";
import { skills } from "@/content/skills";

export default function Skills() {
  return (
    <Section className="bg-secondDark">
      <Container>
        <SectionTitle className="mb-6">Tech Stack</SectionTitle>
        <div className="flex flex-col md:flex-row gap-20">
          <SkillsList
            title="Front-end"
            items={skills[0]}
            className="md:w-1/2"
          />
          <SkillsList title="Back-end" items={skills[1]} className="md:w-1/2" />
        </div>
      </Container>
    </Section>
  );
}
