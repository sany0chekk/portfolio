import { study, work } from "@/content/work-and-study";
import ExperienceList from "./ExperienceList";
import Container from "./shared/Container";
import Section from "./shared/Section";
import SectionTitle from "./ui/SectionTitle";

export default function WorkAndStudy() {
  return (
    <Section>
      <Container>
        <SectionTitle className="mb-6">More about me</SectionTitle>
        <ExperienceList title="Work" items={work} className="mb-14" />
        <ExperienceList title="Study" items={study} />
      </Container>
    </Section>
  );
}
