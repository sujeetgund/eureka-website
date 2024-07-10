// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "../../public/projects.jpg";

const FeatureRight = () => {
  return (
    <Section id="projects">
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0">About Our Projects</h3>
          <p className="font-light leading-[1.4] opacity-70">
            The Eureka Club engages in a variety of innovative projects that
            span across AI, data science, and web development. Our projects are
            designed to provide hands-on experience, foster teamwork, and drive
            technological advancements. Explore some of our ongoing and
            completed projects to see the impact we&apos;re making.
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="#">Get Started</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">Learn More {"->"}</Link>
            </Button>
          </div>
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={Placeholder}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
      </Container>
    </Section>
  );
};

export default FeatureRight;
