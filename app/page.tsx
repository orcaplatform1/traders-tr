import { Hero } from "@/components/hero";
import { CompanyStatement } from "@/components/company-statement";
import { BrandGrid } from "@/components/brand-grid";
import { BrandsStatement } from "@/components/brands-statement";
import { WhatWeDo } from "@/components/what-we-do";
import { VenturesSection } from "@/components/ventures-section";
import { NumbersSection } from "@/components/numbers-section";
import { ApproachSection } from "@/components/approach-section";
import { InsightsSection } from "@/components/insights-section";
import { NewsroomSection } from "@/components/newsroom-section";
import { PartnershipSection } from "@/components/partnership-section";
import { AboutSection } from "@/components/about-section";
import { CareersSection } from "@/components/careers-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Hero imageSrc="/hero.webp" imageSrcMobile="/hero-mobile.webp" />
      <CompanyStatement />
      <BrandGrid />
      <BrandsStatement />
      <WhatWeDo />
      <VenturesSection />
      <NumbersSection />
      <ApproachSection />
      <InsightsSection />
      <NewsroomSection />
      <PartnershipSection />
      <AboutSection />
      <CareersSection />
      <ContactSection />
    </>
  );
}
