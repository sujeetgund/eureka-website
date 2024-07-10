// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section, Container } from "@/components/craft";

// Asset imports
import Logo from "../../public/eureka.jpg";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="grid gap-4">
            <Link href="/">
              <h3 className="sr-only">Eureka Club</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={90}
                height={90}
                className="transition-all hover:opacity-75 rounded-full"
              ></Image>
            </Link>
            <p>
              <Balancer>
                Eureka Club is a community of tech enthusiasts at VIT Bhopal
                University. We are dedicated to fostering innovation,
                collaboration, and growth in the fields of AI, data science, and
                web development.
              </Balancer>
            </p>
            <p className="text-muted-foreground">
              © <a href="https://github.com/brijr/components">Eureka Club</a>
              {""} All rights reserved. 2024-present.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Website</h5>
            <Link href="/">About Us</Link>
            <Link href="/">Upcoming Events</Link>
            <Link href="/">Blog</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Club</h5>
            <Link href="#vision">Our Vision</Link>
            <Link href="#team">Our Team</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
