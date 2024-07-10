import Image from "next/image";
import { Main, Section, Container } from "@/components/craft";
import Hero from "@/components/Hero";
import FeatureLeft from "@/components/feature-left";
import FeatureRight from "@/components/feature-right";
import FeatureSet from "@/components/feature-set";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import Newsletter from "@/components/newsletter";
import VisionSection from "@/components/our-vision";
import TeamSection from "@/components/team";

export default function Home() {
  return (
    <Main>
      <Section>
        <Hero />
        <VisionSection />
        <FeatureLeft />
        <FeatureRight />
        <FeatureSet />
        <TeamSection />
        <Newsletter />
        {/* <CTA /> */}
        <FAQ />
        <Footer />
      </Section>
    </Main>
  );
}
