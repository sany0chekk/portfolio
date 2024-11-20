import ProjectsList from "../components/ProjectsList";
import Container from "../components/shared/Container";
import Section from "../components/shared/Section";
import SectionTitle from "../components/ui/SectionTitle";

export default function Projects() {
  return (
    <Section className="py-10 lg:py-20">
      <Container>
        <SectionTitle className="mb-6">My projects:</SectionTitle>
        <ProjectsList />
      </Container>
    </Section>
  );
}
