// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "../../public/hero.webp";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div>
          
          <div className="flex items-center justify-start space-x-4">
            <Image
              src={"/eureka.jpg"}
              height={100}
              width={100}
              alt="logo"
              className="rounded-full"
            />
            <span className="text-3xl">×</span>
            <Image
              src={"/vit.jpg"}
              height={100}
              width={100}
              alt="logo"
              className="rounded-full"
            />
          </div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href="https://9d8.dev">
              We Are Recruiting! <ArrowRight className="w-4" />
            </Link>
          </Button>
          <h1>
            <Balancer>Welcome to the Eureka Club!</Balancer>
          </h1>
          <p className="text-xl font-medium">Innovate, Collaborate, Achieve</p>
          <h3 className="text-muted-foreground">
            <Balancer>
              The Eureka Club at VIT Bhopal University is your gateway to a
              world of technological innovation and excellence. Join us to
              explore the latest in AI, data science, web development, and more.
              Together, we can push the boundaries of technology and create
              solutions that make a difference.
            </Balancer>
          </h3>
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="h-full w-full object-cover object-center rounded-lg"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
              draggable="false"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
