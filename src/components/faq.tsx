// React and Next.js imports
import React from "react";

// Third-party library imports
import { ArrowUpRight } from "lucide-react";

// UI component imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Custom components
import { Section, Container } from "@/components/craft";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "What is the Eureka Club and who can join?",
    answer:
      "The Eureka Club is a community of tech enthusiasts at VIT Bhopal University focused on fostering innovation, collaboration, and growth in fields like AI, data science, and web development. Any student at VIT Bhopal University with an interest in technology and innovation is welcome to join.",
    link: "https://google.com",
  },
  {
    question: "How can I become a member of the Eureka Club?",
    answer:
      "To become a member, simply visit our membership page and fill out the registration form. Once you've submitted the form, our team will review your application and get back to you with the next steps. Membership is open to all students of VIT Bhopal University who are passionate about technology and innovation.",
  },
  {
    question: "What types of events and activities does the Eureka Club organize?",
    answer:
      "The Eureka Club organizes a variety of events and activities, including tech talks, hackathons, workshops, and project showcases. These events are designed to enhance your skills, provide hands-on experience, and offer networking opportunities with fellow tech enthusiasts and industry experts.",
  },
  {
    question: "How can I participate in or propose a project within the Eureka Club?",
    answer:
      "To participate in or propose a project, visit our projects page where you can find details about ongoing projects and submission guidelines for new project proposals. We encourage members to submit innovative ideas and collaborate with others to bring those ideas to life. Our team will review your proposal and provide feedback and support to help you get started.",
  },
];

const FAQ = () => {
  return (
    <Section>
      <Container>
        <h3 className="!mt-0">Frequently Asked Questions</h3>
        <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to us at <a href="mailto:eureka@vitbhopal.ac.in">eureka@vitbhopal.ac.in</a>
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
